import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants';
import React, { Component } from 'react'
import { View, Text } from 'react-native'

// const getToken = async () => {
//     const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//     if (status !== 'granted')
//         return;
//     const token = await Notifications.getExpoPushTokenAsync();
//     console.log(token);

//     return token;
// }


const registerForPushNotificationsAsync = async () => {
    console.log("is this running?")

    console.log("how about here?")
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    console.log("???")
    this.setState({ expoPushToken: token });
}

export default class App extends Component {

    componentDidMount() {
        registerForPushNotificationsAsync();
        console.log("hello, fuck");
    }


    render() {
        return (
            <View></View>
        )
    }
}


// const AppNavigator = () => {
//     useEffect(() => {
//         getToken();
//     }, [])
// }