import { Button } from 'react-native'
import React from 'react'
import NotificationUtils from '../utils/notifications'

const nu = new NotificationUtils()

const Debug = () => {
  return (
    <>
      <Button
        title="Notifs count"
        onPress={() =>
          nu
            .getAllScheduledNotifications()
            .then(notifications => console.log(notifications.length))
        }
      />
      <Button
        title="Cancel all notifs"
        onPress={() => nu.cancelAllScheduledNotifications()}
      />
      <Button
        title="Send instant Notif"
        onPress={() => nu.sendInstantNotification()}
      />
      <Button
        title="Schedule all notifs"
        onPress={() => nu.scheduleAllYearlyNotifications().then(console.log)}
      />
    </>
  )
}

export default Debug
