import React, { useEffect, useState } from 'react'
import { Text, ScrollView, ActivityIndicator, View } from 'react-native'
import db from '../db/phrases'
import { Phrase } from '../utils/interfaces'
import { useFonts, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins'
import { lightblue } from '../utils/consts'
import { TouchableHighlight } from 'react-native-gesture-handler'
import styles from '../styles/phrase'
import { sharePhrase } from '../utils/utils'

export default function PhraseView() {
    const [phrase, setPhrase] = useState<Phrase | null>(null)
    const [fontsLoaded] = useFonts({ Poppins_400Regular_Italic })
    useEffect(() => {
        db.getDailyPhrase().then(phrase => setPhrase(phrase))
    }, [])

    const onShare = () => {
        if (phrase) sharePhrase(`${phrase.text}\n${phrase.author}`)
    }

    return fontsLoaded && phrase ? (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                width: '100%',
                height: 1,
            }}
        >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.phraseView}>
                    <Text style={styles.phrase}>
                        {' '}
                        {'\n'} {phrase.text}{' '}
                    </Text>
                </View>
                <View style={styles.authorView}>
                    <Text style={styles.author}>
                        {' '}
                        {phrase.author} {'\n'}{' '}
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.button} onPress={onShare}>
                        <Text style={styles.buttonText}> Compartir </Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    ) : (
        <View style={styles.activityContainer}>
            <ActivityIndicator size={60} color={lightblue} />
        </View>
    )
}
