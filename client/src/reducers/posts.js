const reducers = (state = [], action) => { // because we are using it as a default component
  switch (action.type) {

    case 'FETCH_ALL': // to fetch all the posts
      return action.payload // we will just return the payload

    case 'CREATE': // to create all the posts
      return state

    default:
      return state

  }

}

export default reducers;