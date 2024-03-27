type CreateUserRequestBody = {
    device_id: string
    should_send_notifications?: boolean
    time_trigger: number
    expo_push_token: string
}
