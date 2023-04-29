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

export default class NotificationsUtils {
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
        title,
        body,
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

  private reminderNotification = (): Notifications.NotificationRequestInput => {
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
    delete notification.content.categoryIdentifier
    return notification
  }

  private async scheduleNotification(
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
      const notification = this.notification(title, body, dateTrigger, instant)
      await Notifications.scheduleNotificationAsync(notification)
    }
  }

  async scheduleReminderNotification() {
    if (!(await db.shouldSendNotifications())) return
    if (Platform.OS === 'ios') {
      const reminderID = await db.getReminderNotificationID()
      if (reminderID)
        await Notifications.cancelScheduledNotificationAsync(reminderID)
    }

    const notification = this.reminderNotification()
    const id = await Notifications.scheduleNotificationAsync(notification)
    await db.setReminderNotificationID(id)
  }

  async getTimeTrigger() {
    const timeTrigger = await db.getTimeTrigger()
    const hourTrigger = timeTrigger ? timeTrigger.hour : defaultTrigger.hour
    const minuteTrigger = timeTrigger
      ? timeTrigger.minute
      : defaultTrigger.minute
    return { hourTrigger, minuteTrigger }
  }

  getPhrasesToSchedule() {
    const DBPhrases = db.getAllPhrases()
    const daysSinceYearsStarted = daysSince1Jan()
    const phrasesAndroid = DBPhrases.slice(daysSinceYearsStarted)
    const phrasesIOS = phrasesAndroid.slice(0, IOS_NOTIFICATIONS_LIMIT - 1)
    return Platform.OS === 'android' ? phrasesAndroid : phrasesIOS
  }

  async scheduleAllYearlyNotifications() {
    const { hourTrigger, minuteTrigger } = await this.getTimeTrigger()
    const phrasesToSchedule = this.getPhrasesToSchedule()
    await this.registerForPushNotificationsAsync()
    await this.setShareNotificationCategory()
    await Promise.all(
      phrasesToSchedule.map(phrase =>
        this.scheduleNotification(hourTrigger, minuteTrigger, phrase)
      )
    )
    await this.scheduleReminderNotification()
  }
}
