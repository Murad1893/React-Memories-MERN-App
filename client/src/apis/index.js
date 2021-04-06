import axios from 'axios'

const url = 'http://localhost:5000/posts' // this will be the api to hit configured at the backend

export const fetchPosts = () => axios.get(url) // we launch a get request to the backend from axios
export const createPost = (newPost) => axios.post(url, newPost);

// we will receive the id as well as the updatePost data
// :5000/posts/1234

// blunder in surrounding axios.patch with {} !!!!!!!
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)