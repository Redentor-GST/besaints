import * as Notifications from 'expo-notifications'
import { isDevice } from 'expo-device'
import { Platform } from 'react-native'
import Database from '../db/db'
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

export default class NotificationsUtils {
  db = new Database()

  getAllScheduledNotifications = async () =>
    await Notifications.getAllScheduledNotificationsAsync()

  cancelAllScheduledNotifications = async () =>
    await Notifications.cancelAllScheduledNotificationsAsync()

  //Debug function
  sendInstantNotification = async () =>
    await this.scheduleNotification(
      19,
      54,
      { text: 'hello', author: 'goodbye', date: '??' },
      true
    )

  private async registerForPushNotificationsAsync() {
    if (!isDevice) return
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!')
      return
    }

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }

    return (await Notifications.getExpoPushTokenAsync()).data
  }

  setShareNotificationCategory = async () =>
    await Notifications.setNotificationCategoryAsync(SHARE_CATEGORY, [
      SHARE_ACTION,
    ])

  private notification = (
    title: string,
    body: string,
    dateTrigger: Date,
    instant: boolean
  ): Notifications.NotificationRequestInput => {
    return {
      content: {
        title: title,
        body: body,
        data: { datetrigger: dateTrigger.toString() },
        categoryIdentifier: SHARE_CATEGORY,
      },
      trigger: instant
        ? null
        : {
            date: dateTrigger,
            channelId: 'default',
            repeats: false,
          },
    }
  }

  private async scheduleNotification(
    triggerHour: number,
    triggerMinute: number,
    data: Phrase,
    instant: boolean = false
  ) {
    if (!(await this.db.shouldSendNotifications())) return
    //:)
    const title = 'Frase del día'
    const body = `${data.text} ${data.author}.`
    const dateTrigger = createDateTrigger(data.date, triggerHour, triggerMinute)
    const today = new Date()
    if (today <= dateTrigger || instant) {
      const notification = this.notification(title, body, dateTrigger, instant)
      await Notifications.scheduleNotificationAsync(notification)
    }
  }

  async scheduleReminderNotification() {
    if (!(await this.db.shouldSendNotifications())) return
    if (Platform.OS === 'ios') {
      const reminderID = await this.db.getReminderNotificationID()
      if (reminderID)
        await Notifications.cancelScheduledNotificationAsync(reminderID)
    }
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
    const notification = this.notification(title, body, dateTrigger, false)
    const id = await Notifications.scheduleNotificationAsync(notification)
    await this.db.setReminderNotificationID(id)
  }

  async scheduleAllYearlyNotifications() {
    const phrases = this.db.getAllPhrases()
    const timeTrigger = await this.db.getTimeTrigger()
    const hourTrigger = timeTrigger ? timeTrigger.hour : defaultTrigger.hour
    const minuteTrigger = timeTrigger
      ? timeTrigger.minute
      : defaultTrigger.minute
    const daysSinceYearsStarted = daysSince1Jan()
    const token = await this.registerForPushNotificationsAsync().catch(e =>
      console.error('Exception in registerNotifs: ' + e)
    )
    if (!token) return
    const phrasesAndroid = phrases.slice(daysSinceYearsStarted)
    const phrasesIOS = phrasesAndroid.slice(0, IOS_NOTIFICATIONS_LIMIT - 1)
    for (const phrase of Platform.OS === 'android'
      ? phrasesAndroid
      : phrasesIOS) {
      await this.scheduleNotification(hourTrigger, minuteTrigger, phrase)
    }
    await this.scheduleReminderNotification()
  }
}
