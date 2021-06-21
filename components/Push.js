import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { getDailyPhrase } from './Phrase'
import { Platform } from 'react-native';

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'phrases'
const hourTrigger = 7;
const minuteTrigger = 0;
let shouldSendNotifications = true;

/*
export const getShouldSendNotifications = () => AsyncStorage.getItem("shouldSendNotification");

const setShouldSendNotifications = (value) => AsyncStorage.setItem("shouldSendNotification", value)
*/
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

function getDateTrigger(hourTrigger, minuteTrigger) {
  const rn = new Date()
  if (hourTrigger < rn.getHours() || hourTrigger == rn.getHours() && minuteTrigger < rn.getMinutes())
    rn.setDate(rn.getDate() + 1);
  rn.setHours(hourTrigger, minuteTrigger);

  return rn;
}

function secondsLeftTo(hour, minute) {
  const now = new Date();
  const future = getDateTrigger(hour, minute);
  let dif = now.getTime() - future.getTime();
  const seconds = Math.abs(dif / 1000);

  return seconds;
}

async function cancelScheduledNotification(triggerHour, triggerMinute) {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  if (scheduled === []) return;
  try {
    for (let i = 0; i < scheduled.length; i++) {
      const notifData = scheduled[i].content.data;
      if (notifData.hourTrig === triggerHour && notifData.minuteTrig === triggerMinute)
        await Notifications.cancelScheduledNotificationAsync(scheduled[i].identifier);
    }
  }
  catch (e) {
    console.error("Exception in cancelScheduledNotification: " + e.toString());
  }
}

const notification = (triggerHour, triggerMinute, data, instant) => {
  const now = new Date();
  const dateTrigger = getDateTrigger(triggerHour, triggerMinute);
  return {
    content: {
      title: "Frase del dia",
      body: data.text + " " + data.author,
      data: {
        setAt: now.toTimeString(),
        triggerDate: dateTrigger.toDateString() + " " + dateTrigger.toTimeString(),
        hourTrig: triggerHour,
        minuteTrig: triggerMinute
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

export default async function scheduleNotification(instant = false, triggerHour = hourTrigger, triggerMinute = minuteTrigger) {
  if (!shouldSendNotifications) return;
  const data = await getDailyPhrase(phrase);
  await cancelScheduledNotification(triggerHour, triggerMinute).catch(e => console.error(e));
  await registerForPushNotificationsAsync().catch(e => console.error("Exception in registerNotifs: " + e))
  await Notifications.scheduleNotificationAsync(notification(triggerHour, triggerMinute, data, instant))
    .catch(e => console.error("Exception in schedule Notifications: " + e))

  if (!instant)
    Notifications.getAllScheduledNotificationsAsync()
      .then(notifs => console.log("A: Notificaciones scheduleadas : ", notifs))
}