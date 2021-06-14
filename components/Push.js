import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native'
import Constants from 'expo-constants';
import { getDailyPhrase } from './Phrase'

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'phrases'
const hourTrigger = 20;
const minuteTrigger = 45;

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
    Notifications.setNotificationChannelAsync('default', {
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

export default async function sendNotification() {
  const data = await getDailyPhrase(phrase)

  //? Is setting the token necessary?
  const token = await registerForPushNotificationsAsync();

  await Notifications.cancelAllScheduledNotificationsAsync();
  const today = new Date();
  const trig = await Notifications.getNextTriggerDateAsync({
    seconds: secondsLeftTo(hourTrigger, minuteTrigger)
  })
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Frase del dia",
      body: data.text + " " + data.author,
    },
    trigger: Platform.OS === "ios" ? {
      hour: hourTrigger,
      minute: minuteTrigger,
    } : trig
  })
    .then(() => Notifications.scheduleNotificationAsync({
      content: {
        title: "Alert",
        body: "Notification set to " + hourTrigger + ":" + minuteTrigger
      },
      trigger: null
    }))
    .catch(e => console.log(e))

  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  console.log(time + " Notification set: {\n" +
    "   Hour: " + hourTrigger + ",\n" +
    "   Minute: " + minuteTrigger + ",\n" +
    "   Body: " + data.text + " " + data.author + ",\n" +
    "}"
  );

  Notifications.getAllScheduledNotificationsAsync().then(notifs => console.log("A: Notificaciones scheduleadas : ", notifs))
}