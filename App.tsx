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
import Contact from './components/Contact';
import DailySaint from './components/Saints';
import { init } from './services/BackgroundTasks';

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
  contact: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  settings: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
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
      <View style={styles.settings}>
        <Button title='Ajustes' onPress={_ => navigation.navigate('Ajustes')}></Button>
      </View>
    </View>
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
    init()
      .then(_ => setbackgroundLoaded(true))
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
    <ActivityIndicator />
}
