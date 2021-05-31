import * as Notifications from 'expo-notifications';
import React, { Component , useState , useEffect} from 'react'
import { View, Text, Platform } from 'react-native'
import Constants from 'expo-constants';

export default function Push () {
    const [token,setToken] = useState("");

    useEffect  (() => { 
        const registerForPushNotificationsAsync = async () => {
            let token = "";
            if (Constants.isDevice) {
              const { status: existingStatus } = await Notifications.getPermissionsAsync();
              let finalStatus = existingStatus;
              if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
              }
              if (finalStatus !== 'granted') {
                console.log('Failed to get push token for push notification!');
                return;
              }
              token = (await Notifications.getExpoPushTokenAsync()).data;
              setToken(token);
            } 
            else
              alert('Must use physical device for Push Notifications');
          
            if (Platform.OS === 'android') {
              Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
              });
            }
        };
        registerForPushNotificationsAsync();
        //Because for IOS apps you will need to use CalendarNotificationTrigger.
        if (Platform.OS === 'android') {
            Notifications.scheduleNotificationAsync({
                content : {
                    title : "Hi",
                    body : "Putoelquelee",
                    vibrate : true,
                },
                trigger : null
                /*
                TODO, use this to schedule the notification
                trigger: {
                    type: 'daily',
                    hour: 7,
                    minute: 00,
                },
                */
            })
            .catch(() => console.log("Exception on Push Notification"))
            .then(() => console.log("Sent!"))
        }
    },[])  

    return (
        <View style={{backgroundColor : 'black'}}></View>
    )
}