import axios from 'axios'
export const baseUrl = "https://www.fastmock.site/mock/d561e8a3e79db6ef8c66099546e04efa/qidian"

const axiosInstance = axios.create({
    baseURL: baseUrl
})
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
)
export { axiosInstance }