import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../actions/posts'

const Form = () => {

  // useState is react hook like this.setState so we use this syntax for the hook instead!
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  })
  const classes = useStyles()
  const dispatch = useDispatch() // helps us to dispatch createPost action
  const post = useSelector((state) => state.editPost != '' ? state.posts.find((p) => p._id == state.editPost) : null)

  // setting post data in case we have a currentId selected
  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])

  // handler for the form submit action
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  }

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" onValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'> {post ? "Editing" : "Creating"} a memory </Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator} // all data from post will be stored in this object and accessed
          // all the fields in the postData will persist and only a single field will change
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;