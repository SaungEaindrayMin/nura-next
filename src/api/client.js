import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    if (apiKey) {
      config.params = config.params || {};
      config.params.api_key = apiKey;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error?.response?.data?.status_message || error.message;
    console.error("API Error:", message);
    return Promise.reject(error);
  },
);

export default apiClient;
