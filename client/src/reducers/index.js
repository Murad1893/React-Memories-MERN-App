import { combineReducers } from 'redux'

import posts from './posts'
import editPost from './editPost'

// normally the key : value are same so instead of posts: posts we can write like this 
export default combineReducers({ posts, editPost })