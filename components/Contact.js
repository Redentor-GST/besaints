import * as React from 'react'
import {View,
    Text,
    Linking,
    StyleSheet,
    Image,
    TouchableOpacity
    } from 'react-native';


//TODO import a pic
const styles = StyleSheet.create({
    link : {
        color : 'blue',
        fontSize : 17,
        textAlign : 'center'
    },
    images : {
        width : 150,
        height : 150,
        alignSelf : 'center'
    }
})

export default function Contact () {
    return (
        <View>
            <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/iqueralt')}>
                Ignacio Queralt
            </Text>
            <TouchableOpacity onPress={() => {Linking.openURL('https://github.com/iqueralt')}} activeOpacity={1}>
                <Image source={require('../resources/nachotalarga.png')} style={styles.images}></Image>
            </TouchableOpacity>


            <Text style={styles.link} onPress={() => {Linking.openURL('https://github.com/jramosss')}}>
                Julian Ramos
            </Text>
            <TouchableOpacity onPress={() => {Linking.openURL('https://github.com/jramosss')}}>
                <Image source={require('../resources/chuls.jpg')} style={styles.images}></Image>
            </TouchableOpacity>

            <View>
                <Text style={{color : 'blue',textAlign : 'left',fontSize : 17}} onPress={() => Linking.openURL('mailto:besaintsapp@gmail.com')}>
                    Envianos un email! 📨
                </Text>
            </View>
        </View>
    )
}