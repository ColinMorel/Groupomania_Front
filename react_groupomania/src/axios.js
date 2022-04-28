import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:8000/api'})

instance.interceptors.request.use(async config =>{
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    if(token){config.headers.authorization = token.token;}
    return config;
})

export {instance}