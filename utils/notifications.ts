import * as Notifications from 'expo-notifications'
import { isDevice } from 'expo-device'
import { Platform } from 'react-native'
import db from '../db/db'
import { createDateTrigger } from './utils'
import { Phrase } from './interfaces'
import {
  defaultTrigger,
  daysSince1Jan,
  SHARE_CATEGORY,
  SHARE_ACTION,
} from './consts'

const IOS_NOTIFICATIONS_LIMIT = 64

//?Dont know if this is neccesary
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

const getAllScheduledNotifications = async () =>
  await Notifications.getAllScheduledNotificationsAsync()

const cancelAllScheduledNotifications = async () =>
  await Notifications.cancelAllScheduledNotificationsAsync()

//Debug function
const sendInstantNotification = async () =>
  await scheduleNotification(
    19,
    54,
    { text: 'hello', author: 'goodbye', date: '??' },
    true
  )

async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  if (isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    return (await Notifications.getExpoPushTokenAsync()).data
  } else alert('Must use physical device for Push Notifications')
}

const setShareNotificationCategory = async () =>
  await Notifications.setNotificationCategoryAsync(SHARE_CATEGORY, [
    SHARE_ACTION,
  ])

function notification(
  title: string,
  body: string,
  dateTrigger: Date,
  instant: boolean
): Notifications.NotificationRequestInput {
  const trigger = instant ? null : { date: dateTrigger }

  return {
    content: {
      title,
      body,
      data: { datetrigger: dateTrigger.toString() },
      categoryIdentifier: SHARE_CATEGORY,
    },
    trigger,
  }
}

const reminderNotification = (): Notifications.NotificationRequestInput => {
  const today = new Date()
  const title = 'Toca renovar frases!'
  const body =
    'Abre la aplicación así podemos seguir enviándote notificaciones con frases de Santos durante todo el año!'
  const androidDate = new Date(today.getFullYear() + 1, 0, 1, 16, 30, 0)
  const IOSDate = new Date(
    today.getFullYear(),
    today.getMonth() + 2,
    today.getDate(),
    16,
    30,
    0
  )
  const dateTrigger = Platform.OS === 'android' ? androidDate : IOSDate
  const notif = notification(title, body, dateTrigger, false)
  delete notif.content.categoryIdentifier
  return notif
}

async function scheduleNotification(
  triggerHour: number,
  triggerMinute: number,
  data: Phrase,
  instant: boolean = false
) {
  if (!(await db.shouldSendNotifications())) return
  const title = 'Frase del día'
  const body = `${data.text} ${data.author}.`
  const dateTrigger = createDateTrigger(data.date, triggerHour, triggerMinute)
  const today = new Date()
  if (today <= dateTrigger || instant) {
    const notif = notification(title, body, dateTrigger, instant)
    await Notifications.scheduleNotificationAsync(notif)
  }
}

async function scheduleReminderNotification() {
  if (!(await db.shouldSendNotifications())) return
  if (Platform.OS === 'ios') {
    const reminderID = await db.getReminderNotificationID()
    if (reminderID)
      await Notifications.cancelScheduledNotificationAsync(reminderID)
  }

  const notification = reminderNotification()
  const id = await Notifications.scheduleNotificationAsync(notification)
  await db.setReminderNotificationID(id)
}

async function getTimeTrigger() {
  const timeTrigger = await db.getTimeTrigger()
  const hourTrigger = timeTrigger ? timeTrigger.hour : defaultTrigger.hour
  const minuteTrigger = timeTrigger ? timeTrigger.minute : defaultTrigger.minute
  return { hourTrigger, minuteTrigger }
}

function getPhrasesToSchedule() {
  const DBPhrases = db.getAllPhrases()
  const daysSinceYearsStarted = daysSince1Jan()
  const phrasesAndroid = DBPhrases.slice(daysSinceYearsStarted)
  const phrasesIOS = phrasesAndroid.slice(0, IOS_NOTIFICATIONS_LIMIT - 1)
  return Platform.OS === 'android' ? phrasesAndroid : phrasesIOS
}

async function scheduleAllYearlyNotifications() {
  const { hourTrigger, minuteTrigger } = await getTimeTrigger()
  const phrasesToSchedule = getPhrasesToSchedule()
  registerForPushNotificationsAsync().catch(e => console.error(e))
  await setShareNotificationCategory()
  await Promise.allSettled(
    phrasesToSchedule.map(phrase =>
      scheduleNotification(hourTrigger, minuteTrigger, phrase)
    )
  )

  await scheduleReminderNotification()
}

export {
  scheduleAllYearlyNotifications,
  cancelAllScheduledNotifications,
  getAllScheduledNotifications,
  sendInstantNotification,
}
