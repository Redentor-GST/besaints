export interface Phrase extends Object {
  text: string
  author: string
  date: string
}

export interface SaintInfo extends Object {
  info: string
  saint: string
}

export interface TimeTrigger extends Object {
  hour: number
  minute: number
}
