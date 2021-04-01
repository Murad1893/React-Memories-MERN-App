import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux' // this is used to dispatch an action

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import memories from './Images/memories.png'

function App() {
  const classes = useStyles()
  const dispatch = useDispatch() // defining dispatch which is hook!

  // we can dispatch action in the useEffect which is componentDidMount and componentDidUpdate merged
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
