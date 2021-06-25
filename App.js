import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'
import Phrase from './components/Phrase';
import Settings from './components/Settings';
import Contact from './components/Contact'

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',    //? Should we change the baground to black?
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
    color: 'white'
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
  return (
    <View style={styles.view}>
      <StatusBar
        backgroundColor="#2f4f4f"  //? Should we change this to white?
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <Text style={styles.logo}>Be Saints</Text>
      <View style={{ marginTop: 10 }}>
        <Button title='Frase diaria' onPress={() => navigation.navigate('Frase del dia')} />
      </View>
      <View style={styles.contact}>
        <Button title='Contacto' onPress={() => navigation.navigate('Contacto')}></Button>
      </View>
      <View style={styles.settings}>
        <Button title='Ajustes' onPress={_ => navigation.navigate('Ajustes')}></Button>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={homeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Frase del dia' component={Phrase} />
        <Stack.Screen name='Ajustes' component={Settings} />
        <Stack.Screen name='Contacto' component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
