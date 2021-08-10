import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  View,
} from 'react-native';
import Database from '../db/db';
import { Phrase } from '../utils/interfaces';
import {
  useFonts,
  Poppins_400Regular_Italic,
} from '@expo-google-fonts/poppins';
import { blue, lightblue } from '../utils/consts';

const db = new Database();
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const emptyPhrase: Phrase = {
  text: '',
  author: '',
  date: '',
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: blue,
    width: '100%',
    paddingHorizontal: 25,
  },
  phrase: {
    fontFamily: 'Poppins_400Regular_Italic',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  phraseView: {
    marginBottom: 20,
    borderTopColor: 'white',
    borderTopWidth: 3,
    borderRadius: 2,
  },
  author: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
    marginTop: 10,
  },
  authorView: {
    marginTop: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    borderRadius: 2,
  },
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
});

export default function PhraseView() {
  const [data, setData] = useState(emptyPhrase);
  const [fontsLoaded] = useFonts({ Poppins_400Regular_Italic });
  //TODO change the view when the user rotates the device
  //const { isRotated } = useDeviceOrientation();
  useEffect(() => setData(db.getDailyPhrase()), []);

  return fontsLoaded ? (
    <View
      style={{ flex: 1, backgroundColor: 'white', width: '100%', height: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.phraseView}>
          <Text style={styles.phrase}>
            {' '}
            {'\n'} {data.text}{' '}
          </Text>
        </View>
        <View style={styles.authorView}>
          <Text style={styles.author}>
            {' '}
            {data.author} {'\n'}{' '}
          </Text>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={60} color={lightblue} />
    </View>
  );
}
