import axios from "axios";

const api = axios.create({
  baseURL: "https://event-master-wheat.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
