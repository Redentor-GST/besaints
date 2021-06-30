import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { getDailyPhrase } from '../components/Phrase'
import { Platform } from 'react-native';
import Database from '../db/db';
import { hourTrigger, minuteTrigger } from '../consts'
import { createDateTrigger, secondsLeftTo } from './utils';

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'phrases'
const db = new Database();

interface Phrase {
  text: string,
  author: string
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
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

/**
 * @brief checks if there is a notification scheduled at {triggerHour}:{triggerMinute}
 * @param triggerHour 
 * @param triggerMinute 
 * Just a note to myself (Julian)
 * This works because
 * if a notification is scheduled, we dont waste resources cancelling it and scheduling another
 * If the notification was already sent, it gets erased from the scheduled notifications array automatically
 * so it wont cause trouble
 */
async function shouldSchedule(triggerHour: number, triggerMinute: number, data: Phrase) {
  const notifs = await Notifications.getAllScheduledNotificationsAsync()
  for (let i = 0; i < notifs.length; i++) {
    const notifData = notifs[i].content.data;
    const hour = notifData.hourTrig;
    const minute = notifData.minuteTrig;
    const text = notifData.text;
    if (hour === triggerHour && triggerMinute == minute && text === data.text)
      return false;
  }
  return true;
};

const notification = (triggerHour: number, triggerMinute: number, data: Phrase, instant: boolean) => {
  const now = new Date();
  const dateTrigger = createDateTrigger(triggerHour, triggerMinute);
  return {
    content: {
      title: "Frase del dia",
      body: data.text + " " + data.author,
      data: {
        setAt: now.toTimeString(),
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
          seconds: secondsLeftTo(triggerHour, triggerMinute),
          //For some reason this does not work, the function does, but the date field doesn`t
          //date: getDateTrigger(triggerHour, triggerMinute),
          channelId: 'default',
        }
  }
}

//Default value is 7:00 am
export default async function scheduleNotification(instant: boolean = false,
  triggerHour: number = hourTrigger, triggerMinute: number = minuteTrigger) {
  const ssn = await db.getShouldSendNotifications();
  if (!ssn) return;
  const data = await getDailyPhrase(phrase);
  const shouldSched = await shouldSchedule(triggerHour, triggerMinute, data);
  if (!shouldSched) return;
  //await Notifications.cancelAllScheduledNotificationsAsync();
  await registerForPushNotificationsAsync()
    .catch(e => console.error("Exception in registerNotifs: " + e))
  await Notifications.scheduleNotificationAsync(notification(triggerHour, triggerMinute, data, instant))
    .catch(e => console.error("Exception in schedule Notifications: " + e))

  if (!instant)
    Notifications.getAllScheduledNotificationsAsync()
      .then(notifs => console.log("A: Notificaciones scheduleadas : ", notifs))
}