import axios from 'axios'

const API_URL = 'https://908e921ca2b2.ngrok.app'

const getTodayPhrase = async () => {
    return axios
        .get(API_URL + '/phrase/')
        .then(res => res.data)
        .catch(err => console.error(err))
}

export { getTodayPhrase }
