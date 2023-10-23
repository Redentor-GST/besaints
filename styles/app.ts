import { Platform, StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
    view: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    logo: {
        //If you want to resize the logo just change the width, dont touch the height
        width: '90%',
        height: '20%',
    },
    backgroundImage: {
        width: '112%',
        height: '112%',
        alignItems: 'center',
        justifyContent: 'center',
        // position: "absolute",
        padding: 0,
        bottom: 0,
    },
    buttons: {
        width: 200,
        height: 50,
        backgroundColor: '#11263B',
        justifyContent: 'center',
        padding: '2%',
        borderRadius: 5,
    },
    buttonsText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
    },
})
