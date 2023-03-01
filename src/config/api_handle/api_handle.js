import axios from "axios";


const { REACT_APP_BASE_URL } = process.env


export const apiHandle = axios.create({
    baseURL: `${REACT_APP_BASE_URL}`,
})


apiHandle.interceptors.request.use(async req => {
    // ...
    // headers authorization handling goes here
    // ...

    return req


})