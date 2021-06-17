import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { getDailyPhrase } from './Phrase'
import { Platform } from 'react-native';

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'phrases'
const hourTrigger = 21;
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

function secondsLeftTo(hour, minute) {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
  const dif = now.getTime() - future.getTime();
  const seconds = Math.abs(dif / 1000);
  return seconds;
}

/**
 * TODO switch to this for android
 * @brief Schedules a notification for today at hourTrigger : minuteTrigger
 * @param { hourTrigger }
 * @param { minuteTrigger }
 * @returns {today} date
 function getDateTrigger(hourTrigger, minuteTrigger) {
   const today = new Date()
   today.setHours(hourTrigger, minuteTrigger);
   
   return today;
  }
*/
export default async function sendNotification(instant = false, triggerHour = hourTrigger, triggerMinute = minuteTrigger) {
  if (!shouldSendNotifications) return;
  const data = await getDailyPhrase(phrase)
  await Notifications.cancelAllScheduledNotificationsAsync()
  await registerForPushNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Frase del dia",
      body: data.text + " " + data.author,
    },
    trigger: instant ? null :
      Platform.OS === "ios" ? {
        hour: triggerHour,
        minute: triggerMinute,
      } :
        {
          seconds: secondsLeftTo(triggerHour, triggerMinute),
          channelId: 'default',
        }
  })
    .catch(e => console.error(e))

  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  console.log(instant ? "Instant Notification" : time + " Notification set: {\n" +
    "   Hour: " + triggerHour + ",\n" +
    "   Minute: " + triggerMinute + ",\n" +
    "   Body: " + data.text + " " + data.author + ",\n" +
    "}"
  );

  if (!instant)
    Notifications.getAllScheduledNotificationsAsync().then(notifs => console.log("A: Notificaciones scheduleadas : ", notifs))
}