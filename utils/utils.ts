import { Share } from 'react-native'
import { Phrase } from './interfaces'

export function createDateTrigger(
  date: string,
  hourTrigger: number,
  minuteTrigger: number
): Date {
  const parsed = parseStrDate(date)
  const month = parsed[0]
  const day = parsed[1]
  const rn = new Date()
  const dateTrigger = new Date(rn.getFullYear(), month - 1, day)
  dateTrigger.setHours(hourTrigger, minuteTrigger, 0)
  return dateTrigger
}

export function parseStrDate(date: string): [number, number] {
  //Expected string "07-15"
  const split = date.split('-')
  const month = parseInt(split[0])
  const day = parseInt(split[1])
  return [month, day]
}

export function compareTodayvsDate(date: string) {
  const now = new Date()
  return getDateStr(now, true) === date
}

export function getDateStr(date: Date, incrementMonth: boolean) {
  let month: any = incrementMonth ? date.getMonth() + 1 : date.getMonth()
  let day: any = date.getDate()

  if (day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`

  return `${month}-${day}`
}

export const isLeapYear = () => {
  const now = new Date()
  const year = now.getFullYear()
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

export const sharePhrase = async (phrase: string) => {
  await Share.share({
    message:
      `"${phrase} "` +
      '\nDescubre mas frases de santos en la aplicación Be Saints https://linktr.ee/besaintsapp',
  })
}
