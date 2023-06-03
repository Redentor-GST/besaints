import saints from '../db/saints.json'
import { getDateStr } from '../utils/utils'

const getDailySaints = () => saints[getDateStr(new Date(), true)]

export default {
    getDailySaints,
}
