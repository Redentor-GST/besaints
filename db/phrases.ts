import { Phrase } from '../utils/interfaces'
import { getDateStr } from '../utils/utils'
import firestore from '@react-native-firebase/firestore'

const fs = firestore()

const phrasesCollection = fs.collection('phrases')

const getDailyPhrase = async (): Promise<Phrase> => {
    const currentDate = getDateStr(new Date(), true)
    const q = phrasesCollection.where('date', '==', currentDate)
    const phraseDocs = await q.get()
    const phrase = phraseDocs.docs[0].data()
    return {
        text: phrase.text,
        author: phrase.author,
    }
}

export default {
    getDailyPhrase,
}
