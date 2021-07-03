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
import Database from '../db/db';
import { phraseEndpoint } from '../utils/consts';
import { Phrase } from '../utils/interfaces';
import { fetchFromServer } from '../utils/utils';

const db = new Database();
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

//Number of characters the screen can handle without scrolling (with font = 30)
const maxText = 686;

const emptyPhrase: Phrase = {
  text: "",
  author: ""
}

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

function phraseView(data: Phrase) {
  return data.text.length + data.author.length <= maxText ? (
    <SafeAreaView style={{ flex: 1 }} >
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

export default function PhraseView() {
  const [data, setData] = useState(emptyPhrase);
  //TODO change the view when the user rotates the device
  //const { isRotated } = useDeviceOrientation();
  useEffect(() => {
    const today = new Date();
    //!Wow! This is pretty 🤮🤮
    db.getDailyPhrase()
      .then(dbDailyPhrase => {
        if (!dbDailyPhrase)
          fetchFromServer(phraseEndpoint)
            .then(res => setData(res))
        else if (dbDailyPhrase.date.toDateString() !== today.toDateString())
          //!DRY
          fetchFromServer(phraseEndpoint)
            .then(res => setData(res))
        else {
          const phraseWithoutDate: Phrase = {
            text: dbDailyPhrase.text,
            author: dbDailyPhrase.author
          }
          setData(phraseWithoutDate);
        }
      })
  }, []);

  try {
    const view = phraseView(data)
    return view;
  }
  catch (e) {
    console.log("Ignore this error -> " + e);
  }
  return <View></View>
}