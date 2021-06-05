import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Button
} from 'react-native';
import ScheduleNotificationTask from './services/ScheduleNotificationTask'

import * as React from 'react'

const styles = StyleSheet.create({
  view : {
    backgroundColor : 'black',    //? Should we change the baground to black?
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    height : '100%',
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding : 20
  },
  logo: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  contact : {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop : 750,    //TODO this should be more general, may cause conflict in other devices
    fontSize: 40,
  },
  push: {               //To use when push notification branch is merged
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 750,
    fontSize: 40,
    textAlign: 'left'
  },
})

const unregisterScheduleNotificationTask  = () => {
  ScheduleNotificationTask.unregister()
}

function homeScreen ({ navigation }) {
  
}

export default function App() {
  return (
    <View style={styles.view}>
      <StatusBar
        backgroundColor="#2f4f4f"  //? Should we change this to white?
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <Text style={styles.logo}>Be Saints</Text>
      <View style = {{marginTop : 10}}>
        <Button title='Unregister Task' onPress={() => unregisterScheduleNotificationTask()}></Button>
      </View>
    </View>
  )
}
