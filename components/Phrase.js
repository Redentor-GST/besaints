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
  phrase: {
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize: 19,
    fontStyle: 'italic',
    color: 'black',
  },
})

function phraseView(data) {
  return (
    <View>
      <View>
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

export default function Phrase() {
  const [data, setData] = useState([]);
  //TODO change the view when the user rotates the device
  const { isRotated } = useDeviceOrientation();
  useEffect(() => {
    fetch(phrase)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  return phraseView(data);
}