import axios from "axios"
const baseUrl = "http://localhost:5000/"

export default axios.create({
    baseURL : baseUrl,
})