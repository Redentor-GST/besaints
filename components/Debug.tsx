import { Button } from 'react-native'
import React from 'react'
import {
    getAllScheduledNotifications,
    cancelAllScheduledNotifications,
    sendInstantNotification,
    scheduleAllYearlyNotifications,
} from '../utils/notifications'

const Debug = () => {
    return (
        <>
            <Button
                title="Notifs count"
                onPress={() =>
                    getAllScheduledNotifications().then(notifications =>
                        console.log(notifications.length),
                    )
                }
            />
            <Button
                title="Cancel all notifs"
                onPress={() => cancelAllScheduledNotifications()}
            />
            <Button
                title="Send instant Notif"
                onPress={() => sendInstantNotification()}
            />
            <Button
                title="Schedule all notifs"
                onPress={() =>
                    scheduleAllYearlyNotifications().then(console.log)
                }
            />
        </>
    )
}

export default Debug
