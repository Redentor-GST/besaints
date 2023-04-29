import React, { useState, useEffect } from 'react'
import { Text, View, Platform, ActivityIndicator, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import db from '../db/db'
import NotificationsUtils from '../utils/notifications'
import ToggleSwitch from 'toggle-switch-react-native'
import { Ionicons } from '@expo/vector-icons'
import { lightblue } from '../utils/consts'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import styles from '../styles/settings'

const DebugView = ({ debug }: { debug: boolean }) => {
  const nu = new NotificationsUtils()
  return debug ? (
    <View>
      <Button
        title="How Many"
        onPress={async _ =>
          nu.getAllScheduledNotifications().then(n => console.log(n.length))
        }
      />
      <Button
        title="Kill all notifications"
        onPress={async _ => await nu.cancelAllScheduledNotifications()}
      />
      <Button
        title="Set category"
        onPress={async _ => await nu.setShareNotificationCategory()}
      />
      <Button
        title="Instant Notification"
        onPress={async _ => await nu.sendInstantNotification()}
      />
      <Button title="Clear Database" onPress={_ => db.clear()} />
    </View>
  ) : (
    <View />
  )
}

export default function Settings() {
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [ssn, setssn] = useState(true)
  const [ssnLoaded, setssnLoaded] = useState(false)
  const [notifDateTrigger, setnotifDateTrigger] = useState(new Date())
  const [loadingNotifications, setloadingNotifications] = useState(false)
  const [fontsLoaded] = useFonts({ Poppins_400Regular })

  const onChange = async (event, selectedDate) => {
    const currentDate = selectedDate || notifDateTrigger
    setShow(Platform.OS === 'ios')
    if (currentDate.getTime() === notifDateTrigger.getTime()) return
    setnotifDateTrigger(currentDate)
    setloadingNotifications(true)
    const nu = new NotificationsUtils()
    await nu.cancelAllScheduledNotifications()
    const timeTrigger = {
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
    }
    await db.setTimeTrigger(timeTrigger)
    await nu.scheduleAllYearlyNotifications()
    setloadingNotifications(false)
  }

  const showMode = (currentMode: string) => {
    setShow(true)
    setMode(currentMode)
  }

  const showTimepicker = () => showMode('time')

  useEffect(() => {
    db.shouldSendNotifications()
      .then(res => setssn(res))
      .finally(() => setssnLoaded(true))
    db.getTimeTrigger().then(timeTrigger => {
      const now = new Date()
      const date = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate(),
        timeTrigger.hour,
        timeTrigger.minute
      )
      setnotifDateTrigger(date)
    })
  }, [ssn])

  async function changessn() {
    const _ssn = await db.shouldSendNotifications()
    await db.setShouldSendNotifications(!_ssn)
    setssn(!_ssn)
  }

  return ssnLoaded && !loadingNotifications && fontsLoaded ? (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <ToggleSwitch
          isOn={ssn}
          onColor="green"
          offColor="red"
          label="Enviar notificaciones"
          labelStyle={styles.label}
          size="small"
          onToggle={async (_: any) => await changessn()}
          animationSpeed={50}
        />
      </View>
      <View>
        <Ionicons.Button
          style={styles.button}
          name="alarm"
          size={20}
          color="white"
          onPress={showTimepicker}
          backgroundColor={'transparent'}
        >
          <Text style={styles.notifsText}>
            Definir horario de notificaciones
          </Text>
        </Ionicons.Button>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={notifDateTrigger}
            mode={mode as any}
            is24Hour={true}
            display="spinner"
            onChange={onChange}
            minuteInterval={5}
            disabled={false}
            textColor="black"
          />
        )}
      </View>
      {/*Don't forget to put debug to false when uploading to app stores*/}
      <DebugView debug={false} />
    </View>
  ) : (
    <View style={styles.activityIndicatorView}>
      <ActivityIndicator size={60} color={lightblue} />
      <Text>
        {' '}
        Programando notificaciones para las{' '}
        {notifDateTrigger.toTimeString().slice(0, 5)}{' '}
      </Text>
    </View>
  )
}
