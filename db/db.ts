import AsyncStorage from '@react-native-async-storage/async-storage';
import { hourTrigger, minuteTrigger } from '../utils/consts';
import { dbSaintInfo, Phrase, SaintInfo } from '../utils/interfaces';
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
            const parsed = JSON.parse(dailyPhrase)
            if (typeof (parsed.date) === 'string') {
                const res: Phrase = {
                    author: parsed.author,
                    text: parsed.text,
                    date: new Date(Date.parse(parsed.date))
                }
                return res;
            }
            return parsed;
        }
        else
            return null
    }

    setDailyPhrase = async (value: Phrase) => {
        const stringified = JSON.stringify(value);
        await this.removeDailyPhrase();
        await AsyncStorage.setItem("DailyPhrase", stringified);
    }

    getDailySaints = async (): Promise<dbSaintInfo> => {
        const dailySaints = await AsyncStorage.getItem("DailySaints");
        if (dailySaints) {
            const parsed: dbSaintInfo = JSON.parse(dailySaints);
            return typeof (parsed.date) === 'string' ?
                {
                    saints_data: parsed.saints_data,
                    date: new Date(Date.parse(parsed.date))
                }
                : {
                    saints_data: parsed.saints_data,
                    date: parsed.date
                };
        }
        else return null;
    }

    setDailySaints = async (value: [SaintInfo]) => {
        const stringified = JSON.stringify(value);
        //? Is this necessary?
        await this.removeDailySaints();
        await AsyncStorage.setItem("DailySaints", stringified);
    }

    clear = async () =>
        await AsyncStorage.multiRemove(this.tables);

    removeDailyPhrase = async () =>
        await AsyncStorage.removeItem('DailyPhrase');

    removeDailySaints = async () =>
        await AsyncStorage.removeItem('DailySaints');
}