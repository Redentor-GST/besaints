import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Button,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'
import Phrase from './components/Phrase';
import Settings from './components/Settings';
import DailySaint from './components/Saints';
import Database from './db/db';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationsUtils from './utils/notifications';
import { initTasks } from './services/BackgroundTasks';
import { isLeapYear } from './utils/utils';
import { daysSince1Jan } from './utils/consts';

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20
  },
  logo: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20
  }
})

const Stack = createStackNavigator();

function homeScreen({ navigation }) {

  return Platform.OS === 'android' ? (
    <View style={styles.view}>
      <StatusBar
        backgroundColor="#2f4f4f"  //? Should we change this to white?
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <Text style={styles.logo}>Be Saints</Text>
      <Button title='Frase del día' onPress={() => navigation.navigate('Frase del dia')} />
      <View style={{ marginTop: 5 }}>
        <Button title='Santos del día' onPress={_ => navigation.navigate('Santos del dia')} />
      </View>
      <View style={{ marginTop: 5 }}>
        <Button title='Ajustes' onPress={_ => navigation.navigate('Ajustes')}></Button>
      </View>
    </View >
  ) :
    <SafeAreaView style={styles.view}>
      <Text style={styles.logo}>Be Saints</Text>
      <Button title="Frase del día" onPress={_ => navigation.navigate("Frase del dia")}></Button>
      <View style={{ marginTop: 5 }}>
        <Button title='Santos del día' onPress={_ => navigation.navigate('Santos del dia')} />
      </View>
      <Button title='Ajustes' onPress={_ => navigation.navigate('Ajustes')}></Button>
    </SafeAreaView>
}
// :)
export default function App() {
  const [backgroundLoaded, setbackgroundLoaded] = useState(false)

  useEffect(() => {
    async function init() {
      const db = new Database();
      const nu = new NotificationsUtils();
      if (!await AsyncStorage.getItem('phrases'))
        await db.storeYearlyPhrases();

      const scheduledNotifs = await nu.getAllScheduledNotifications();
      const daysSinceYearStarted = daysSince1Jan();
      const leftingDays = isLeapYear() ? 366 - daysSinceYearStarted : 365 - daysSinceYearStarted;
      /*
      This will run ONLY  once a year, and in that case, notifs.length should be 0
      But i set the other conditions for this debugging part
      */
      if (scheduledNotifs.length === 0 || scheduledNotifs.length + 1 < leftingDays)
        await nu.scheduleAllYearlyNotifications();
    }
    if (!backgroundLoaded) {
      //!DEBUG ONLY
      new Database().clear().then(_ => console.log("Cleared!"))
      initTasks()
        .then(_ => { })
      init()
        .then(_ => setbackgroundLoaded(true))
    }
  })

  return backgroundLoaded ?
    (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={homeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Frase del dia' component={Phrase} />
          <Stack.Screen name='Santos del dia' component={DailySaint} />
          <Stack.Screen name='Ajustes' component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    ) :
    (
      (
        <View>
          <View style={styles.activityContainer}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text> Por favor espera mientras terminamos de trabajar algunas cosas! </Text>
            <Text> Este proceso toma solo unos segundos</Text>
            <Text> Es mas, seguramente no llegues ni a leer este texto </Text>
            <Text> Podes salir de la aplicacion mientras esto termina (pero no la cierres) </Text>
            <Text> Este proceso se hace solo una vez al año </Text>
          </View>
        </View>
      )
    )
}
