import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { lightblue } from '../utils/consts'

const styles = StyleSheet.create({
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
})

export const Loading = () => (
  <View>
    <View style={styles.activityContainer}>
      <ActivityIndicator size={60} color={lightblue} />
      <Text style={{ textAlign: 'center' }}>
        {' '}
        Por favor espera mientras terminamos de configurar la aplicación.
        {'\n'}
        Este proceso toma sólo unos segundos {'\n'}
        Podés salir de la aplicación mientras esto termina {'\n'}
        (pero por favor no la cierres). {'\n'}
      </Text>
    </View>
  </View>
)
