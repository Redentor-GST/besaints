import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  View,
  Share,
} from 'react-native';
import Database from '../db/db';
import { Phrase } from '../utils/interfaces';
import {
  useFonts,
  Poppins_400Regular_Italic,
} from '@expo-google-fonts/poppins';
import { blue, lightblue } from '../utils/consts';
import { TouchableHighlight } from 'react-native-gesture-handler';

const db = new Database();

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
  buttonView: {
    alignItems: 'center',
    marginTop: '5%',
  },
  button: {
    // width: 150,
    // height: 40,
    backgroundColor: '#11263B',
    justifyContent: 'center',
    borderRadius: 5,
    padding: '3%',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
});

export default function PhraseView() {
  const [data, setData] = useState(emptyPhrase);
  const [fontsLoaded] = useFonts({ Poppins_400Regular_Italic });
  useEffect(() => setData(db.getDailyPhrase()), []);

  const onShare = async () => {
    await Share.share({
      message:
        '"' +
        data.text +
        '" ' +
        data.author +
        '\nDescubre mas frases de santos en la aplicación Be Saints https://linktr.ee/besaintsapp',
    }).catch(e => console.error(e.message));
  };

  return fontsLoaded ? (
    <View
      style={{ flex: 1, backgroundColor: 'white', width: '100%', height: 1 }}
    >
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
        <View style={styles.buttonView}>
          <TouchableHighlight style={styles.button} onPress={onShare}>
            <Text style={styles.buttonText}> Compartir </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={60} color={lightblue} />
    </View>
  );
}
