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
import { SaintInfo } from "../utils/interfaces";
import Database from "../db/db";
import { checkDataNotOutdated } from '../utils/utils';
import { saintsEndpoint } from '../utils/consts';

const db = new Database();
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const styles = StyleSheet.create({
    noMeLaContainer: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
        paddingBottom: 15
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
    const [dailySaints, setdailySaints] = useState([]);
    const [isThereAnyInfo, setisThereAnyInfo] = useState(true);

    useEffect(() => {
        const dailySaints = db.getDailySaints()
        dailySaints.length === 0 ? setisThereAnyInfo(false) : setdailySaints(dailySaints)
    }, []);

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

    return isThereAnyInfo ?
        (
            <SafeAreaView style={styles.noMeLaContainer}>
                <FlatList
                    data={dailySaints}
                    renderItem={({ item }) => <SaintView _saintObj={item} />}
                    keyExtractor={(saint) => saint.saint}
                    ListHeaderComponent={<SaintView _saintObj={dailySaints} />}
                    ListFooterComponent={<Button title='Para leer mas sobre los santos del dia ingresa aquí'
                        onPress={_ => Linking.openURL(getTodaysVaticanLink())}
                    />}
                />
            </SafeAreaView>
        ) :
        (
            <SafeAreaView style={styles.noMeLaContainer}>
                <Text style={{ fontSize: 30, textAlign: 'center' }} > No hay nigun santo del dia para esta fecha :( </Text>
            </SafeAreaView>
        )
}