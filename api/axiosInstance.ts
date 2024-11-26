import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("API ERROR: ", error.response || error.message);
        return Promise.reject(error);
    }
)

export default axiosInstance;
