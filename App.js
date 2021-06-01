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
  view : {
    backgroundColor : 'black',    //? Should we change the baground to black?
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : '100%',
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding : 20
  },
  logo: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  contact : {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop : 750,    //TODO this should be more general, may cause conflict in other devices
    fontSize: 40,
  },
  push: {               //To use when push notification branch is merged
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 750,
    fontSize: 40,
    textAlign: 'left'
  },
})

const Stack = createStackNavigator();

function homeScreen ({ navigation }) {
  return (
    <View style={styles.view}>
      <StatusBar
        backgroundColor="#2f4f4f"  //? Should we change this to white?
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <Text style={styles.logo}>Be Saints</Text>
      <View style = {{marginTop : 10}}>
        <Button title='Frase diaria' onPress={() => navigation.navigate('Phrase')}/>
      </View>
      <View style={styles.contact}>
        <Button title='Contacto' onPress={() => { navigation.navigate('Contact') }}></Button>
      </View>
      <View style={styles.push}>
        <Button title='Push' onPress={() =>{navigation.navigate('Push')}}></Button>
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