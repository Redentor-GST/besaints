import * as Notifications from 'expo-notifications'
import { isDevice } from 'expo-device'
import { Platform } from 'react-native'

async function registerForPushNotificationsAsync() {
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }

    if (!isDevice) alert('Must use physical device for Push Notifications')
    else {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }
        if (finalStatus !== 'granted')
            return alert('Failed to get push token for push notification!')
    }
    return (await Notifications.getExpoPushTokenAsync()).data
}

export { registerForPushNotificationsAsync }
