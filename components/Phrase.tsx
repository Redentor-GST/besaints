import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  View,
} from 'react-native'
import Database from '../db/db'
import { Phrase } from '../utils/interfaces'
import { useFonts, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins'

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
    fontFamily: 'Poppins_400Regular_Italic',
  },
  author: {
    alignSelf: 'flex-end',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
    marginTop: 10,
  },
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
})

export default function PhraseView() {
  const [data, setData] = useState(emptyPhrase)
  const [fontsLoaded] = useFonts({ Poppins_400Regular_Italic })
  //TODO change the view when the user rotates the device
  //const { isRotated } = useDeviceOrientation();
  useEffect(() => setData(db.getDailyPhrase()), [])

  return fontsLoaded ? (
    <SafeAreaView style={{ flex: 1 }}>
      {/*This was made by mistake by i actually kinda like it */}
      <StatusBar backgroundColor='#024959' />
      <ScrollView contentContainerStyle={styles.phraseView}>
        <View
          style={{
            marginBottom: 20,
            borderBottomColor: 'white',
            borderBottomWidth: 3,
            borderRadius: 2
          }}
        />
        <Text style={styles.phrase}>
          {data.text} {' '}
        </Text>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: 'white',
            borderBottomWidth: 3,
            borderRadius: 2
          }}
        />
        <Text style={styles.author}> {data.author} </Text>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={styles.activityContainer}>
      <ActivityIndicator size='large' color='#00ff00' />
    </View>
  )
}
