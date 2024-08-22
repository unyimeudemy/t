import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8080/api/v1/url",
    // baseURL: "https://solidid-backend.onrender.com/api/v1",
    // baseURL: "https://ec2-52-55-177-190.compute-1.amazonaws.com:8080/api/v1",
})



export default Axios;


