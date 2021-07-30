import axios from "axios";
const base_url ="https://api.github.com/search"
const local_base_url = " http://localhost:9000"
const request = axios.create({
    baseURL: base_url,
    responseType:"json"
})

const local_request = axios.create({
    baseURL:local_base_url,
    responseType:"json"
})

export const main = {
    repositories:(lang)=>request.get(`/repositories?q=stars:>3+language:${lang}&sort=stars&order=desc`),
    languages:()=>local_request.get("/languages")
}
