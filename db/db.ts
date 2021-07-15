import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultTrigger } from '../utils/consts';
import { DateTrigger, Phrase } from '../utils/interfaces';
import { compareTodayvsDate } from '../utils/utils';
import { yearlyDicts } from './yearlyDicts';

export default class Database {

    tables = ["dateTrigger", "shouldSendNotifications", "phrases"]

    storeYearlyPhrases = async (): Promise<void> => {
        const today = new Date();
        const yearlyDict = yearlyDicts[today.getFullYear()];
        await AsyncStorage.setItem("phrases", JSON.stringify(yearlyDict));
    }

    getShouldSendNotifications = async (): Promise<boolean> => {
        const ssn = await AsyncStorage.getItem('shouldSendNotifications');
        return ssn ? JSON.parse(ssn) : true;
    }

    setShouldSendNotifications = async (value: boolean | number): Promise<void> =>
        await AsyncStorage.setItem("shouldSendNotifications", JSON.stringify(value))

    getDateTrigger = async (): Promise<DateTrigger> => {
        try {
            const datrig = await AsyncStorage.getItem('dateTrigger')
            return datrig != null ? JSON.parse(datrig) : defaultTrigger;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }

    setDateTrigger = async (value: DateTrigger): Promise<void> => {
        await AsyncStorage.setItem("dateTrigger", JSON.stringify(value))
            .catch(e => console.error(e));
    }

    getUserDefinedLanguage = async (): Promise<string> =>
        await AsyncStorage.getItem("userDefinedLanguage");

    setUserDefinedLanguage = async (value: 'en' | 'es'): Promise<void> =>
        await AsyncStorage.setItem("userDefinedLanguage", value);

    getAllPhrases = async (): Promise<Phrase[]> =>
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