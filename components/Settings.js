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
                    console.log("This error just means there are no notifications scheduled ->", e);
                    setareThereNotifications(false);
                }
            })
            .catch(e => console.error(e));
    }, [])

    return (
        <View>
            <BouncyCheckbox text='Enviar Notificationes' onPress={() => invertShouldSendNotifications()} />
            <Text>Hora</Text>
            <TextInput placeholder='Default 7:00 AM' onChangeText={hour => setnotificationHour(hour)} />
            <Text>Minuto</Text>
            <TextInput placeholder='Default 7:00 AM' onChangeText={minute => setnotificationMinute(minute)} />
            <Button title='Instant Notification' onPress={_ => scheduleNotification(true)}></Button>
            <Button title='Next Minute Notification' onPress={_ => {
                const now = new Date();
                scheduleNotification(false, now.getHours(), now.getMinutes() + 1);
            }}></Button>
            <Button title='Next Half Hour Notification' onPress={_ => {
                const now = new Date();
                const nexthhour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 30);
                scheduleNotification(false, nexthhour.getHours(), nexthhour.getMinutes());
            }}></Button>
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
            <Button title='Cancelar todas las notificaciones'
                onPress={async () => await Notifications.cancelAllScheduledNotificationsAsync()}>
            </Button>
            <Button title='Log all notifications' onPress={async _ => {
                const notifs = await Notifications.getAllScheduledNotificationsAsync();
                console.log(notifs);
            }}></Button>

            <Text>
                Next Notification : {areThereNotifications ? nextNotifTime + " " : "NONE"}
            </Text>
        </View>
    )
}