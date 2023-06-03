import { ExpoPushToken } from 'expo-notifications'

export interface Phrase extends Object {
  text: string
  author: string
  date: string
}

export interface SaintInfo extends Object {
  info: string
  saint: string
}

export interface TimeTrigger extends Object {
  hour: number
  minute: number
}

export interface UserUpdateRequest extends Object {
  shouldSendNotifications?: boolean
  timeTrigger?: TimeTrigger
}

export type User = {
  id: string
  shouldSendNotifications: boolean
  timeTrigger: TimeTrigger
}
