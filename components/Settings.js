import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import sendNotification from './Push';
import * as Notifications from 'expo-notifications';

function getDate(seconds) {
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds() + seconds);
    return next;
}

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
                    const secondsLeft = res[0].trigger.seconds;
                    setnextNotifTime(Math.floor(secondsLeft));
                    console.log(nextNotifTime);
                }
                catch (e) {
                    console.log(e);
                    setareThereNotifications(false);
                }
            })
    }, [])

    return (
        <View>
            <BouncyCheckbox text='Enviar Notificationes' onPress={() => setsendNotifications(!sendNotifications)} />
            <Text>Hora</Text>
            <TextInput placeholder='Default 7:00 AM' onChangeText={hour => setnotificationHour(hour)} />
            <Text>Minuto</Text>
            <TextInput placeholder='Default 7:00 AM' onChangeText={minute => setnotificationMinute(minute)} />
            <Button title='Instant Notification' onPress={_ => sendNotification(true)}></Button>
            <Button title='Next Minute Notification' onPress={_ => {
                const now = new Date();
                sendNotification(false, now.getHours(), now.getMinutes() + 1);
            }}></Button>
            <Button title='Next Half Hour Notification' onPress={_ => {
                const now = new Date();
                const nexthhour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 30);
                sendNotification(false, nexthhour.getHours(), nexthhour.getMinutes());
            }}></Button>
            <Text>
                Next Notification :
                {areThereNotifications ?
                    getDate(nextNotifTime).toDateString() + " "
                    + getDate(nextNotifTime).toTimeString().replace('GMT-0300 (-03)', '') : "NONE"}
            </Text>
        </View>
    )
}