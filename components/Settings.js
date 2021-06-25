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

export default function Settings() {
    const [sendNotifications, setsendNotifications] = useState(true);
    const [notificationHour, setnotificationHour] = useState(7);
    const [notificationMinute, setnotificationMinute] = useState(0)
    const [nextNotifTime, setnextNotifTime] = useState(0);
    const [areThereNotifications, setareThereNotifications] = useState(true);

    useEffect(() => {
        Notifications.getAllScheduledNotificationsAsync()
            .then(res => {
                try {
                    setnextNotifTime((res[0].content.data.triggerDate).replace('GMT-0300 (-03)', ''));
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
            <BouncyCheckbox text='Enviar Notificationes' onPress={() => setsendNotifications(!sendNotifications)} />
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
            <Text>
                Next Notification : {areThereNotifications ? nextNotifTime + " " : "NONE"}
            </Text>
        </View>
    )
}