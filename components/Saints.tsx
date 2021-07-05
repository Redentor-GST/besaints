import { saintsEndpoint } from "../utils/consts";
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    FlatList,
    Platform,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    Button,
    Linking,
} from 'react-native';
import { SaintInfo, SaintInfoWithDate } from "../utils/interfaces";
import Database from "../db/db";
import { fetchFromServer } from "../utils/utils";

const db = new Database();
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const emptySaintInfo: SaintInfo = { info: '', saint: '' };

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

function getTodaysVaticanLink(): string {
    const today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let monthStr = month.toString();
    let dayStr = day.toString();
    if (month < 10)
        monthStr = '0' + monthStr;
    if (day < 10)
        dayStr = '0' + dayStr;
    const link = 'https://www.vaticannews.va/es/santos/' + monthStr +
        '/' + dayStr + '.html';
    return link;
}

export default function DailySaint() {
    const [dailySaintObj, setdailySaintObj] = useState([emptySaintInfo]);
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        getSaintsInfo()
            .then(res => {
                setdailySaintObj(res);
                setloaded(true)
            }
            )
    }, []);

    async function getSaintsInfo(): Promise<[SaintInfo]> {
        const today = new Date();
        const dbDailySaints: SaintInfoWithDate = await db.getDailySaints();

        if (!dbDailySaints)
            return await fetchFromServer(saintsEndpoint);
        else if (dbDailySaints.date.toDateString() !== today.toDateString())
            return await fetchFromServer(saintsEndpoint);
        else
            return dbDailySaints.info
    }

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

    try {
        return loaded ? (
            <SafeAreaView style={styles.noMeLaContainer}>
                <ScrollView>
                    <FlatList
                        data={dailySaintObj}
                        renderItem={({ item }) => <SaintView _saintObj={item} />}
                        ListHeaderComponent={<SaintView _saintObj={dailySaintObj} />}
                        ListFooterComponent={<View></View>}
                    />
                    <Button title='Para leer mas sobre los santos del dia ingresa aquí'
                        onPress={_ => Linking.openURL(getTodaysVaticanLink())}
                    />
                </ScrollView>
            </SafeAreaView>
        ) :
            (
                <View style={{ alignContent: 'center', alignSelf: 'center' }}>
                    <ActivityIndicator size="large" />
                    <Text> Loaded: {loaded} </Text>
                </View>
            )
    }
    catch (e) {
        console.error(e);
    }
}