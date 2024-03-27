import axios from 'axios'

const API_URL = 'https://908e921ca2b2.ngrok.app'

const getUser = async (deviceId: string) => {
    return axios
        .get(API_URL + '/user/' + deviceId)
        .then(res => res.data)
        .catch(err => console.error(err))
}

const createUser = async (body: CreateUserRequestBody) => {
    return axios
        .post(API_URL + '/user/' + body.device_id, body)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export { getUser, createUser }
