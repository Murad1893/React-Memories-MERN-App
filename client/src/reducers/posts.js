const reducers = (posts = [], action) => { // because we are using it as a default component
  switch (action.type) {

    case 'FETCH_ALL': // to fetch all the posts
      return action.payload // we will just return the payload

    case 'CREATE': // to create all the posts
      return [...posts, action.payload] // now we will send all the posts along with the newly added post

    default:
      return posts

  }

}

export default reducers;