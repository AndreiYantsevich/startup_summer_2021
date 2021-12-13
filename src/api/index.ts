import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/',
})

export const API = {
    getUser(username: string) {
        return instance.get(`users/${username}`)
    },
    getRepo(username: string) {
        return instance.get(`users/${username}/repos`)
    }
}

