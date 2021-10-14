import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  ActivityIndicator,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Phrase from './components/Phrase';
import Settings from './components/Settings';
import DailySaint from './components/Saints';
import NotificationsUtils from './utils/notifications';
import { blue, lightblue } from './utils/consts';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import About from './components/About';
import Examination from './components/Examination';
import { ExamsList, ExamsNames } from './components/Exams';

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
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
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
});

export const Stack = createStackNavigator();

const HomeButton = ({ navigation, text }) => (
  <TouchableHighlight
    onPress={() => navigation.navigate(text.trim())}
    style={styles.buttons}>
    <Text allowFontScaling={false} style={styles.buttonsText}>
      {text}
    </Text>
  </TouchableHighlight>
);

const HomeButtonWithPadding = ({ _navigation, _text }) => (
  <View style={{ marginTop: 5 }}>
    <HomeButton navigation={_navigation} text={_text} />
  </View>
);

const homeScreen = ({ navigation }) => (
  <View style={styles.view}>
    <StatusBar
      backgroundColor='#4a868c' //? Should we change this to white?
      barStyle='dark-content'
      animated={true}
      translucent={true}
    />
    <ImageBackground
      source={require('./assets/background-original.jpg')}
      resizeMode={'cover'}
      style={styles.backgroundImage}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <HomeButton navigation={navigation} text='Frase del día' />
      <HomeButtonWithPadding _navigation={navigation} _text='Santos del día' />
      <HomeButtonWithPadding _navigation={navigation} _text='Ajustes' />
      <HomeButtonWithPadding _navigation={navigation} _text='¿Quiénes Somos?' />
      <HomeButtonWithPadding
        _navigation={navigation}
        _text='Examen de conciencia'
      />
    </ImageBackground>
  </View>
);

// :)
let first = true;
async function init() {
  if (first) first = false;
  else return false;
  const nu = new NotificationsUtils();

  const scheduledNotifs = await nu.getAllScheduledNotifications();
  if (scheduledNotifs.length === 0) await nu.scheduleAllYearlyNotifications();

  return true;
}

export default function App() {
  const [backgroundLoaded, setbackgroundLoaded] = useState(false);
  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  useEffect(() => {
    if (!backgroundLoaded)
      init().then(res => {
        if (res) setbackgroundLoaded(true);
      });
  });
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return /*backgroundLoaded &&*/ fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: blue },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name='Home'
          component={homeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='Frase del día' component={Phrase} />
        <Stack.Screen name='Santos del día' component={DailySaint} />
        <Stack.Screen name='Ajustes' component={Settings} />
        <Stack.Screen name='¿Quiénes Somos?' component={About} />
        <Stack.Screen name='Examen de conciencia' component={Examination} />
        {/*How can i add exams automatically?*/}
        <Stack.Screen name={ExamsNames[0]}>
          {props => ExamsList[0].component}
        </Stack.Screen>
        {/*
        <Stack.Screen name={ExamsNames[1]} component={ExamsList[1].component} />
        <Stack.Screen name={ExamsNames[2]} component={ExamsList[2].component} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View>
      <View style={styles.activityContainer}>
        <ActivityIndicator size={60} color={lightblue} />
        <Text style={{ textAlign: 'center' }}>
          {' '}
          Por favor espera mientras terminamos de configurar la aplicación.
          {'\n'}
          Este proceso toma sólo unos segundos {'\n'}
          Podés salir de la aplicación mientras esto termina {'\n'}
          (pero por favor no la cierres). {'\n'}
        </Text>
      </View>
    </View>
  );
}
