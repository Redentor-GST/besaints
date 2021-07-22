import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Button,
    Platform,
    ActivityIndicator,
    StatusBar,
    Linking
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Database from '../db/db';
//import { userDefaultLanguage } from '../utils/consts';
import NotificationsUtils from '../utils/notifications';
import ToggleSwitch from 'toggle-switch-react-native'
import { FontAwesome } from '@expo/vector-icons';


const db = new Database();

export default function Settings() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [ssn, setssn] = useState(true);
    //const [selectedLanguage, setSelectedLanguage] = useState(userDefaultLanguage());
    const [ssnLoaded, setssnLoaded] = useState(false);
    const [notifDateTrigger, setnotifDateTrigger] = useState(new Date());
    const [loadingNotifications, setloadingNotifications] = useState(false);

    //!Potential bug here, app closes when you change the schedule
    //?Dont really know why
    const onChange = async (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setnotifDateTrigger(currentDate);
        const nu = new NotificationsUtils();
        await nu.cancelAllScheduledNotifications();
        const timeTrigger = {
            hour: currentDate.getHours(),
            minute: currentDate.getMinutes()
        }
        await db.setTimeTrigger(timeTrigger);
        setloadingNotifications(true);
        await nu.scheduleAllYearlyNotifications();
        setloadingNotifications(false);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };

    useEffect(() => {

        db.getShouldSendNotifications()
            .then(res => setssn(res))
            .finally(() => setssnLoaded(true))
        db.getTimeTrigger()
            .then(timeTrigger => {
                const now = new Date();
                const date = new Date(now.getFullYear(), now.getMonth() - 1,
                    now.getDate(), timeTrigger.hour, timeTrigger.minute)
                setnotifDateTrigger(date);
            });

        /*
        db.getUserDefinedLanguage()
            .then(userDefinedLanguage => {
                if (userDefinedLanguage)
                    setSelectedLanguage(userDefinedLanguage);
            })*/
    }, [ssn])

    async function changessn() {
        const _ssn = await db.getShouldSendNotifications();
        await db.setShouldSendNotifications(!_ssn);
        setssn(!_ssn);
    }

    return ssnLoaded && !loadingNotifications ? (
        <View>
            <ToggleSwitch
                isOn={ssn}
                onColor="green"
                offColor="red"
                label="Enviar Notificaciones"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="small"
                onToggle={async _ => await changessn()}
                animationSpeed={50}
            />
            <View style={{ marginTop: 5 }}>
                <FontAwesome.Button name="calendar" size={20} color="black" onPress={showTimepicker} backgroundColor={"transparent"} >
                    <Text style={{ color: 'blue' }} > Definir Horario de Notificaciones </Text>

                </FontAwesome.Button>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={notifDateTrigger}
                        mode={mode}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                        minuteInterval={15}
                        disabled={false}
                    />
                )}
            </View>
            <Text style={{ color: 'blue', textAlign: 'left', fontSize: 19 }}
                onPress={() => Linking.openURL('mailto:besaintsapp@gmail.com')}>
                Envianos un email! 📨
            </Text>
            <Text> v0.9.5 </Text>
            {/**
            * DEBUG
            <Button title='Log all notifications' onPress={async _ => new NotificationsUtils().getAllScheduledNotifications().then(res => console.log(res))} />
            <Button title='Kill all notifications' onPress={async _ => new NotificationsUtils().cancelAllScheduledNotifications().then(_ => console.log("deleted!"))} />
            <Button title='How Many' onPress={async _ => new NotificationsUtils().getAllScheduledNotifications().then(res => console.log(res.length))}></Button>
            <Button title='Instant Notification' onPress={_ => scheduleNotification(true)} />
            <Button title='Clear Database' onPress={_ => db.clear()} />
            */}
        </View>
    ) :
        (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                padding: 20
            }}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text> Programando notificaciones para las {notifDateTrigger.toTimeString().slice(0, 5)} </Text>
            </View>
        )
}
//:)
