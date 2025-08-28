import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://insta-nest-server-production.up.railway.app/api",  
  withCredentials: true,  
});

export default axiosInstance;
