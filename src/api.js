import axios from "axios";

const api = axios.create({
    baseURL
    params: {
        api_key: "",
        language: ""
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),

}

export const tvApi= {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),

}
export default api;