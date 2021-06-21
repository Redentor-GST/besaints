import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/'
const phrase = domain + 'phrases'

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
    fontSize: 24,
    fontStyle: 'italic',
    color: 'black',
  },
})

function phraseView(data) {
  return (
    <View>
      <View style={styles.phraseView}>
        <StatusBar
          backgroundColor="#2f4f4f"
          barStyle="dark-content"
          animated={true}
          translucent={true}
        />
        <Text style={styles.phrase}>{data.text}</Text>
      </View>
      <Text style={{ textAlign: 'right' }}> {data.author} </Text>
    </View>
  )
}

export async function getDailyPhrase(from) {
  const data = await fetch(from);
  const json = data.json();
  return json;
}

export default function Phrase() {
  const [data, setData] = useState([]);
  //TODO change the view when the user rotates the device
  const { isRotated } = useDeviceOrientation();
  useEffect(() => {
    getDailyPhrase(phrase).then((res) => setData(res))
  }, []);

  return phraseView(data);
}