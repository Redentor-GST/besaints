import React, { useEffect, useState} from 'react';
import {View,
        Text,
        StatusBar,
        StyleSheet,
        Platform,
        Dimensions,
        ImageBackground,
        } from 'react-native';

//import Phrase from './components/Phrase'


const viewStyle = StyleSheet.create({
  container : {
    backgroundColor : 'black',
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : '100%',
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding : 20
  }
})

const logoStyle = StyleSheet.create({
  container : {
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize : 40,
    textAlign : 'center',
    textAlignVertical : 'center',
    color : 'white'
  }
});

export default function App () {
  return (
    <View style={viewStyle.container}>
      <StatusBar  
        backgroundColor = "#2f4f4f"  
        barStyle = "dark-content"
        animated = {true}
        translucent = {true}
      />  
      <Text style={logoStyle.container}>Be Saints</Text>
    </View>
  )
}
