import axios from "axios";

// http://54.197.206.72/api/
// http://clement-leclanche.vpnuser.lan:3001/api/
const api = axios.create({
  baseURL: "http://51.75.28.57/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Accept, Content-Type, Authorization",
  },
});

export default api;
