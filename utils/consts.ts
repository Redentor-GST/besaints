import { TimeTrigger } from './interfaces'
import moment from 'moment'

export const defaultTrigger: TimeTrigger = {
  hour: 8,
  minute: 0,
}

export const daysSince1Jan = () => {
  const now = new Date()
  const firstOfTheYear = new Date(now.getFullYear(), 0, 1)
  return moment().diff(firstOfTheYear, 'days')
}

export const blue = '#024959'
export const lightblue = '#4a868c'
export const crossblue = '#11263B'

//?Maybe db = new Databse() should be here
