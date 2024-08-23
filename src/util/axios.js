import axios from "axios";

const Axios = axios.create({
    // baseURL: "http://localhost:8080/api/v1/url",
    baseURL: "https://tinyurl-zgzb.onrender.com/api/v1/url",
})
export default Axios;