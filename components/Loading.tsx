import React from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Platform,
    ActivityIndicator,
} from 'react-native'
import { lightblue } from '../utils/consts'

const styles = StyleSheet.create({
    activityContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 20,
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
