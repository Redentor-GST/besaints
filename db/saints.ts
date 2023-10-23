import { getDateStr } from '../utils/utils'
import firestore from '@react-native-firebase/firestore'

import { SaintInfo } from '../utils/interfaces'

const fs = firestore()

const getDailySaints = async (): Promise<SaintInfo[]> => {
    const currentDate = getDateStr(new Date(), true)
    const saintsCollection = fs.collection('saints')
    const dailySaintsQuery = saintsCollection.where('date', '==', currentDate)
    const dailySaintsDocs = await dailySaintsQuery.get()
    const dailySaints = dailySaintsDocs.docs.map(doc => doc.data())
    return dailySaints.map(saint => ({
        saint: saint.saint,
        info: saint.info,
    }))
}

export { getDailySaints }
