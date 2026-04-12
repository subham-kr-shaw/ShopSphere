import axios from "axios";

export const API_BASE_URL="http://localhost:5454";

const jwt=localStorage.getItem("jwt");

export const api=axios.create({
    baseurl:API_BASE_URL,
    headers:{
        "authorization":`Bearer ${jwt}`,
        "content-type":"application/json"
    }
})