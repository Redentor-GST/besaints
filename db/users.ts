import AsyncStorage from '@react-native-async-storage/async-storage'
import { defaultTrigger } from '../utils/consts'
import { User, UserUpdateRequest } from '../utils/interfaces'
import NotificationsUtils from '../utils/notifications'
import { db } from '../firebaseConfig'
import { doc } from 'firebase/firestore'

const getUser = async (id?: string): Promise<User> => {
    if (!id) id = await AsyncStorage.getItem('user_id')
    const user = doc(db, `users/${id}`) as any
    console.log(user)
    if (!user) return null
    return {
        id: user.id,
        shouldSendNotifications: user.shouldSendNotifications,
        timeTrigger: user.timeTrigger,
    }
}

const createUser = async (): Promise<User> => {
    const devicePushToken =
        await NotificationsUtils.registerForPushNotificationsAsync()
    const user = await users.add({
        shouldSendNotifications: true,
        timeTrigger: {
            ...defaultTrigger,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
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

const modifyUser = async (id: string, data: UserUpdateRequest) => {
    await users.doc(id).update(data as any)
}

const deleteUser = async (id: string) => {
    doc(db, `users/${id}`)
}

export default {
    getUser,
    createUser,
    modifyUser,
    deleteUser,
}
