import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux' // this will allow us to fetch data from the global redux store 

const Posts = () => {

  // this posts is the same name as in the combinedReducers
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log(posts)

  return (
    <>
      <h1> POSTS </h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts;