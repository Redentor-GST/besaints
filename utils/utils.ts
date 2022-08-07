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

function parseStrDate(date: string): [number, number] {
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
  var month = incrementMonth ? date.getMonth() + 1 : date.getMonth()
  var month_str = month.toString()
  var dt = date.getDate()
  var dt_str = dt.toString()

  if (dt < 10) {
    dt_str = '0' + dt_str
  }
  if (month < 10) {
    month_str = '0' + month_str
  }

  return `${month_str}-${dt_str}`
}

export const isLeapYear = () => {
  const now = new Date()
  const year = now.getFullYear()
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}
