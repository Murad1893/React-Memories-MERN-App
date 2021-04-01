import axios from 'axios'

const url = 'http://localhost:5000/posts' // this will be the api to hit configured at the backend

export const fetchPosts = () => axios.get(url) // we launch a get request to the backend from axios
export const createPost = (newPost) => axios.post(url, newPost);