import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Database from '../db/db';
import { Phrase } from '../utils/interfaces';

const db = new Database();
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const emptyPhrase: Phrase = {
  text: "",
  author: "",
  date: ""
}

const styles = StyleSheet.create({
  phraseView: {
    marginHorizontal: 10,
    flexGrow: 1,
    justifyContent: 'center'
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

export default function PhraseView() {
  const [data, setData] = useState(emptyPhrase);
  //TODO change the view when the user rotates the device
  //const { isRotated } = useDeviceOrientation();
  useEffect(() =>
    setData(db.getDailyPhrase())
    , []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.phraseView}>
        <Text style={styles.phrase}>{data.text}</Text>
        <Text style={styles.author}> {data.author} </Text>
      </ScrollView>
    </SafeAreaView>
  )
}