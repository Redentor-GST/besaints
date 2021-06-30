import { NativeModules, Platform } from 'react-native'

export const hourTrigger = 7;
export const minuteTrigger = 0;
export const userDefaultLanguage = () =>
    Platform.OS === 'ios' ?
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] :
        NativeModules.I18nManager.localeIdentifier

export const farFuture = new Date(4000, 12, 28, 23, 59, 59);

//?Maybe db = new Databse() should be here