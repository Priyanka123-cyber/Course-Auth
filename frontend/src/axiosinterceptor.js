import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'http://localhost:3000/course'
})

axiosInstance.interceptors.request.use((config)=>{
    const accessToken=localStorage.getItem("token")
    console.log(accessToken)
    if(accessToken){
        if(config){
            config.headers.token=accessToken;
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})
export default axiosInstance;
