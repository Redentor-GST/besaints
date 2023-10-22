import { StyleSheet, Platform, StatusBar } from 'react-native'
import { blue } from '../utils/consts'

export default StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: blue,
        width: '100%',
        paddingHorizontal: 25,
    },
    phrase: {
        fontFamily: 'Poppins_400Regular_Italic',
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },
    phraseView: {
        marginBottom: 20,
        borderTopColor: 'white',
        borderTopWidth: 3,
        borderRadius: 2,
    },
    author: {
        alignSelf: 'flex-end',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins_400Regular_Italic',
        marginTop: 10,
    },
    authorView: {
        marginTop: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        borderRadius: 2,
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
        marginTop: '5%',
    },
    button: {
        backgroundColor: '#11263B',
        justifyContent: 'center',
        borderRadius: 5,
        padding: '3%',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
    },
})
