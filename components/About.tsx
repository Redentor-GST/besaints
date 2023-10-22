import React from 'react'
import {
    Text,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    View,
    Linking,
    TouchableHighlight,
} from 'react-native'
import {
    useFonts,
    Poppins_400Regular_Italic,
    Poppins_400Regular,
} from '@expo-google-fonts/poppins'
import { lightblue } from '../utils/consts'
import styles from '../styles/about'

export default function About() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular_Italic,
        Poppins_400Regular,
    })

    const LoadingView = () => (
        <View style={styles.activityContainer}>
            <ActivityIndicator size={60} color={lightblue} />
        </View>
    )

    const FootNote = () => (
        <View style={styles.footnoteView}>
            <Text style={styles.footnote}>
                {'\n\n'}
                Redentor 2021 ©. Todos los derechos reservados.
            </Text>
        </View>
    )

    const ContactUs = () => (
        <View style={styles.buttonView}>
            <TouchableHighlight
                onPress={() => Linking.openURL('mailto:besaintsapp@gmail.com')}
                style={styles.buttons}
            >
                <Text style={styles.buttonsText}> Escribinos! </Text>
            </TouchableHighlight>
        </View>
    )

    return fontsLoaded ? (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.phraseView}>
                <Text style={styles.phrase}>
                    Redentor es una organización cuyo objetivo es transmitir el
                    mensaje de Jesús a través de la vida de los Santos a la
                    mayor cantidad de personas posible.
                    {'\n\n'}
                    Be Saints es nuestra primera aplicación, disponible tanto
                    para iOS como para Android.
                    {'\n\n'}
                    Esperamos que te podamos inspirar con nuestras frases y que
                    la llama de la virtud arda en tu corazón.
                    {'\n\n'}
                </Text>
                <ContactUs />
                <FootNote />
            </ScrollView>
        </SafeAreaView>
    ) : (
        <LoadingView />
    )
}
