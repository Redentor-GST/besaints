import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  View,
  Linking,
  TouchableHighlight,
} from 'react-native';
import {
  useFonts,
  Poppins_400Regular_Italic,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { blue, crossblue, lightblue } from '../utils/consts';

const styles = StyleSheet.create({
  phraseView: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: blue,
    width: '100%',
    paddingHorizontal: 25,
  },
  phrase: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
  },
  footnoteView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  footnote: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
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
    paddingTop: 20,
  },
  buttons: {
    width: 150,
    height: 40,
    backgroundColor: crossblue,
    padding: 9,
    borderRadius: 5,
  },
  buttonsText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
});

export default function About() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular_Italic,
    Poppins_400Regular,
  });

  return fontsLoaded ? (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.phraseView}>
        <Text style={styles.phrase}>
          Redentor es una organización cuyo objetivo es transmitir el mensaje de
          Jesús a través de la vida de los Santos a la mayor cantidad de
          personas posible.
          {'\n\n'}
          BeSaints es nuestra primera aplicación, disponible tanto para iOS como
          en Android.
          {'\n\n'}
          Esperamos que te podamos inspirar con nuestras frases y que la llama
          de la virtud arda en tu corazón.
          {'\n\n'}
        </Text>
        <View style={styles.buttonView}>
          <TouchableHighlight
            onPress={() => Linking.openURL('mailto:besaintsapp@gmail.com')}
            style={styles.buttons}>
            <Text style={styles.buttonsText}> Escribinos! </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footnoteView}>
          <Text style={styles.footnote}>
            {'\n\n'}
            Redentor 2021 ©. Todos los derechos reservados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={60} color={lightblue} />
    </View>
  );
}
