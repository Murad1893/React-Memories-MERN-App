const reducers = (editPost = '', action) => { // because we are using it as a default component
  switch (action.type) {

    case 'FETCH_ID': // to fetch all the posts
      return action.payload // we will just return the payload

    case 'CLEAR_ID': // to fetch all the posts
      return '' // we will just return the payload

    default:
      return editPost

  }

}

export default reducers;