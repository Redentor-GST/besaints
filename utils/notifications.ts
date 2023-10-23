import * as Notifications from 'expo-notifications'
import { isDevice } from 'expo-device'
import { Platform } from 'react-native'
import { SHARE_CATEGORY, SHARE_ACTION } from './consts'

const IOS_NOTIFICATIONS_LIMIT = 64

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

const getAllScheduledNotifications = async () =>
    Notifications.getAllScheduledNotificationsAsync()

const cancelAllScheduledNotifications = async () =>
    Notifications.cancelAllScheduledNotificationsAsync()

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
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync()
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
    Notifications.setNotificationCategoryAsync(SHARE_CATEGORY, [SHARE_ACTION])

export { registerForPushNotificationsAsync }
