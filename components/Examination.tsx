import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableHighlight,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { blue, crossblue, lightblue } from '../utils/consts';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Platform } from '@unimodules/react-native-adapter';
import DefaultLoadingScreen from '../utils/componentsUtils';
import { ExamsList } from './Exams';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blue,
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins_400Regular',
  },
  buttons: {
    width: 180,
    height: 50,
    backgroundColor: crossblue,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonsText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  flatListView: {
    height: '30%',
  },
  flatListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MyButton = ({ _navigation, text }) => {
  return (
    <TouchableHighlight
      onPress={() => _navigation.navigate(text.trim())}
      style={styles.buttons}>
      <Text allowFontScaling={false} style={styles.buttonsText}>
        {text}
      </Text>
    </TouchableHighlight>
  );
};

export default function Examination({ navigation }) {
  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  return fontsLoaded ? (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          Sample text de examenes de conciencia {'\n\n'}
        </Text>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          data={ExamsList}
          renderItem={({ item }) => (
            <MyButton _navigation={navigation} text={item.title} />
          )}
          keyExtractor={item => item.title}
          contentContainerStyle={styles.flatListStyle}
        />
      </View>
    </View>
  ) : (
    <DefaultLoadingScreen />
  );
}
