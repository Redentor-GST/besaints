import { saintsEndpoint } from "../utils/consts";
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Button,
    FlatList,
    Platform,
    ScrollView,
    SafeAreaView
} from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

interface SaintInfo {
    info: string;
    saint: string;
}

const emptySaintInfoArr: [SaintInfo] = [{ saint: "", info: "" }]

const styles = StyleSheet.create({
    noMeLaContainer: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 20
    },
    saint: {
        textAlign: 'left',
        justifyContent: 'flex-start',
    },
    info: {
        alignContent: 'center',
        justifyContent: 'center'
    }
});

//Number of characters the screen can handle without scrolling (with font = 30)
const maxText = 686;

async function getDailySaint(): Promise<[SaintInfo]> {
    const dailyInfo = await fetch(saintsEndpoint)
    const dailyInfoJson = await dailyInfo.json();

    return dailyInfoJson;
}

export default function DailySaint() {
    const [dailySaintObj, setdailySaintObj] = useState(emptySaintInfoArr);

    useEffect(() => {
        getDailySaint()
            .then(dso => setdailySaintObj(dso));
    }, [])

    const SaintView = ({ _saintObj }) => (
        <View>
            <View style={styles.saint}>
                <Text style={{ fontSize: 25 }}> {_saintObj.saint} </Text>
            </View>

            <View style={styles.info}>
                <Text style={{ fontSize: 20 }} >{_saintObj.info}{"\n"} </Text>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={styles.noMeLaContainer}>
            <ScrollView>
                <FlatList
                    data={dailySaintObj}
                    renderItem={({ item }) => <SaintView _saintObj={item} />}
                    ListHeaderComponent={<SaintView _saintObj={emptySaintInfoArr[0]} />}
                    ListFooterComponent={<View></View>}
                />
            </ScrollView>
        </SafeAreaView>
    )
}