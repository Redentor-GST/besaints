import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Button,
    Platform,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Database from '../db/db';
//import { userDefaultLanguage } from '../utils/consts';
import NotificationsUtils from '../utils/notifications';
import SelectMultiple from 'react-native-select-multiple'

const db = new Database();

export default function Settings() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [ssn, setssn] = useState(true);
    //const [selectedLanguage, setSelectedLanguage] = useState(userDefaultLanguage());
    const [ssnLoaded, setssnLoaded] = useState(false);
    const [notifDateTrigger, setnotifDateTrigger] = useState(new Date());
    const [selected, setselected] = useState([]);
    const [howMany, sethowMany] = useState(0);
    const [howManyLoaded, sethowManyLoaded] = useState(false);
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
        console.log("About to schedule");
        await nu.scheduleAllYearlyNotifications();
        console.log("Scheduled");
        setloadingNotifications(false);
        console.log("Bye");
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
            .finally(_ => setssnLoaded(true))
        db.getTimeTrigger()
            .then(timeTrigger => {
                const now = new Date();
                const date = new Date(now.getFullYear(), now.getMonth() - 1,
                    now.getDate(), timeTrigger.hour, timeTrigger.minute)
                setnotifDateTrigger(date);
            });
        new NotificationsUtils().getAllScheduledNotifications()
            .then(res => {
                sethowMany(res.length);
                sethowManyLoaded(true);
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

    function renderLabel() {
        return (
            <View>
                <Text> Enviar Notificaciones </Text>
            </View>
        )
    }

    return ssnLoaded && howManyLoaded && !loadingNotifications ? (
        <View>
            {/*
            
            <BouncyCheckbox isChecked={ssn} text='Enviar Notificationes' style={{ alignSelf: 'center' }}
                onPress={async () => {
                    const _ssn = await db.getShouldSendNotifications();
                    await db.setShouldSendNotifications(!_ssn);
                    setssn(!_ssn);
                }
                } />
            */}
            <SelectMultiple
                items={[ssn]}
                selectedItems={ssn ? [ssn] : []}
                onSelectionsChange={changessn}
                renderLabel={renderLabel}
            />
            <Button onPress={showTimepicker} title="Definir horario de notificaciones" />
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
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 19 }}
                onPress={() => Linking.openURL('mailto:besaintsapp@gmail.com')}>
                Envianos un email! 📨
            </Text>
            <Text> {howMany} </Text>
            <Text> v0.9.2.4</Text>
            {/**
            * DEBUG
            <Button title='Log all notifications' onPress={async _ => new NotificationsUtils().getAllScheduledNotifications().then(res => console.log(res))} />
            <Button title='Kill all notifications' onPress={async _ => new NotificationsUtils().cancelAllScheduledNotifications().then(_ => console.log("deleted!"))} />
            <Button title='How Many' onPress={async _ => new NotificationsUtils().getAllScheduledNotifications().then(res => console.log(res.length))}></Button>
            <Button title='Instant Notification' onPress={_ => scheduleNotification(true)} />
            <Button title='Clear Database' onPress={_ => db.clear()} />
            <Button title='Log all notifications' onPress={async _ => await Notifications.getAllScheduledNotificationsAsync().then(res => console.log(res))} />
            <Button title='Kill all notifications' onPress={async _ => await Notifications.cancelAllScheduledNotificationsAsync().then(_ => console.log("deleted!"))} />
            <View style={{ alignSelf: 'center' }}>
                <Picker
                    selectedValue={selectedLanguage}
                    style={{ height: 20, width: 130 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedLanguage(itemValue);
                        db.setUserDefinedLanguage(itemValue);
                    }}
                >
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="Spanish" value="es" />
                </Picker>
            </View>
            <Text>
                Next Notification : {areThereNotifications ? nextNotifTime + " " : "NONE"}
            </Text>
            <Text> Should send notifications? {ssn ? " Yes" : " No"} </Text>
            <Text> Date Trigger for notifications {notifDateTrigger.toTimeString()} </Text>
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
            </View>
        )
}
//:)
