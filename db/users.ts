import AsyncStorage from '@react-native-async-storage/async-storage'
import { defaultTrigger } from '../utils/consts'
import { User, UserUpdateRequest } from '../utils/interfaces'
import { getCalendars } from 'expo-localization'
import firestore from '@react-native-firebase/firestore'

import { registerForPushNotificationsAsync } from '../utils/notifications'

const fs = firestore()

const getUser = async (id?: string): Promise<User> => {
    if (!id) id = await AsyncStorage.getItem('user_id')
    const userDoc = await fs.collection('users').doc(id).get()
    const userData = userDoc.data()
    if (!userData) return null
    return {
        id: userData.id,
        shouldSendNotifications: userData.shouldSendNotifications,
        timeTrigger: userData.timeTrigger,
    }
}

const createUser = async (): Promise<User> => {
    const devicePushToken = await registerForPushNotificationsAsync()
    const usersCollection = fs.collection('users')
    const calendar = getCalendars()[0]
    const user = usersCollection.doc()
    await user.set({
        shouldSendNotifications: true,
        timeTrigger: {
            ...defaultTrigger,
            timezone: calendar.timeZone,
        },
        devicePushToken,
    })
    await AsyncStorage.setItem('user_id', user.id)
    return {
        id: user.id,
        shouldSendNotifications: true,
        timeTrigger: defaultTrigger,
    }
}

const modifyUser = async (data: UserUpdateRequest) => {
    const id = await AsyncStorage.getItem('user_id')
    await fs.collection('users').doc(id).update(data)
}

const deleteUser = async () => {
    const id = await AsyncStorage.getItem('user_id')
    await fs.collection('users').doc(id).delete()
}

export default {
    getUser,
    createUser,
    modifyUser,
    deleteUser,
}
