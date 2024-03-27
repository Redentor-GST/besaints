import { Share } from 'react-native'

export const sharePhrase = async (phrase: string) => {
    await Share.share({
        message:
            `"${phrase}"` +
            '\nDescubre más frases de santos en la aplicación Be Saints! https://linktr.ee/besaintsapp',
    })
}
