import React, { useEffect, useState} from 'react';
import {View,
        Text,
        StatusBar,
        StyleSheet,
        Platform,
        Dimensions,
        ImageBackground,
        } from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'home'

//TODO modularize this
const phraseStyle = StyleSheet.create({
  container : {
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignContent : 'center',
    fontSize : 17,  
    fontStyle : 'italic',
    color : 'yellow'
  }
})

const bgImageStyle = StyleSheet.create({
  container : {
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width : '100%',
    height : '100%',
    paddingBottom : '0%',
  }
})

export default function Phrase () {
  const [data, setData] = useState([]);
  const { isRotated } = useDeviceOrientation();

  useEffect(() => {
    fetch(phrase)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
  },[]);

  return (
    //SafeAreaView is IOS only, if i want to handle android i need to 
    //define a style with paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0
    <View>
      <ImageBackground source={require('./saints/teresitadeliseaux.jpg')} style={bgImageStyle.container} blurRadius={1.5}>
        <Text style={phraseStyle.container}>{data.text}</Text>
        <Text style = {{textAlign : 'center'}}> {data.author} </Text>
      </ImageBackground>
    </View>
  );
}