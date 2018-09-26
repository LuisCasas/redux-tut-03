import axios from 'axios';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=NES';

export const FETCH_POST = 'fetch_post';

export function fetchPost(){
    const request = axios.get(`${ROOT_URL}/post${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}