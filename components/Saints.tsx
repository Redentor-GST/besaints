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
} from 'react-native';
import { SaintInfo, SaintInfoWithDate } from "../utils/interfaces";
import Database from "../db/db";
import { fetchFromServer } from "../utils/utils";

const db = new Database();
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

//!NOT AT ALL PROUD OF WHAT I DID HERE, WORKS? YES, MAKES ME WANNA THROW UP? ALSO YES

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

export default function DailySaint() {
    const [dailySaintObj, setdailySaintObj] = useState([emptySaintInfo]);
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        getSaintsInfo()
            .then(res =>
                setdailySaintObj(res.info)
            )
            .finally(() => {
                setloaded(true);
                console.log("Daily Saints Loaded!");
            })
    }, []);

    const getSaintsInfo = async (): Promise<SaintInfoWithDate> => {
        const today = new Date();
        //!Wow! This is pretty 🤮🤮
        const dbDailySaints: SaintInfoWithDate = await db.getDailySaints();
        let res: SaintInfoWithDate;
        console.log("dbdailysaints: ", dbDailySaints);
        if (!dbDailySaints)
            res = await fetchFromServer(saintsEndpoint);

        else if (dbDailySaints.date.toDateString() !== today.toDateString())
            //!DRY
            res = await fetchFromServer(saintsEndpoint)
        else
            res = dbDailySaints;

        return res;
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
        return !loaded ?
            <View style={{ alignContent: 'center', alignSelf: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
            : (
                <SafeAreaView style={styles.noMeLaContainer}>
                    <ScrollView>
                        {/*THIS IS WEIRD AS FUCK */}
                        {/*THIS ISN`T AN ARRAY, BUT WORKS*/}
                        <FlatList
                            data={dailySaintObj}
                            renderItem={({ item }) => <SaintView _saintObj={item} />}
                            ListHeaderComponent={<SaintView _saintObj={dailySaintObj} />}
                            ListFooterComponent={<View></View>}
                        />
                    </ScrollView>
                </SafeAreaView>
            )
    }
    catch (e) {
        console.error(e);
    }
}