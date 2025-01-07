import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://10.0.2.2:8000",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.status === 401) {

        }
        console.log("API ERROR: ", error.response || error.message)
        return Promise.reject(error)
    }
)

export default axiosInstance
