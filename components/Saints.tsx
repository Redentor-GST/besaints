import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    Linking,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native'
import { getDailySaints } from '../db/saints'
import {
    useFonts,
    Poppins_400Regular_Italic,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins'
import { lightblue } from '../utils/consts'
import styles from '../styles/saints'

function getTodaysVaticanLink(): string {
    const today = new Date()
    const month = today.getMonth() + 1
    const day = today.getDate()
    let monthStr = month.toString()
    let dayStr = day.toString()
    if (month < 10) monthStr = '0' + monthStr
    if (day < 10) dayStr = '0' + dayStr
    return `https://www.vaticannews.va/es/santos/${monthStr}/${dayStr}.html`
}

export default function DailySaint() {
    const [dailySaints, setdailySaints] = useState([])
    const [fontsLoaded] = useFonts({
        Poppins_400Regular_Italic,
        Poppins_400Regular,
    })

    useEffect(() => {
        getDailySaints().then(dailySaints => {
            setdailySaints(dailySaints)
        })
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

    return dailySaints ? (
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
                            onPress={() =>
                                Linking.openURL(getTodaysVaticanLink())
                            }
                        >
                            <Text style={styles.buttonsText}>
                                Para leer más sobre los santos del día ingresa
                                aquí
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
            <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>
                {' '}
                No hay nigun santo del dia para esta fecha :({' '}
            </Text>
        </SafeAreaView>
    )
}
