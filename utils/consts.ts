import { NativeModules, Platform } from 'react-native'
import { DateTrigger } from './interfaces';
import moment from 'moment'

export const defaultHourTrigger = 7;
export const defaultMinuteTrigger = 0;
export const defaultTrigger: DateTrigger = {
    hour: defaultHourTrigger,
    minute: defaultMinuteTrigger
}

export const userDefaultLanguage = () => {
    const lang = Platform.OS === 'ios' ?
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] :
        NativeModules.I18nManager.localeIdentifier
    const langPrefix = lang.slice(0, 2);
    return langPrefix !== 'en' || langPrefix !== 'es' ? 'es' : langPrefix;
}

export const farFuture = new Date(4000, 12, 28, 23, 59, 59);

const domain = 'https://cosmic-anthem-308314.nw.r.appspot.com/';
export const phraseEndpoint = domain + 'phrases';
export const saintsEndpoint = domain + 'saints'

export const daysSince1Jan = () => {
    const now = new Date();
    const firstOfTheYear = new Date(now.getFullYear(), 0, 1);
    return moment().diff(firstOfTheYear, "days");
}

//?Maybe db = new Databse() should be here