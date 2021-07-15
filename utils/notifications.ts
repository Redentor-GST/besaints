import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import Database from '../db/db';
import { createDateTrigger } from './utils';
import { Phrase } from './interfaces';
import { defaultMinuteTrigger, defaultHourTrigger } from './consts';

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
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
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
        Platform.OS === "ios" ? {
          hour: triggerHour,
          minute: triggerMinute,
        } :
          {
            //seconds: secondsLeftTo(triggerHour, triggerMinute),
            //For some reason this does not work, the function does, but the date field doesn`t
            date: dateTrigger,
            channelId: 'default',
          }
    }
  }

  private async scheduleNotification(instant: boolean = false,
    triggerHour: number, triggerMinute: number, data: Phrase) {
    await this.registerForPushNotificationsAsync()
      .catch(e => console.error("Exception in registerNotifs: " + e))
    const notification = this.notification(triggerHour, triggerMinute, data, instant);
    await Notifications.scheduleNotificationAsync(notification)
      .catch(e => console.error("Exception in schedule Notifications: " + e))
  }

  async scheduleAllYearlyNotifications() {
    const phrases = await this.db.getAllPhrases();
    const dateTrigger = await this.db.getDateTrigger();
    let hourTrigger = dateTrigger ? dateTrigger.hour : defaultHourTrigger;
    let minuteTrigger = dateTrigger ? dateTrigger.minute : defaultMinuteTrigger;
    for (const phrase of phrases)
      this.scheduleNotification(false, hourTrigger, minuteTrigger, phrase);
  }
}

