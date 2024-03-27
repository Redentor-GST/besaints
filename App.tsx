import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableHighlight,
} from 'react-native'
import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Phrase from './components/Phrase'
import Settings from './components/Settings'
import DailySaint from './components/Saints'
import { blue } from './utils/consts'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import About from './components/About'
import { Loading } from './components/Loading'
import db from './db/db'
import { createUser, getUser } from './utils/users'
import { registerForPushNotificationsAsync } from './utils/notifications'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '90%',
        height: '20%',
    },
    backgroundImage: {
        width: '112%',
        height: '112%',
        alignItems: 'center',
        justifyContent: 'center',
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

const Stack = createStackNavigator()

const HomeButton = ({ navigation, text }) => (
    <TouchableHighlight
        onPress={() => navigation.navigate(text.trim())}
        style={styles.buttons}
    >
        <Text allowFontScaling={false} style={styles.buttonsText}>
            {text}
        </Text>
    </TouchableHighlight>
)

const HomeButtonWithPadding = ({ _navigation, _text }) => (
    <View style={{ marginTop: 5 }}>
        <HomeButton navigation={_navigation} text={_text} />
    </View>
)

const HomeScreen = ({ navigation }) => (
    <View style={styles.view}>
        <StatusBar
            backgroundColor="#4a868c"
            barStyle="dark-content"
            animated={true}
            translucent={true}
        />
        <ImageBackground
            source={require('./assets/background-original.jpg')}
            resizeMode={'cover'}
            style={styles.backgroundImage}
        >
            <Image source={require('./assets/logo.png')} style={styles.logo} />
            <HomeButton navigation={navigation} text="Frase del día" />
            <HomeButtonWithPadding
                _navigation={navigation}
                _text="Santos del día"
            />
            <HomeButtonWithPadding _navigation={navigation} _text="Ajustes" />
            <HomeButtonWithPadding
                _navigation={navigation}
                _text="¿Quiénes Somos?"
            />
            {/* <HomeButtonWithPadding _navigation={navigation} _text="Debug" /> */}
        </ImageBackground>
    </View>
)

async function registerDeviceId() {
    const uuid = uuidv4()
    await AsyncStorage.setItem('deviceId', uuid)
    return uuid
}

async function getDeviceId() {
    const deviceId = await AsyncStorage.getItem('deviceId')
    if (!deviceId) return registerDeviceId()

    return deviceId
}

// :)
async function init() {
    const shouldSendNotifications = await db.shouldSendNotifications()
    const dbTimeTrigger = await db.getTimeTrigger()
    const timeTrigger = dbTimeTrigger.hour
    const deviceId = await getDeviceId()
    const pushToken = await registerForPushNotificationsAsync()
    if (!pushToken) return console.error('No push token')
    return createUser({
        device_id: deviceId,
        should_send_notifications: shouldSendNotifications,
        time_trigger: timeTrigger,
        expo_push_token: pushToken,
    })
}

async function shouldRegister() {
    const deviceId = await getDeviceId()
    const user = await getUser(deviceId)
    return !!user
}

export default function App() {
    const [backgroundLoaded, setbackgroundLoaded] = useState(false)
    const [fontsLoaded] = useFonts({ Poppins_400Regular })

    useEffect(() => {
        shouldRegister()
            .then(async res => {
                if (!res) init().then(() => setbackgroundLoaded(true))
                else setbackgroundLoaded(true)
            })
            .catch(e => console.error(e))
    }, [])

    return backgroundLoaded && fontsLoaded ? (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: blue },
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Frase del día" component={Phrase} />
                <Stack.Screen name="Santos del día" component={DailySaint} />
                <Stack.Screen name="Ajustes" component={Settings} />
                <Stack.Screen name="¿Quiénes Somos?" component={About} />
                {/* <Stack.Screen name="Debug" component={Debug} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <Loading />
    )
}
