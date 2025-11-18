import axios from 'axios';
import { BASE_URL } from './apiPaths.js';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = '/';
        }
        else if (error.response?.status === 500) {
            console.error('Server Error')
        }
        else if (error.code === 'ECONNABORTED') {
            console.error('Request timed out')
        }
         
        return Promise.reject(error);
    }
);

export default axiosInstance;