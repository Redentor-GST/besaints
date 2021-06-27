import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Notifications from 'expo-notifications';
import scheduleNotification from './Push';
import { invertShouldSendNotifications, setDateTrigger } from '../services/ScheduleNotificationTask';
import DateTimePicker from '@react-native-community/datetimepicker';

function nearestNotification(notifs) {
    let min = new Date(4000, 12, 28, 23, 59, 59);
    for (let i = 0; i < notifs.length; i++) {
        try {
            const date = notifs[i].content.data;
            const now = new Date();
            const realDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), date.hourTrig, date.minuteTrig)
            if (realDate.getTime() < min.getTime()) {
                min = realDate;
            }
        }
        catch (e) {
            console.error("i: " + i.toString() + + e);
        }
    }
    return min;
}

export default function Settings() {
    const [nextNotifTime, setnextNotifTime] = useState(0);
    const [areThereNotifications, setareThereNotifications] = useState(true);
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = async (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        Notifications.cancelAllScheduledNotificationsAsync()
            .then(_ => setDateTrigger(currentDate));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };

    useEffect(() => {
        Notifications.getAllScheduledNotificationsAsync()
            .then(res => {
                try {
                    const nearestNotif = nearestNotification(res);
                    setnextNotifTime(nearestNotif.toTimeString());
                }
                catch (e) {
                    console.error(e);
                    setareThereNotifications(false);
                }
            })
            .catch(e => console.error(e));
    }, [])

    return (
        <View>
            <BouncyCheckbox text='Enviar Notificationes' onPress={() => invertShouldSendNotifications()} />
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
        </View>
    )
}