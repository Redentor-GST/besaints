/*
TODO schedule a yearly notification that reminds the people
to open the app at the beginning of the year to load the 
new phrases
*/


import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import Database from '../db/db';
import { createDateTrigger } from './utils';
import { Phrase } from './interfaces';
import { defaultMinuteTrigger, defaultHourTrigger, daysSince1Jan } from './consts';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default class NotificationsUtils {

  constructor() { }

  db = new Database();

  getAllScheduledNotifications = async () =>
    await Notifications.getAllScheduledNotificationsAsync();

  cancelAllScheduledNotifications = async () =>
    await Notifications.cancelAllScheduledNotificationsAsync();

  private async registerForPushNotificationsAsync() {
    let token = "";
    if (!Constants.isDevice) {
      alert('Must use physical device for Push Notifications');
      return;
    }
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

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Token: ", token);
    return token;
  };

  private notification = (triggerHour: number, triggerMinute: number, data: Phrase, instant: boolean) => {
    const dateTrigger = createDateTrigger(data.date, triggerHour, triggerMinute);
    return {
      content: {
        title: "Frase del dia",
        body: data.text + " " + data.author,
        data: {
          triggerDateStr: dateTrigger.toDateString() + " " + dateTrigger.toTimeString(),
          hourTrig: triggerHour,
          minuteTrig: triggerMinute,
          text: data.text
        }
      },
      trigger: instant ? null :
        Platform.OS === 'ios' ?
          {
            date: dateTrigger,
            type: 'calendar',
            repeats: 'false'
          }
          :
          {
            date: dateTrigger,
            channelId: 'default',
            repeats: 'false'
          }
    }
  }

  private async scheduleNotification(instant: boolean = false,
    triggerHour: number, triggerMinute: number, data: Phrase) {

    if (!await this.db.getShouldSendNotifications()) return;

    const notification = this.notification(triggerHour, triggerMinute, data, instant);
    await Notifications.scheduleNotificationAsync(notification)
      .catch(e => console.error("Exception in schedule Notifications: " + e))
  }

  async scheduleAllYearlyNotifications() {
    const phrases = await this.db.getAllPhrases();
    const dateTrigger = await this.db.getDateTrigger();
    const hourTrigger = dateTrigger ? dateTrigger.hour : defaultHourTrigger;
    const minuteTrigger = dateTrigger ? dateTrigger.minute : defaultMinuteTrigger;
    const daysSinceYearsStarted = daysSince1Jan();
    const token = await this.registerForPushNotificationsAsync()
      .catch(e => console.error("Exception in registerNotifs: " + e))
    if (!token) return;
    for (const phrase of phrases.slice(daysSinceYearsStarted)) {
      console.log("Scheduling the notification at: ", phrase.date)
      await this.scheduleNotification(false, hourTrigger, minuteTrigger, phrase);
    }

    console.log("Finished scheduling notifications")
  }
}

