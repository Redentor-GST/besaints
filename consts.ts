import { NativeModules, Platform } from 'react-native'

export const hourTrigger = 7;
export const minuteTrigger = 0;
export const userDefaultLanguage = () =>
    Platform.OS === 'ios' ?
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] :
        NativeModules.I18nManager.localeIdentifier

//?Maybe db = new Databse() should be here