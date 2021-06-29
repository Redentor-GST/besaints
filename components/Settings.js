import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    Text,
    Button,
    Platform,
    StyleSheet
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Notifications from 'expo-notifications';
import scheduleNotification from '../utils/push';
import { invertShouldSendNotifications } from '../services/ScheduleNotificationTask';
import DateTimePicker from '@react-native-community/datetimepicker';
import Database from '../db/db';
import { userDefaultLanguage } from '../consts';
import { Picker } from '@react-native-picker/picker';


const farFuture = new Date(4000, 12, 28, 23, 59, 59);

function nearestNotification(notifs) {
    let min = farFuture;
    for (let i = 0; i < notifs.length; i++) {
        try {
            const date = notifs[i].content.data;
            const now = new Date();
            const realDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), date.hourTrig, date.minuteTrig)
            if (realDate.getTime() < min.getTime())
                min = realDate;
        }
        catch (e) {
            console.error(e);
        }
    }
    return min;
}

const db = new Database();

export default function Settings() {
    const [nextNotifTime, setnextNotifTime] = useState("");
    const [areThereNotifications, setareThereNotifications] = useState(true);
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [ssn, setssn] = useState(true);
    const [notifDateTrigger, setnotifDateTrigger] = useState(new Date());
    const [selectedLanguage, setSelectedLanguage] = useState(userDefaultLanguage());

    const onChange = async (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setnotifDateTrigger(currentDate)
        await Notifications.cancelAllScheduledNotificationsAsync();
        await db.setDateTrigger(currentDate.toTimeString());
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };

    useEffect(() => {

        db.getShouldSendNotifications()
            .then(res => setssn(res));
        db.getDateTrigger()
            .then(dateTrigger => setnotifDateTrigger(dateTrigger));
        db.getUserDefinedLanguage()
            .then(userDefinedLanguage => {
                if (userDefinedLanguage)
                    setSelectedLanguage(userDefinedLanguage);
            })

        Notifications.getAllScheduledNotificationsAsync()
            .then(res => {
                try {
                    const nearestNotif = nearestNotification(res);
                    if (nearestNotif.getTime() === farFuture.getTime())
                        setareThereNotifications(false)
                    else
                        setnextNotifTime(nearestNotif.toTimeString());
                }
                catch (e) {
                    console.warn("This warning just means there are no notifications scheduled ->", e);
                    setareThereNotifications(false);
                }
            })
            .catch(e => console.error(e));
    }, [])

    return (
        <View>
            {/* Use another thing for checkbox, this one is buggy i think */}
            <BouncyCheckbox isChecked={ssn} text='Enviar Notificationes' onPress={async () => {
                const _ssn = await invertShouldSendNotifications();
                setssn(_ssn);
            }
            } />
            <Picker
                selectedValue={selectedLanguage}
                style={{ height: 30, width: 130 }}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedLanguage(itemValue);
                    db.setUserDefinedLanguage(itemValue);
                }}
            >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Spanish" value="es" />
            </Picker>
            <Button title='Instant Notification' onPress={_ => scheduleNotification(true)} />
            <View>
                <Button onPress={showTimepicker} title="Definir horario de notificaciones" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <Text>
                Next Notification : {areThereNotifications ? nextNotifTime + " " : "NONE"}
            </Text>
            <Text> Should send notifications? {ssn ? " Yes" : " No"} </Text>
            <Text> Date Trigger for notifications {notifDateTrigger.toTimeString()} </Text>

        </View>
    )
}