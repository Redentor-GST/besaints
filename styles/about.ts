import { StyleSheet } from 'react-native'
import { blue, crossblue } from '../utils/consts'

export default StyleSheet.create({
    phraseView: {
        paddingTop: 25,
        backgroundColor: blue,
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
        padding: 20,
    },
    buttonView: {
        alignItems: 'center',
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
