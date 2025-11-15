import axios from "axios";


export const baseURL = "https://homeservice.infoharry.in";

const api = axios.create({
  baseURL: `${baseURL}/api`, // reuse the baseURL here
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
     // your token key
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export default api;
