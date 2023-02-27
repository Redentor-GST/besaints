import { StatusBar, StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  noMeLaContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: '#024959',
  },
  saintView: {
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  saintText: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
    paddingHorizontal: 20,
  },
  infoView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins_400Regular_Italic',
    paddingHorizontal: 20,
  },
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
  buttons: {
    // width: 150,
    // height: 40,
    backgroundColor: '#11263B',
    justifyContent: 'center',
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
