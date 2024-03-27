type CreateUserRequestBody = {
    device_id: string
    should_send_notifications?: boolean
    time_trigger: number
    expo_push_token: string
}

type SaintInfo = {
    info: string
    saint: string
}

type Saint = {
    saint: string
    info: string
}

type Saints = Record<string, Saint[]>

type Phrase = {
    text: string
    author: string
}

type TimeTrigger = {
    hour: number
    minute: number
}
