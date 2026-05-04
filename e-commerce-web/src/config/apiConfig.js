// import axios from "axios";

// export const API_BASE_URL="https://shopsphere-backend-oe5a.onrender.com";

// const jwt=localStorage.getItem("jwt");

// export const api=axios.create({
//     baseURL:API_BASE_URL,
//     headers:{
//         "authorization":`Bearer ${jwt}`,
//         "content-type":"application/json"
//     }
// })

import axios from "axios";

export const API_BASE_URL="https://shopsphere-backend-oe5a.onrender.com";

export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "content-type":"application/json"  // ✅ removed the hardcoded jwt line
    }
})
