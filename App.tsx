import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Button,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'
import Phrase from './components/Phrase';
import Settings from './components/Settings';
import DailySaint from './components/Saints';
import NotificationsUtils from './utils/notifications';
import { initTasks } from './services/BackgroundTasks';
import { isLeapYear } from './utils/utils';
import { daysSince1Jan } from './utils/consts';
import { FontAwesome } from '@expo/vector-icons';


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
    color: "black",
    fontWeight: 'bold'
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

  return (
    <View style={styles.view}>
      <StatusBar
        backgroundColor="#2f4f4f"  //? Should we change this to white?
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <ImageBackground source={require('./assets/background-original.jpg')}
        resizeMode={'cover'}
        style={{
          width: "112%",
          height: "112%",
          alignItems: 'center',
          justifyContent: 'center',
          // position: "absolute",
          padding: 0,
          bottom: 0,
        }}>
        <Text style={styles.logo}>Be Saints</Text>
        <Button title='Frase del día' onPress={() => navigation.navigate('Frase del dia')} />
        <View style={{ marginTop: 5 }}>
          <Button title='Santos del día' onPress={_ => navigation.navigate('Santos del dia')} />
        </View>
        <View style={{ marginTop: 5 }}>
          <FontAwesome name="gear" size={24} color="black" onPress={_ => navigation.navigate('Ajustes')} />
        </View>
      </ImageBackground>
    </View >
  )
}
// :)
export default function App() {
  const [backgroundLoaded, setbackgroundLoaded] = useState(false)

  useEffect(() => {
    async function init() {
      const nu = new NotificationsUtils();

      const scheduledNotifs = await nu.getAllScheduledNotifications();
      const daysSinceYearStarted = daysSince1Jan();
      const leftingDays = isLeapYear() ? 366 - daysSinceYearStarted : 365 - daysSinceYearStarted;
      if (scheduledNotifs.length === 0 || scheduledNotifs.length + 1 < leftingDays)
        await nu.scheduleAllYearlyNotifications();

      await initTasks();
    }
    if (!backgroundLoaded)
      init().then(_ => setbackgroundLoaded(true))
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
            <Text> Por favor espera mientras terminamos de trabajar en algunas cosas! </Text>
            <Text> Este proceso toma solo unos segundos</Text>
            <Text> Podes salir de la aplicación mientras esto termina (pero por favor no la cierres) </Text>
            <Text> Este proceso toma lugar sólo una vez al año </Text>
          </View>
        </View>
      )
    )
}
