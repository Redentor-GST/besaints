import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import Database from '../db/db'
import { Phrase } from '../utils/interfaces'

const db = new Database()
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const emptyPhrase: Phrase = {
  text: '',
  author: '',
  date: '',
}

const styles = StyleSheet.create({
  phraseView: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#024959',
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
  },
  phrase: {
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white',
  },
  author: {
    alignSelf: 'flex-end',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
})

export default function PhraseView() {
  const [data, setData] = useState(emptyPhrase)
  //TODO change the view when the user rotates the device
  //const { isRotated } = useDeviceOrientation();
  useEffect(() => setData(db.getDailyPhrase()), [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*This was made by mistake by i actually kinda like it */}
      <StatusBar backgroundColor='#024959' />
      <ScrollView contentContainerStyle={styles.phraseView}>
        <Text style={styles.phrase}>
          {data.text} {'\n'}{' '}
        </Text>
        <Text style={styles.author}> {data.author} </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
