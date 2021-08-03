import React, { useEffect, useState } from 'react'
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
} from 'react-native'
import Database from '../db/db'
import { useFonts, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins'

const db = new Database()
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
  },
  infoView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 20,
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
})

function getTodaysVaticanLink(): string {
  const today = new Date()
  let month = today.getMonth() + 1
  let day = today.getDate()
  let monthStr = month.toString()
  let dayStr = day.toString()
  if (month < 10) monthStr = '0' + monthStr
  if (day < 10) dayStr = '0' + dayStr
  const link =
    'https://www.vaticannews.va/es/santos/' + monthStr + '/' + dayStr + '.html'
  return link
}

export default function DailySaint() {
  const [dailySaints, setdailySaints] = useState([])
  const [isThereAnyInfo, setisThereAnyInfo] = useState(true)
  const [fontsLoaded] = useFonts({ Poppins_400Regular_Italic })

  useEffect(() => {
    const dailySaints = db.getDailySaints()
    typeof dailySaints !== 'undefined' && dailySaints.length === 0
      ? setisThereAnyInfo(false)
      : setdailySaints(dailySaints)
  }, [])

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
  )

  return isThereAnyInfo ? (
    //https://www.youtube.com/watch?v=ZPC2070ZKWA
    fontsLoaded ? (
      <SafeAreaView style={styles.noMeLaContainer}>
        <StatusBar backgroundColor='#024959' />
        <FlatList
          data={dailySaints}
          renderItem={({ item }) => <SaintView _saintObj={item} />}
          keyExtractor={saint => saint.saint}
          ListHeaderComponent={<SaintView _saintObj={dailySaints} />}
          ListFooterComponent={
            <Button
              title='Para leer mas sobre los santos del dia ingresa aquí'
              onPress={_ => Linking.openURL(getTodaysVaticanLink())}
            />
          }
        />
      </SafeAreaView>
    ) : (
      <View style={styles.activityContainer}>
        <ActivityIndicator size='large' color='#00ff00' />
      </View>
    )
  ) : (
    <SafeAreaView style={styles.noMeLaContainer}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        {' '}
        No hay nigun santo del dia para esta fecha :({' '}
      </Text>
    </SafeAreaView>
  )
}
