import * as Notifications from 'expo-notifications'
import { isDevice } from 'expo-device'
import { Platform } from 'react-native'
import { SHARE_CATEGORY, SHARE_ACTION } from './consts'

//?Dont know if this is neccesary
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export default class NotificationsUtils {
    static async registerForPushNotificationsAsync() {
        if (!isDevice) return
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync()
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

        return await Notifications.getExpoPushTokenAsync()
    }

    setShareNotificationCategory = async () =>
        await Notifications.setNotificationCategoryAsync(SHARE_CATEGORY, [
            SHARE_ACTION,
        ])

    notification = (
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
                : { date: dateTrigger, channelId: 'default', repeats: false },
        }
    }
}
