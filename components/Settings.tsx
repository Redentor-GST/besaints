import React, { useState, useEffect } from 'react'
import { Text, View, Platform, ActivityIndicator } from 'react-native'
import DateTimePicker, {
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import ToggleSwitch from 'toggle-switch-react-native'
import { Ionicons } from '@expo/vector-icons'
import { lightblue } from '../utils/consts'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import styles from '../styles/settings'
import users from '../db/users'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Settings() {
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [shouldSendNotifications, setShouldSendNotifications] = useState(true)
    const [ssnLoaded, setssnLoaded] = useState(false)
    const [notifDateTrigger, setnotifDateTrigger] = useState(new Date())
    const [fontsLoaded] = useFonts({ Poppins_400Regular })

    const onChange = async (
        _event: DateTimePickerEvent,
        selectedDate: Date,
    ) => {
        const currentDate = selectedDate || notifDateTrigger
        setShow(Platform.OS === 'ios')
        if (currentDate.getTime() === notifDateTrigger.getTime()) return
        const timeTrigger = {
            hour: currentDate.getHours(),
            minute: currentDate.getMinutes(),
        }
        users.modifyUser({ timeTrigger })
        setnotifDateTrigger(currentDate)
    }

    const showMode = (currentMode: string) => {
        setShow(true)
        setMode(currentMode)
    }

    const showTimepicker = () => showMode('time')

    useEffect(() => {
        AsyncStorage.getItem('shouldSendNotifications', (err, res) => {
            setShouldSendNotifications(res === 'true')
            setssnLoaded(true)
        })
        AsyncStorage.getItem('timeTrigger').then(timeTriggerStr => {
            const timeTrigger = JSON.parse(timeTriggerStr)
            const now = new Date()
            const date = new Date(
                now.getFullYear(),
                now.getMonth() - 1,
                now.getDate(),
                timeTrigger.hour,
                timeTrigger.minute,
            )
            setnotifDateTrigger(date)
        })
    }, [shouldSendNotifications])

    function changessn() {
        const ssn = !shouldSendNotifications
        setShouldSendNotifications(ssn)
        users.modifyUser({ shouldSendNotifications: ssn })
        AsyncStorage.setItem('shouldSendNotifications', ssn.toString())
    }

    return ssnLoaded && fontsLoaded ? (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <ToggleSwitch
                    isOn={shouldSendNotifications}
                    onColor="green"
                    offColor="red"
                    label="Enviar notificaciones"
                    labelStyle={styles.label}
                    size="small"
                    onToggle={changessn}
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
