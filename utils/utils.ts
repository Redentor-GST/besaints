import { Share } from 'react-native'

export const timeTriggerAsString = (hours: number, minutes: number) => {
    const h = hours.toString().padStart(2, '0')
    const m = minutes.toString().padStart(2, '0')
    return `${h}:${m}`
}

export const sharePhrase = async (phrase: string) => {
    await Share.share({
        message:
            `"${phrase}"` +
            '\nDescubre más frases de santos en la aplicación Be Saints! https://linktr.ee/besaintsapp',
    })
}
