import AsyncStorage from '@react-native-async-storage/async-storage';
import { hourTrigger, minuteTrigger } from '../utils/consts';
import { Phrase } from '../utils/interfaces';
import { createDateTrigger, parseTimestrToDate, compareTodayvsDate } from '../utils/utils';
import { yearlyDicts } from './yearlyDicts';

export default class Database {

    tables = ["dateTrigger", "shouldSendNotifications", "phrases"]

    public async init(): Promise<void> {
        const dbPhrases = await AsyncStorage.getItem('phrases');
        if (dbPhrases === null) {
            const today = new Date();
            const yearlyDict = yearlyDicts[today.getFullYear()];
            await AsyncStorage.setItem("phrases", JSON.stringify(yearlyDict));
        }
    }

    getShouldSendNotifications = async (): Promise<boolean> => {
        const ssn = await AsyncStorage.getItem('shouldSendNotifications');
        return ssn ? JSON.parse(ssn) : true;
    }

    setShouldSendNotifications = async (value: boolean | number): Promise<void> =>
        await AsyncStorage.setItem("shouldSendNotifications", JSON.stringify(value))

    getDateTrigger = async (): Promise<Date> => {
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

    setDateTrigger = async (value: Date | string): Promise<void> => {
        await AsyncStorage.setItem("dateTrigger", value.toString())
            .catch(e => console.error(e));
    }

    getUserDefinedLanguage = async (): Promise<string> =>
        await AsyncStorage.getItem("userDefinedLanguage");

    setUserDefinedLanguage = async (value: 'en' | 'es'): Promise<void> =>
        await AsyncStorage.setItem("userDefinedLanguage", value);

    private getAllPhrases = async (): Promise<Phrase[]> =>
        JSON.parse(await AsyncStorage.getItem("phrases"));

    getDailyPhrase = async (): Promise<Phrase> => {
        const phrases = await this.getAllPhrases();
        for (const phrase of phrases)
            if (compareTodayvsDate(phrase.date))
                return phrase;
    }

    clear = async (): Promise<void> =>
        await AsyncStorage.multiRemove(this.tables);
}