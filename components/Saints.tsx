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
import db from '../db/db'
import {
    useFonts,
    Poppins_400Regular_Italic,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins'
import { lightblue } from '../utils/consts'
import styles from '../styles/saints'

function getTodaysVaticanLink(): string {
    const today = new Date()
    let month = today.getMonth() + 1
    let day = today.getDate()
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
    const [dailySaints, setdailySaints] = useState<Saint[]>([])
    const [isThereAnyInfo, setisThereAnyInfo] = useState(true)
    const [fontsLoaded] = useFonts({
        Poppins_400Regular_Italic,
        Poppins_400Regular,
    })

    useEffect(() => {
        const dailySaints = db.getDailySaints()
        dailySaints.length === 0
            ? setisThereAnyInfo(false)
            : setdailySaints(dailySaints)
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

    return isThereAnyInfo ? (
        fontsLoaded ? (
            <SafeAreaView style={styles.noMeLaContainer}>
                <FlatList
                    data={dailySaints}
                    renderItem={({ item }) => <SaintView saintObj={item} />}
                    keyExtractor={saint => saint.saint}
                    ListFooterComponent={
                        <TouchableHighlight
                            style={styles.buttons}
                            onPress={_ =>
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
            <Loading />
        )
    ) : (
        <NoInfoView />
    )
}
