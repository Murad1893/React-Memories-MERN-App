import axios from 'axios'

const uri = 'http://localhost:5000/posts' // this will be the api to hit configured at the backend

export const fetchPosts = () => axios.get(uri) // we launch a get request to the backend from axios