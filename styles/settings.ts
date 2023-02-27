import { Platform, StatusBar, StyleSheet } from 'react-native'
import { blue } from '../utils/consts'

export default StyleSheet.create({
  activityIndicatorView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
  container: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: blue,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    color: 'black',
    fontWeight: '900',
  },
  notifsText: {
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    paddingRight: 25,
    fontSize: 13,
  },
})
