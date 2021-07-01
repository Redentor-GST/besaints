import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Button,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'
import Phrase from './components/Phrase';
import Settings from './components/Settings';
import Contact from './components/Contact';
import DailySaint from './components/Saints';

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
      <Button title='Frase diaria' onPress={() => navigation.navigate('Frase del dia')} />
      <View style={{ marginTop: 5 }}>
        <Button title='Santos del dia' onPress={_ => navigation.navigate('Santos del dia')} />
      </View>
      <View style={styles.contact}>
        <Button title='Contacto' onPress={() => navigation.navigate('Contacto')}></Button>
      </View>
      <View style={styles.settings}>
        <Button title='Ajustes' onPress={_ => navigation.navigate('Ajustes')}></Button>
      </View>
    </View>
  ) :
    <SafeAreaView style={styles.view}>
      <Text style={styles.logo}>Be Saints</Text>
      <Button title="Frase del dia" onPress={_ => navigation.navigate("Frase del dia")}></Button>
      <Button title='Contacto' onPress={() => navigation.navigate('Contacto')}></Button>
      <Button title='Ajustes' onPress={_ => navigation.navigate('Ajustes')}></Button>
    </SafeAreaView>
}
// :)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={homeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Frase del dia' component={Phrase} />
        <Stack.Screen name='Ajustes' component={Settings} />
        <Stack.Screen name='Contacto' component={Contact} />
        <Stack.Screen name='Santos del dia' component={DailySaint} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
