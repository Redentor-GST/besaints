import AsyncStorage from '@react-native-async-storage/async-storage'
import { defaultTrigger } from '../utils/consts'
import { Phrase, TimeTrigger } from '../utils/interfaces'
import { compareTodayvsDate, getDateStr } from '../utils/utils'
import { getDict, saints } from './yearlyDicts'

const timeTriggerName = 'timeTrigger'
const ssnName = 'shouldSendNotifications'
const reminderID = 'reminderid'
const tables = [timeTriggerName, ssnName, reminderID]

const shouldSendNotifications = async (): Promise<boolean> => {
    const shouldSendNotifications = await AsyncStorage.getItem(ssnName)
    return shouldSendNotifications ? JSON.parse(shouldSendNotifications) : true
}

const setShouldSendNotifications = async (
    value: boolean | number,
): Promise<void> => await AsyncStorage.setItem(ssnName, JSON.stringify(value))

const getTimeTrigger = async (): Promise<TimeTrigger> => {
    const datrig = await AsyncStorage.getItem(timeTriggerName)
    if (!datrig) return defaultTrigger
    const parsed = JSON.parse(datrig)
    return {
        hour: parseInt(parsed.hour),
        minute: parseInt(parsed.minute),
    }
}

const setTimeTrigger = async (value: TimeTrigger): Promise<void> =>
    await AsyncStorage.setItem(timeTriggerName, JSON.stringify(value))

const getAllPhrases = (): Phrase[] => getDict()

const getDailyPhrase = (): Phrase => {
    const phrases: Phrase[] = getDict()
    for (const phrase of phrases)
        if (compareTodayvsDate(phrase.date)) return phrase
}

const getDailySaints = () => saints[getDateStr(new Date(), true)]

const getReminderNotificationID = async () =>
    await AsyncStorage.getItem(reminderID)

const setReminderNotificationID = async (id: string) =>
    await AsyncStorage.setItem(reminderID, id)

const clear = async (): Promise<void> => await AsyncStorage.multiRemove(tables)

export default {
    shouldSendNotifications,
    setShouldSendNotifications,
    getTimeTrigger,
    setTimeTrigger,
    getAllPhrases,
    getDailyPhrase,
    getDailySaints,
    getReminderNotificationID,
    setReminderNotificationID,
    clear,
}
