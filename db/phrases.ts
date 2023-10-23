import { Phrase } from '../utils/interfaces'
import { getDateStr } from '../utils/utils'
import { db } from '../firebaseConfig'
import { collection, getDocs, where, query } from 'firebase/firestore'

const phrasesCollection = collection(db, 'phrases')

const getDailyPhrase = async () => {
    const currentDate = getDateStr(new Date(), true)
    const q = query(phrasesCollection, where('date', '==', currentDate))
    const phraseDocs = await getDocs(q)
    const phrase = phraseDocs.docs[0].data()
    return {
        text: phrase.text,
        author: phrase.author,
    } as Phrase
}

export { getDailyPhrase }
