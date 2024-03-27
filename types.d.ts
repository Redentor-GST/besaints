type CreateUserRequestBody = {
    device_id: string
    should_send_notifications?: boolean
    time_trigger?: number
    expo_push_token: string
}

type UpdateUserRequestBody = {
    should_send_notifications?: boolean
    time_trigger?: number
    expo_push_token?: string
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

type User = {
    device_id: string
    should_send_notifications: boolean
    time_trigger: number
    expo_push_token: string
}

type GlobalContextProps = {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}
