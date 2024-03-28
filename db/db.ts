import { getDateStr } from '../utils/utils'
import { saints } from './yearlyDicts'

const getDailySaints = () => saints[getDateStr(new Date(), true)]

export default {
    getDailySaints,
}
