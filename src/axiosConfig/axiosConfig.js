import axios from "axios";

const axiosApi = axios.create({
    //
    baseURL: "https://dummyjson.com/"
})

axiosApi.interceptors.request.use((req,) => {
    req.headers.Authorization = localStorage.getItem('token') || "brear xyz";
    return req;
})

axiosApi.interceptors.response.use((res) => {
    return res;
})

export default axiosApi;