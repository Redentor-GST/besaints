import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Platform, ActivityIndicator } from 'react-native'
import DateTimePicker, {
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import ToggleSwitch from 'toggle-switch-react-native'
import { Ionicons } from '@expo/vector-icons'
import { lightblue } from '../utils/consts'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import styles from '../styles/settings'
import { updateUser } from '../utils/users'
import { GlobalContext } from './Context'

export default function Settings() {
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fontsLoaded] = useFonts({ Poppins_400Regular })
    const { user } = useContext(GlobalContext)
    const [notifDateTrigger, setnotifDateTrigger] = useState<Date>()
    const [ssn, setssn] = useState(user.should_send_notifications)

    useEffect(() => {
        if (user.time_trigger) {
            const date = new Date()
            date.setHours(user.time_trigger)
            setnotifDateTrigger(date)
        }
    }, [user])

    const onChange = async (
        _event: DateTimePickerEvent,
        selectedDate: Date,
    ) => {
        const currentDate = selectedDate || notifDateTrigger
        setShow(Platform.OS === 'ios')
        if (currentDate.getTime() === notifDateTrigger.getTime()) return
        setnotifDateTrigger(currentDate)
        setLoading(true)
        const timeTrigger = {
            hour: currentDate.getHours(),
            minute: currentDate.getMinutes(),
        }
        const deviceId = user.device_id
        await updateUser(deviceId, { time_trigger: timeTrigger.hour })
        setLoading(false)
    }

    const showMode = (currentMode: string) => {
        setShow(true)
        setMode(currentMode)
    }

    const showTimepicker = () => showMode('time')

    async function changessn() {
        setLoading(true)
        const newValue = !ssn
        setssn(newValue)
        const deviceId = user.device_id
        await updateUser(deviceId, { should_send_notifications: newValue })
        setLoading(false)
    }

    return ssn != undefined && !loading && fontsLoaded ? (
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
