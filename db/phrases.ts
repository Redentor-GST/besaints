import { Phrase } from '../utils/interfaces'
import { getDateStr } from '../utils/utils'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp()
const db = getFirestore()
const phrases = db.collection('phrases')

const getAllPhrases = async (): Promise<Pick<Phrase, 'author' | 'text'>[]> => {
  const dbPhrases = (await phrases
    .select('phrase', 'text')
    .get()) as unknown as Phrase[]
  return dbPhrases.map(phrase => ({
    text: phrase.text,
    author: phrase.author,
  }))
}

const getDailyPhrase = async (): Promise<Pick<Phrase, 'author' | 'text'>> => {
  const phrase = (await phrases
    .select('phrase', 'text')
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
