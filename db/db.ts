//Database getters and setters
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultTrigger } from '../utils/consts';
import { Phrase, TimeTrigger } from '../utils/interfaces';
import { compareTodayvsDate, getDateStr } from '../utils/utils';
import { getDict, saints } from './yearlyDicts';

export default class Database {
  timeTriggerName = 'timeTrigger';
  ssnName = 'shouldSendNotifications';
  reminderID = 'reminderid';
  tables = [this.timeTriggerName, this.ssnName, this.reminderID];

  getShouldSendNotifications = async (): Promise<boolean> => {
    const ssn = await AsyncStorage.getItem(this.ssnName);
    return ssn ? JSON.parse(ssn) : true;
  };

  setShouldSendNotifications = async (value: boolean | number): Promise<void> =>
    await AsyncStorage.setItem(this.ssnName, JSON.stringify(value));

  getTimeTrigger = async (): Promise<TimeTrigger> => {
    const datrig = await AsyncStorage.getItem(this.timeTriggerName);
    if (!datrig) return defaultTrigger;
    const parsed = JSON.parse(datrig);
    return {
      hour: parseInt(parsed.hour),
      minute: parseInt(parsed.minute),
    };
  };

  setTimeTrigger = async (value: TimeTrigger): Promise<void> =>
    await AsyncStorage.setItem(this.timeTriggerName, JSON.stringify(value));

  /*
    getUserDefinedLanguage = async (): Promise<string> =>
        await AsyncStorage.getItem();

    setUserDefinedLanguage = async (value: 'en' | 'es'): Promise<void> =>
        await AsyncStorage.setItem("userDefinedLanguage", value);
    */

  getAllPhrases = (): Phrase[] => getDict();

  getDailyPhrase = (): Phrase => {
    const phrases: Phrase[] = getDict();
    for (const phrase of phrases)
      if (compareTodayvsDate(phrase.date)) return phrase;
  };

  getDailySaints = () => saints[getDateStr(new Date(), true)];

  getReminderNotificationID = async () =>
    await AsyncStorage.getItem(this.reminderID);

  setReminderNotificationID = async (id: string) =>
    await AsyncStorage.setItem(this.reminderID, id);

  clear = async (): Promise<void> =>
    await AsyncStorage.multiRemove(this.tables);
}
