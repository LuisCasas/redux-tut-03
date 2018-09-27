import axios from 'axios';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=284951';
const URL = `${ROOT_URL}/posts${API_KEY}`;

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts(){
    const request = axios.get(URL);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}