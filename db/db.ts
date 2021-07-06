import AsyncStorage from '@react-native-async-storage/async-storage';
import { hourTrigger, minuteTrigger } from '../utils/consts';
import { Phrase, SaintInfo } from '../utils/interfaces';
import { createDateTrigger, parseTimestrToDate } from '../utils/utils';

export default class Database {

    tables = ["dateTrigger", "shouldSendNotifications", "DailyPhrase", "DailySaints"]

    getShouldSendNotifications = async () => {
        const ssn = await AsyncStorage.getItem('shouldSendNotifications');
        return ssn ? JSON.parse(ssn) : true;
    }

    setShouldSendNotifications = async (value: boolean | number) =>
        await AsyncStorage.setItem("shouldSendNotifications", JSON.stringify(value))

    getDateTrigger = async () => {
        try {
            const datrig = await AsyncStorage.getItem('dateTrigger')
            if (datrig != null) {
                const fstparse = parseTimestrToDate(datrig);
                if (fstparse === null) console.error("Error parsing the date at getDateTrigger");
                const datetrig = createDateTrigger(fstparse.getHours(), fstparse.getMinutes());
                return datetrig;
            }
            else
                return createDateTrigger(hourTrigger, minuteTrigger);
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }

    setDateTrigger = async (value: Date | string) => {
        await AsyncStorage.setItem("dateTrigger", value.toString())
            .catch(e => console.error(e));
    }

    getUserDefinedLanguage = async () =>
        await AsyncStorage.getItem("userDefinedLanguage");

    setUserDefinedLanguage = async (value: 'en' | 'es') =>
        await AsyncStorage.setItem("userDefinedLanguage", value);

    getDailyPhrase = async (): Promise<Phrase> => {
        const dailyPhrase = await AsyncStorage.getItem("DailyPhrase");
        if (dailyPhrase) {
            const parsed = JSON.parse(dailyPhrase);
            parsed.date = new Date(Date.parse(parsed.date));
            console.log("getDailyPhrase returned: ", parsed);
            return parsed;
        }
        else return null;
    }

    setDailyPhrase = async (value: Phrase) => {
        const stringified = JSON.stringify(value);
        console.log("setDailyPhrase is storing: ", stringified);
        await AsyncStorage.setItem("DailyPhrase", stringified);
    }

    getDailySaints = async (): Promise<[SaintInfo]> => {
        const dailySaints = await AsyncStorage.getItem("DailySaints");
        if (dailySaints) {
            const parsed = JSON.parse(dailySaints);
            const res = typeof (parsed.date) === 'string' ? {
                info: parsed.info,
                saint: parsed.saint,
                date: new Date(Date.parse(parsed.date))
            } : parsed;
            console.log("getDailySaints returned: ", res);
        }
        else return null;
    }

    setDailySaints = async (value: [SaintInfo]) => {
        const stringified = JSON.stringify(value);
        console.log("setDailySaints is storing: ", stringified);
        await AsyncStorage.setItem("DailySaints", stringified);
    }

    clear = async () =>
        await AsyncStorage.multiRemove(this.tables);

    removeDailyPhrase = async () =>
        await AsyncStorage.removeItem('DailyPhrase');

    removeDailySaints = async () =>
        await AsyncStorage.removeItem('DailySaints');
}