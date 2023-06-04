import AsyncStorage from '@react-native-async-storage/async-storage'
import { defaultTrigger } from '../utils/consts'
import { User, UserUpdateRequest } from '../utils/interfaces'
import NotificationsUtils from '../utils/notifications'
import { db } from '../firebaseConfig'
import { timezone } from 'expo-localization'
import {
    deleteDoc,
    doc,
    addDoc,
    collection,
    updateDoc,
    getDoc,
} from 'firebase/firestore'

const getUser = async (id?: string): Promise<User> => {
    if (!id) id = await AsyncStorage.getItem('user_id')
    const userDoc = doc(db, `users/${id}`)
    const user = await getDoc(userDoc)
    const userData = user.data()
    if (!userData) return null
    return {
        id: userData.id,
        shouldSendNotifications: userData.shouldSendNotifications,
        timeTrigger: userData.timeTrigger,
    }
}

const createUser = async (): Promise<User> => {
    const devicePushToken =
        await NotificationsUtils.registerForPushNotificationsAsync()
    console.log(db)
    const usersCollection = collection(db, 'users')
    const user = await addDoc(usersCollection, {
        shouldSendNotifications: true,
        timeTrigger: {
            ...defaultTrigger,
            timezone,
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
    const user = doc(db, `users/${id}`)
    await updateDoc(user, data as any)
}

const deleteUser = async () => {
    const id = await AsyncStorage.getItem('user_id')
    const user = doc(db, `users/${id}`)
    await deleteDoc(user)
}

export default {
    getUser,
    createUser,
    modifyUser,
    deleteUser,
}
