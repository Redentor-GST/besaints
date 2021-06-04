import * as Notifications from 'expo-notifications';
import React, { Component , useState , useEffect, useRef} from 'react'
import { View, Text, Platform } from 'react-native'
import Constants from 'expo-constants';
import { getDailyPhrase } from './Phrase'

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'phrases'
const hourTrigger = 7;
const minuteTrigger = 0;

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

export default async function sendNotification () {
    const data = await getDailyPhrase(phrase)

    //? Is setting the token necessary?
    const token = await registerForPushNotificationsAsync();
    let notificationListener;
    Notifications.addNotificationReceivedListener(notification => notificationListener = notification);
    let responseListener;
    Notifications.addNotificationResponseReceivedListener(response => {
      responseListener = response;
      console.log(response);
    });

    await Notifications.cancelAllScheduledNotificationsAsync();
    Notifications.scheduleNotificationAsync({
      content : {
          title : "Daily Phrase",
          body : data.text + " " + data.author,
          vibrate : true,
      },
      trigger : {
        hour : hourTrigger,
        minute : minuteTrigger,
      },
    });
    console.log("Notification: ", data.text + " " + data.author + " set to " + hourTrigger + ":" + minuteTrigger);

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };  
}