import axios from 'axios';

export const eeApi = () => axios.create({
    baseURL: 'localhost:5000/api'
});

export const eeApiWithAuth = () => {
    const token = localStorage.getItem('ee_login_token');

    return axios.create({
        baseURL: 'localhost:5000/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
};