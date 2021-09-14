//Saints (Santo del dia) component view
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Platform,
  SafeAreaView,
  Button,
  Linking,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import Database from '../db/db';
import {
  useFonts,
  Poppins_400Regular_Italic,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { lightblue } from '../utils/consts';

const db = new Database();
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const styles = StyleSheet.create({
  noMeLaContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: '#024959',
  },
  saintView: {
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  saintText: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
    paddingHorizontal: 20,
  },
  infoView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
    paddingHorizontal: 20,
  },
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
  buttons: {
    // width: 150,
    // height: 40,
    backgroundColor: '#11263B',
    justifyContent: 'center',
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

/**
 * @returns The URL of the saint of the day in the vatican web page
 */
function getTodaysVaticanLink(): string {
  const today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let monthStr = month.toString();
  let dayStr = day.toString();
  if (month < 10) monthStr = '0' + monthStr;
  if (day < 10) dayStr = '0' + dayStr;
  const link =
    'https://www.vaticannews.va/es/santos/' + monthStr + '/' + dayStr + '.html';
  return link;
}

export default function DailySaint() {
  const [dailySaints, setdailySaints] = useState([]);
  const [isThereAnyInfo, setisThereAnyInfo] = useState(true);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular_Italic,
    Poppins_400Regular,
  });

  useEffect(() => {
    const dailySaints = db.getDailySaints();
    typeof dailySaints !== 'undefined' && dailySaints.length === 0
      ? setisThereAnyInfo(false)
      : setdailySaints(dailySaints);
  }, []);

  const SaintView = ({ _saintObj }) => (
    <View>
      <View style={styles.saintView}>
        <Text style={styles.saintText}> {_saintObj.saint} </Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>
          {_saintObj.info}
          {'\n'}{' '}
        </Text>
      </View>
    </View>
  );

  return isThereAnyInfo ? (
    //https://www.youtube.com/watch?v=ZPC2070ZKWA
    fontsLoaded ? (
      <SafeAreaView style={styles.noMeLaContainer}>
        <FlatList
          data={dailySaints}
          renderItem={({ item }) => <SaintView _saintObj={item} />}
          keyExtractor={saint => saint.saint}
          ListHeaderComponent={<SaintView _saintObj={dailySaints} />}
          ListFooterComponent={
            <TouchableHighlight
              style={styles.buttons}
              onPress={_ => Linking.openURL(getTodaysVaticanLink())}>
              <Text style={styles.buttonsText}>
                Para leer más sobre los santos del día ingresa aquí
              </Text>
            </TouchableHighlight>
          }
        />
      </SafeAreaView>
    ) : (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={60} color={lightblue} />
      </View>
    )
  ) : (
    <SafeAreaView style={styles.noMeLaContainer}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        {' '}
        No hay nigun santo del dia para esta fecha :({' '}
      </Text>
    </SafeAreaView>
  );
}
