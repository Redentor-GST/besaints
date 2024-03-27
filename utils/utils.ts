import { Share } from 'react-native'

export function getDateStr(date: Date, incrementMonth: boolean) {
    let month: any = incrementMonth ? date.getMonth() + 1 : date.getMonth()
    let day: any = date.getDate()

    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${month}-${day}`
}

export const sharePhrase = async (phrase: string) => {
    await Share.share({
        message:
            `"${phrase}"` +
            '\nDescubre más frases de santos en la aplicación Be Saints! https://linktr.ee/besaintsapp',
    })
}
