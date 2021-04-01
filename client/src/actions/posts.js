import * as api from '../api'

// Actions creators : These are functions that return an action.
// An action has a type and payload (data)

// as these are async hence, we use redux thunk way of making it async

export const getPosts = () => async (dispatch) => {

  try {
    const { data } = await api.fetchPosts() // the fetchPosts will return us the data

    dispatch({ type: "FECTCH_ALL", payload: data })
  } catch (error) {
    console.log(error.message)
  }

  // // defining the action
  // const action = {type: "FETCH_ALL", payload: []}

  // // dispatching the action instead of returning it
  // dispatch(action)
}