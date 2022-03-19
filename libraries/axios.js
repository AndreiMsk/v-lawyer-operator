import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
})


axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    "Accept": "application/json",
    "Content-Type": "application/json"
}

export default axios
