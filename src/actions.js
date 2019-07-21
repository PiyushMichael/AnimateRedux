import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export function getArticles(){
    const request = axios.get(`${baseURL}/posts`).then(response => {
        return response.data
    });
    return {
        type: 'GET_ARTICLES',
        payload: request
    };
};