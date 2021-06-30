import { NativeModules, Platform } from 'react-native'

export const hourTrigger = 7;
export const minuteTrigger = 0;
export const userDefaultLanguage = (): string => {
    const lang: string = Platform.OS === 'ios' ?
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] :
        NativeModules.I18nManager.localeIdentifier
    const mainLang: string = lang.slice(0, 2)
    return mainLang !== 'en' && mainLang !== 'es' ? 'es' : mainLang;
}

export const farFuture = new Date(4000, 12, 28, 23, 59, 59);

//?Maybe db = new Databse() should be here