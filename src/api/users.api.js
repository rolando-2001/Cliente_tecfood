import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log('API_URL: ', API_URL)

export const getUsers = () => {
    return axios.get(API_URL);
}
