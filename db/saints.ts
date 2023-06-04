import { getDateStr } from '../utils/utils'
import { db } from '../firebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { SaintInfo } from '../utils/interfaces'

const getDailySaints = async (): Promise<SaintInfo[]> => {
    const currentDate = getDateStr(new Date(), true)
    const saintsCollection = collection(db, 'saints')
    const dailySaintsQuery = query(
        saintsCollection,
        where('date', '==', currentDate)
    )
    const dailySaintsDocs = await getDocs(dailySaintsQuery)
    const dailySaints = dailySaintsDocs.docs.map(doc => doc.data())
    return dailySaints.map(saint => ({
        saint: saint.saint,
        info: saint.info,
    }))
}

export { getDailySaints }
