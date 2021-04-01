// this is done to seperate the routing from the actual logic

const PostMessage = require('../models/postMessage')

const getPosts = async (req, res) => {
  // retrieving all the post in the database
  try {
    const postMessages = await PostMessage.find();

    // now we send all the messages as json
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createPost = (req, res) => {
  res.send('Post Creation')
}

module.exports = getPosts, createPost