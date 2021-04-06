import * as api from '../apis'

// Actions creators : These are functions that return an action.
// An action has a type and payload (data)

// as these are async hence, we use redux thunk way of making it async

export const getPosts = () => async (dispatch) => {

  try {
    const { data } = await api.fetchPosts() // the fetchPosts will return us the data

    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (error) {
    console.log(error.message)
  }

  // // defining the action
  // const action = {type: "FETCH_ALL", payload: []}

  // // dispatching the action instead of returning it
  // dispatch(action)
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: "CREATE", payload: data })
  } catch (error) {
    console.log(error.message)
  }

}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    // we will destructure and take in the data and supply it to the component from the API
    const { data } = await api.updatePost(id, post)
    dispatch({ type: "UPDATE", payload: data })
  } catch (error) {
    console.log(error)
  }
}

// to fetch the current Id of the clicked post
export const getCurrentId = (currentId) => {
  return {
    type: "FETCH_ID",
    payload: currentId
  }
}

export const clearCurrentId = () => {
  return {
    type: "CLEAR_ID"
  }
}