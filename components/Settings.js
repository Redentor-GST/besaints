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
import { invertShouldSendNotifications } from '../services/BackgroundTasks';
import DateTimePicker from '@react-native-community/datetimepicker';
import Database from '../db/db';
import { farFuture, userDefaultLanguage } from '../utils/consts';
import { Picker } from '@react-native-picker/picker';
import { nearestNotification } from '../utils/utils';

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
                    nearestNotif.getTime() === farFuture.getTime() ?
                        setareThereNotifications(false) :
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
            <BouncyCheckbox isChecked={ssn} text='Enviar Notificationes' style={{ alignSelf: 'center' }}
                onPress={async () => {
                    const _ssn = await db.getShouldSendNotifications();
                    await db.setShouldSendNotifications(!_ssn);
                    setssn(!_ssn);
                }
                } />
            <Button onPress={showTimepicker} title="Definir horario de notificaciones" />
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
            <View style={{ alignSelf: 'center' }}>
                <Picker
                    selectedValue={selectedLanguage}
                    style={{ height: 20, width: 130 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedLanguage(itemValue);
                        db.setUserDefinedLanguage(itemValue);
                    }}
                >
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="Spanish" value="es" />
                </Picker>
            </View>

            {/**
             * DEBUG
            <Button title='Instant Notification' onPress={_ => scheduleNotification(true)} />
            <Text>
                Next Notification : {areThereNotifications ? nextNotifTime + " " : "NONE"}
            </Text>
            <Text> Should send notifications? {ssn ? " Yes" : " No"} </Text>
            <Text> Date Trigger for notifications {notifDateTrigger.toTimeString()} </Text>
            */}
        </View>
    )
}