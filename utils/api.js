import axios from 'axios'

const instance = axios.create(
    {
        baseURL : "https://api.themoviedb.org/3/movie/now_playing",
    }
)

export default instance