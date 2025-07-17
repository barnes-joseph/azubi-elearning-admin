import axios from 'axios';

const baseAPIURL = process.env.NEXT_PUBLIC_API_BASE_URL

export const axiosClient = axios.create({
    baseURL: baseAPIURL
})

export const authAxiosClient = axios.create({
    baseURL: baseAPIURL
})