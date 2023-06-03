import { Phrase } from '../utils/interfaces'
import { getDateStr } from '../utils/utils'
import firestore from '@react-native-firebase/firestore'

const db = firestore()
const phrases = db.collection('phrases')

const getAllPhrases = async (): Promise<Pick<Phrase, 'author' | 'text'>[]> => {
    const dbPhrases = (await phrases.get()) as unknown as Phrase[]
    return dbPhrases.map(phrase => ({
        text: phrase.text,
        author: phrase.author,
    }))
}

const getDailyPhrase = async (): Promise<Pick<Phrase, 'author' | 'text'>> => {
    const phrase = (await phrases
        .where('date', '==', getDateStr(new Date(), true))
        .get()) as undefined as Phrase
    return {
        text: phrase.text,
        author: phrase.author,
    }
}

export default {
    getAllPhrases,
    getDailyPhrase,
}
