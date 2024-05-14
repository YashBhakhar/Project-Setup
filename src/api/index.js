import axios from "axios";
import Cookies from "js-cookie";
import { expireTime } from "../utils";
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_ADMIN_API_URL
})
axiosClient.defaults.timeout = 60000

axiosClient.interceptors.response.use(
    function (response) {
        if (response.data?.code === 401) {
            Cookies.remove("userDetails", {
                path: '/',
                expires: expireTime()
            })
        }
        return response;
    }
)

axiosClient.interceptors.request.use(function (config) {
    const auth = Cookies.get('userDetails');
    const token = auth?.token
    config.headers['Authorization'] = token || ""
    return config
});

export default axiosClient