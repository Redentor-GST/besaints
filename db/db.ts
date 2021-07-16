import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultTrigger } from '../utils/consts';
import { DateTrigger, Phrase } from '../utils/interfaces';
import { compareTodayvsDate } from '../utils/utils';
import { getDict } from './yearlyDicts';

export default class Database {

    tables = ["dateTrigger", "shouldSendNotifications", "phrases"]

    storeYearlyPhrases = async (): Promise<void> =>
        await AsyncStorage.setItem("phrases", JSON.stringify(getDict()));

    getShouldSendNotifications = async (): Promise<boolean> => {
        const ssn = await AsyncStorage.getItem('shouldSendNotifications');
        return ssn ? JSON.parse(ssn) : true;
    }

    setShouldSendNotifications = async (value: boolean | number): Promise<void> =>
        await AsyncStorage.setItem("shouldSendNotifications", JSON.stringify(value))

    getDateTrigger = async (): Promise<DateTrigger> => {
        try {
            const datrig = await AsyncStorage.getItem('dateTrigger')
            if (datrig !== null) {
                const split = datrig.split(':');
                return {
                    hour: parseInt(split[0]),
                    minute: parseInt(split[1])
                }
            }
            else return defaultTrigger;
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