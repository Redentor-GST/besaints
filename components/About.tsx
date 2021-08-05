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
} from 'react-native';
import {
  useFonts,
  Poppins_400Regular_Italic,
} from '@expo-google-fonts/poppins';

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
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
  },
  footnote: {
    alignSelf: 'flex-end',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
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
});

export default function About() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular_Italic });

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
        <Text style={styles.footnote}>
          Redentor 2021 ©. Todos los derechos reservados.
        </Text>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={styles.activityContainer}>
      <ActivityIndicator size='large' color='#00ff00' />
    </View>
  );
}
