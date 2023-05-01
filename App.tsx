import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native'
import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Phrase from './components/Phrase'
import Settings from './components/Settings'
import DailySaint from './components/Saints'
import NotificationsUtils from './utils/notifications'
import { blue, SHARE_CATEGORY } from './utils/consts'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import About from './components/About'
import * as Notifications from 'expo-notifications'
import { sharePhrase } from './utils/utils'
import { Loading } from './components/Loading'
import Users from './db/users'

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    //If you want to resize the logo just change the width, dont touch the height
    width: '90%',
    height: '20%',
  },
  backgroundImage: {
    width: '112%',
    height: '112%',
    alignItems: 'center',
    justifyContent: 'center',
    // position: "absolute",
    padding: 0,
    bottom: 0,
  },
  buttons: {
    width: 200,
    height: 50,
    backgroundColor: '#11263B',
    justifyContent: 'center',
    padding: '2%',
    borderRadius: 5,
  },
  buttonsText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
})

const Stack = createStackNavigator()

const HomeButton = ({ navigation, text }) => (
  <TouchableHighlight
    onPress={() => navigation.navigate(text.trim())}
    style={styles.buttons}
  >
    <Text allowFontScaling={false} style={styles.buttonsText}>
      {text}
    </Text>
  </TouchableHighlight>
)

const HomeButtonWithPadding = ({ _navigation, _text }) => (
  <View style={{ marginTop: 5 }}>
    <HomeButton navigation={_navigation} text={_text} />
  </View>
)

const homeScreen = ({ navigation }) => (
  <View style={styles.view}>
    <StatusBar
      backgroundColor="#4a868c"
      barStyle="dark-content"
      animated={true}
      translucent={true}
    />
    <ImageBackground
      source={require('./assets/background-original.jpg')}
      resizeMode={'cover'}
      style={styles.backgroundImage}
    >
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <HomeButton navigation={navigation} text="Frase del día" />
      <HomeButtonWithPadding _navigation={navigation} _text="Santos del día" />
      <HomeButtonWithPadding _navigation={navigation} _text="Ajustes" />
      <HomeButtonWithPadding _navigation={navigation} _text="¿Quiénes Somos?" />
    </ImageBackground>
  </View>
)

// :)
async function init() {
  let user = await Users.getUser()
  if (user) return
  user = await Users.createUser()
  const nu = new NotificationsUtils()

  const scheduledNotifs = await nu.getAllScheduledNotifications()
  if (scheduledNotifs.length === 0) await nu.scheduleAllYearlyNotifications()
}

export default function App() {
  const [backgroundLoaded, setbackgroundLoaded] = useState(false)
  const [fontsLoaded] = useFonts({ Poppins_400Regular })

  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener(notification => {
      if (notification.actionIdentifier == SHARE_CATEGORY)
        sharePhrase(notification.notification.request.content.body)
    })

    if (!backgroundLoaded) init().then(_ => setbackgroundLoaded(true))
  }, [])

  return backgroundLoaded && fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: blue },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="Home"
          component={homeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Frase del día" component={Phrase} />
        <Stack.Screen name="Santos del día" component={DailySaint} />
        <Stack.Screen name="Ajustes" component={Settings} />
        <Stack.Screen name="¿Quiénes Somos?" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Loading />
  )
}
