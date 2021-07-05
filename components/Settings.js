import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Button,
    Platform,
    ActivityIndicator
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';
import Database from '../db/db';
//import { userDefaultLanguage } from '../utils/consts';
import scheduleNotification from '../utils/push';
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

    const onChange = async (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setnotifDateTrigger(currentDate)
        await Notifications.cancelAllScheduledNotificationsAsync();
        await db.setDateTrigger(currentDate.toTimeString());
        await scheduleNotification(false, currentDate.getHours(), currentDate.getMinutes());
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
        db.getDateTrigger()
            .then(dateTrigger => setnotifDateTrigger(dateTrigger));
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

    return ssnLoaded ? (
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
            <Button title='Log all notifications' onPress={async _ => await Notifications.getAllScheduledNotificationsAsync().then(res => console.log(res))} />
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
                    disabled={true}
                />
            )}
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 19 }}
                onPress={() => Linking.openURL('mailto:besaintsapp@gmail.com')}>
                Envianos un email! 📨
            </Text>

            {/**
             * DEBUG
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
            <Button title='Log all notifications' onPress={async _ => await Notifications.getAllScheduledNotificationsAsync().then(res => console.log(res))} />
            <Button title='Kill all notifications' onPress={async _ => await Notifications.cancelAllScheduledNotificationsAsync().then(_ => console.log("deleted!"))} />
            <Button title='Instant Notification' onPress={_ => scheduleNotification(true)} />
            <Text>
                Next Notification : {areThereNotifications ? nextNotifTime + " " : "NONE"}
            </Text>
            <Text> Should send notifications? {ssn ? " Yes" : " No"} </Text>
            <Text> Date Trigger for notifications {notifDateTrigger.toTimeString()} </Text>
            */}
        </View>
    ) :
        (
            <View>
                <ActivityIndicator />
            </View>

        )
}