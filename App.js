import {View,
        Text,
        StatusBar,
        StyleSheet,
        Platform,
        Button
        } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Phrase from './components/Phrase'
import * as React from 'react'


const styles = StyleSheet.create({
  view : {
    backgroundColor : 'black',
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : '100%',
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding : 20
  },
  logo : {
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize : 40,
    textAlign : 'center',
    textAlignVertical : 'center',
    color : 'white'
  }
})

const Stack = createStackNavigator();

function homeScreen ({ navigation }) {
  return (
    <View style={styles.view}>
      <StatusBar  
        backgroundColor = "#2f4f4f"  
        barStyle = "dark-content"
        animated = {true}
        translucent = {true}
      />  
      <Text style={styles.logo}>Be Saints</Text>
      <Button title='Frase del dia' onPress={() => navigation.navigate('Phrase')} />
    </View>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={homeScreen} options={{headerShown : false}} />
        <Stack.Screen name='Phrase' component={Phrase} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
