import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/';
const phrase = domain + 'phrases';
//Number of characters the screen can handle without scrolling (with font = 30)
const maxText = 686;

const styles = StyleSheet.create({
  phraseView: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20
  },
  phrase: {
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'italic',
    color: 'black',
  },
  author: {
    textAlign: 'right',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontSize: 20,
    fontStyle: 'italic'
  }
})

function phraseView(data) {
  return data.text.length + data.author.length <= maxText ? (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.phraseView}>
        <Text style={styles.phrase}>{data.text}</Text>
        <Text style={styles.author}> {data.author} </Text>
      </ScrollView>
    </SafeAreaView>
  ) :
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <Text style={styles.phrase}>{data.text}</Text>
        <Text style={styles.author}> {data.author} </Text>
      </ScrollView>
    </SafeAreaView>
}

export async function getDailyPhrase(from) {
  const data = await fetch(from);
  const json = data.json();

  return json;
}

export default function Phrase() {
  const [data, setData] = useState({});
  //TODO change the view when the user rotates the device
  //const { isRotated } = useDeviceOrientation();
  useEffect(() => {
    getDailyPhrase(phrase)
      .then(res => setData(res))
  }, []);


  console.log(data);
  try {
    const view = phraseView(data)
    return view;
  }
  catch (e) {
    console.log("Ignore this error -> " + e);
  }
  return <View></View>
}