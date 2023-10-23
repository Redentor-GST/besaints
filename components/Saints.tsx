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
import { Saint, SaintInfo } from '../utils/interfaces'

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

const SaintView = ({ saintObj }: { saintObj: Saint }) => (
    <View>
        <Text style={styles.saintText}> {saintObj.saint} </Text>

        <Text style={styles.infoText}>
            {saintObj.info}
            {'\n'}{' '}
        </Text>
    </View>
)

export default function DailySaint() {
    const [dailySaints, setdailySaints] = useState<SaintInfo[]>([])
    const [fontsLoaded] = useFonts({
        Poppins_400Regular_Italic,
        Poppins_400Regular,
    })

    useEffect(() => {
        getDailySaints().then(setdailySaints)
    }, [])

    const Loading = () => (
        <View style={styles.activityContainer}>
            <ActivityIndicator size={60} color={lightblue} />
        </View>
    )

    const NoInfoView = () => (
        <SafeAreaView style={styles.noMeLaContainer}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
                {' '}
                No hay nigun santo del dia para esta fecha :({' '}
            </Text>
        </SafeAreaView>
    )

    if (dailySaints.length === 0) return <NoInfoView />
    else if (!fontsLoaded) return <Loading />

    return (
        <SafeAreaView style={styles.noMeLaContainer}>
            <FlatList
                data={dailySaints}
                renderItem={({ item }) => <SaintView saintObj={item} />}
                keyExtractor={saint => saint.saint}
                ListFooterComponent={
                    <TouchableHighlight
                        style={styles.buttons}
                        onPress={() => Linking.openURL(getTodaysVaticanLink())}
                    >
                        <Text style={styles.buttonsText}>
                            Para leer más sobre los santos del día ingresa aquí
                        </Text>
                    </TouchableHighlight>
                }
            />
        </SafeAreaView>
    )
}
