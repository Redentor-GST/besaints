import AsyncStorage from '@react-native-async-storage/async-storage'
import { defaultTrigger } from '../utils/consts'
import { User, UserUpdateRequest } from '../utils/interfaces'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp()
const db = getFirestore()
const users = db.collection('users')

const getUser = async (id?: string): Promise<User> => {
  if (!id) id = await AsyncStorage.getItem('user_id')
  const user = await users.doc(id).get()
  const user_data = user.data()
  if (!user_data) return null
  return {
    id: user.id,
    shouldSendNotifications: user_data.shouldSendNotifications,
    timeTrigger: user_data.timeTrigger,
  }
}

const createUser = async (): Promise<User> => {
  const user = await users.add({
    shouldSendNotifications: true,
    timeTrigger: {
      ...defaultTrigger,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  })
  await AsyncStorage.setItem('user_id', user.id)
  return {
    id: user.id,
    shouldSendNotifications: true,
    timeTrigger: defaultTrigger,
  }
}

const modifyUser = async (id: string, data: UserUpdateRequest) => {
  await users.doc(id).update(data as any)
}

const deleteUser = async (id: string) => {
  await users.doc(id).delete()
}

export default {
  getUser,
  createUser,
  modifyUser,
  deleteUser,
}
