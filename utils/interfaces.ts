export interface Phrase {
    text: string
    author: string
}

export interface SaintInfo {
    info: string
    saint: string
}

export interface TimeTrigger {
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

export type Saint = {
    saint: string
    info: string
}

export type Saints = Record<string, Saint[]>
