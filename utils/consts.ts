import { NativeModules, Platform } from 'react-native'
import { TimeTrigger } from './interfaces';
import moment from 'moment'

export const defaultTrigger: TimeTrigger = {
    hour: 8,
    minute: 0
}

export const userDefaultLanguage = () => {
    const lang = Platform.OS === 'ios' ?
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] :
        NativeModules.I18nManager.localeIdentifier
    const langPrefix = lang.slice(0, 2);
    return langPrefix !== 'en' || langPrefix !== 'es' ? 'es' : langPrefix;
}

export const daysSince1Jan = () => {
    const now = new Date();
    const firstOfTheYear = new Date(now.getFullYear(), 0, 1);
    return moment().diff(firstOfTheYear, "days");
}

//?Maybe db = new Databse() should be here