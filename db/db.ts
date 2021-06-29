import AsyncStorage from '@react-native-async-storage/async-storage';
import { hourTrigger, minuteTrigger } from '../consts';
import { createDateTrigger, parseTimestrToDate } from '../utils/utils';

export default class Database {
    getShouldSendNotifications = async () => {
        let ssn = await AsyncStorage.getItem('shouldSendNotifications');
        if (ssn) {
            ssn = JSON.parse(ssn);
            return ssn;
        }
        else return true;
    }

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

    setShouldSendNotifications = async (value: boolean | number) => {
        await AsyncStorage.setItem("shouldSendNotifications", JSON.stringify(value))
        console.log("Setting shouldsend to: ", value);
    }

    setDateTrigger = async (value: Date | string) => {
        await AsyncStorage.setItem("dateTrigger", value.toString())
            .catch(e => console.error(e));
        console.log("Setting date trigger: ", value.toString());
    }

    clear = async () =>
        await AsyncStorage.multiRemove(["dateTrigger", "shouldSendNotifications"]);

    getUserDefinedLanguage = async () =>
        await AsyncStorage.getItem("userDefinedLanguage");

    setUserDefinedLanguage = async (value: 'en' | 'es') =>
        await AsyncStorage.setItem("userDefinedLanguage", value);
}