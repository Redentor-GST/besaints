export interface Phrase extends Object {
    text: string
    author: string
}

export interface SaintInfo extends Object {
    info: string
    saint: string
}

export interface TimeTrigger extends Object {
    hour: number
    minute: number
}

export interface UserUpdateRequest {
    shouldSendNotifications?: boolean
    timeTrigger?: TimeTrigger
}

export type User = {
    id: string
    shouldSendNotifications: boolean
    timeTrigger: TimeTrigger
}
