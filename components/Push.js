import * as Notifications from 'expo-notifications';
import React, { Component , useState , useEffect} from 'react'
import { View, Text, Platform } from 'react-native'
import Constants from 'expo-constants';
import { getDailyPhrase } from './Phrase'

//TODO let the user set these
const NotificationTriggerHour = 7;
const NotificationTriggetMinute = 0;
const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'phrases'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    sticky : false,
  }),
});

async function registerForPushNotificationsAsync () {
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

export default function Push () {
    const [token,setToken] = useState("");
    const [data, setData] = useState([]);
  
    useEffect  (() => { 
        getDailyPhrase(phrase)
        .then((res) => setData(res))
        .catch((exc) => console.log(exc));

        registerForPushNotificationsAsync().then((token) => setToken(token));

        if (Platform.OS === 'android') {
            Notifications.scheduleNotificationAsync({
                content : {
                    title : "Daily Phrase",
                    body : data.text + " " + data.author,
                    vibrate : true,
                },
                //! This works, but throws an exception
                //![Unhandled promise rejection: Error: Exception in HostFunction: Malformed calls from JS: field sizes are different.]
                //? Works? Yes Should we worry? Probably
                trigger: {
                    hour: NotificationTriggerHour,
                    minute: NotificationTriggetMinute,
                    repeats : true,
                },
            })
            .then(() => console.log("Sent!"))
        }
        else if (Platform.OS === 'ios') {
          Notifications.scheduleNotificationAsync({
            content : {
                title : "Daily Phrase",
                body : data.text + data.author,
                vibrate : true,
            },
            trigger: {
                type : 'daily',
                hour: NotificationTriggerHour,
                minute: NotificationTriggetMinute,
            },
        })
        .then(() => console.log("Sent!"))
        }
    },[])  

    return (
        <View style={{backgroundColor : 'black'}}></View>
    )
}