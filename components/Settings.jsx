import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Platform,
  ActivityIndicator,
  StatusBar,
  Button,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Database from '../db/db';
//import { userDefaultLanguage } from '../utils/consts';
import NotificationsUtils from '../utils/notifications';
import ToggleSwitch from 'toggle-switch-react-native';
import { Ionicons } from '@expo/vector-icons';
import { blue, lightblue } from '../utils/consts';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const db = new Database();

const styles = StyleSheet.create({
  activityIndicatorView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
  container: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: blue,
    justifyContent: 'center',
    // padding: 9,
    borderRadius: 5,
    marginTop: 10,
    // width: '40%',
    // height: '6%',
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    color: 'black',
    fontWeight: '900',
  },
  notifsText: {
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    //!MMMMMMMMM
    paddingRight: 25,
    fontSize: 13,
  },
});

export default function Settings() {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [ssn, setssn] = useState(true);
  //const [selectedLanguage, setSelectedLanguage] = useState(userDefaultLanguage());
  const [ssnLoaded, setssnLoaded] = useState(false);
  const [notifDateTrigger, setnotifDateTrigger] = useState(new Date());
  const [loadingNotifications, setloadingNotifications] = useState(false);
  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  const onChange = async (event, selectedDate) => {
    const currentDate = selectedDate || notifDateTrigger;
    //If the user didn't change the time, do nothing
    setShow(Platform.OS === 'ios');
    if (currentDate.getTime() === notifDateTrigger.getTime()) return;
    setnotifDateTrigger(currentDate);
    setloadingNotifications(true);
    const nu = new NotificationsUtils();
    await nu.cancelAllScheduledNotifications();
    const timeTrigger = {
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
    };
    await db.setTimeTrigger(timeTrigger);
    await nu.scheduleAllYearlyNotifications();
    setloadingNotifications(false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    db.getShouldSendNotifications()
      .then(res => setssn(res))
      .finally(() => setssnLoaded(true));
    db.getTimeTrigger().then(timeTrigger => {
      const now = new Date();
      const date = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate(),
        timeTrigger.hour,
        timeTrigger.minute
      );
      setnotifDateTrigger(date);
    });

    /*
        db.getUserDefinedLanguage()
            .then(userDefinedLanguage => {
                if (userDefinedLanguage)
                    setSelectedLanguage(userDefinedLanguage);
            })*/
  }, [ssn]);

  async function changessn() {
    const _ssn = await db.getShouldSendNotifications();
    await db.setShouldSendNotifications(!_ssn);
    setssn(!_ssn);
  }
  const nu = new NotificationsUtils();
  return ssnLoaded && !loadingNotifications && fontsLoaded ? (
    <View style={styles.container}>
      {/* <Button title='Log all notifications' onPress={async _ => new NotificationsUtils().getAllScheduledNotifications().then(res => console.log(res))} /> */}
      <View style={{ alignItems: 'center' }}>
        <ToggleSwitch
          isOn={ssn}
          onColor='green'
          offColor='red'
          label='Enviar notificaciones'
          labelStyle={styles.label}
          size='small'
          onToggle={async _ => await changessn()}
          animationSpeed={50}
        />
      </View>
      <View>
        <Ionicons.Button style={styles.button}
          name='alarm'
          size={20}
          color='white'
          onPress={showTimepicker}
          backgroundColor={'transparent'}
        >
          <Text style={styles.notifsText}>
            Definir horario de notificaciones
          </Text>

        </Ionicons.Button>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={notifDateTrigger}
            mode={mode}
            is24Hour={true}
            display='spinner'
            onChange={onChange}
            minuteInterval={2}
            disabled={false}
          />
        )}
      </View>

    </View >
  ) : (
    <View style={styles.activityIndicatorView}>
      <ActivityIndicator size={60} color={lightblue} />
      <Text>
        {' '}
        Programando notificaciones para las{' '}
        {notifDateTrigger.toTimeString().slice(0, 5)}{' '}
      </Text>
    </View>
  );
}
/**
 * DEBUG
 <Button title='Kill all notifications' onPress={async _ => new NotificationsUtils().cancelAllScheduledNotifications().then(_ => console.log("deleted!"))} />
 <Button
   title='Notification in 1 minute'
   onPress={async _ => await nu.sendAlmostInstantNotification(1)}
 />
 <Button
   title='Notification in 3 minute'
   onPress={async _ => await nu.sendAlmostInstantNotification(3)}
 />
 <Button
   title='Notification in 5 minutes'
   onPress={async _ => await nu.sendAlmostInstantNotification(5)}
 />
 <Button
   title='Instant Notification'
   onPress={async _ =>
     new NotificationsUtils().sendInstantNotification().then(res => console.log(res))
   }
 />
 <Button title='Log reminder' onPress={_ => findReminder().then(chosenNotif => console.log(chosenNotif))} />
 <Button title='Clear Database' onPress={_ => db.clear()} />
 */
