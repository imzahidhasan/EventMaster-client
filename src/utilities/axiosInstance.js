import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// // Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Get token from localStorage or cookies
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle specific error codes globally
//     if (error.response) {
//       if (error.response.status === 401) {
//         // Token expired or unauthorized
//         console.warn("Unauthorized, logging out...");
//         // Optionally redirect to login or clear token
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
