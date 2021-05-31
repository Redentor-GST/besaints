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
import Phrase from './components/Phrase'
import Contact from './components/Contact'
import Push from './components/Push'

import * as React from 'react'


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
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
    textAlignVertical: 'center',
    color: 'white'
  },
  contact: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: 750,
    fontSize: 40,
    textAlign: 'right'
  },
  push: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 750,
    fontSize: 40,
    textAlign: 'left'
  }
})

const Stack = createStackNavigator();

function homeScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <StatusBar
        backgroundColor="#2f4f4f"
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <Text style={styles.logo}>Be Saints</Text>
        <Button title='Daily Phrase' onPress={() => navigation.navigate('Phrase')} />
      <View style={styles.contact}>
        <Button title='Contact' onPress={() => { navigation.navigate('Contact') }}></Button>
      </View>
      <View styles={styles.push}>
        <Button title='Push' onPress={() => { navigation.navigate('Push') }}></Button>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={homeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Phrase' component={Phrase} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='Push' component={Push} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
