import { StyleSheet, Platform, StatusBar } from 'react-native'
import { blue, crossblue } from '../utils/consts'

export default StyleSheet.create({
    phraseView: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: blue,
        width: '100%',
        paddingHorizontal: 25,
    },
    phrase: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontFamily: 'Poppins_400Regular_Italic',
    },
    footnoteView: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    footnote: {
        fontSize: 10,
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
    buttonView: {
        alignItems: 'center',
        paddingTop: 20,
    },
    buttons: {
        width: 150,
        height: 40,
        backgroundColor: crossblue,
        padding: 9,
        borderRadius: 5,
    },
    buttonsText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
    },
})
