// this is done to seperate the routing from the actual logic

const PostMessage = require('../models/postMessage')

const getPosts = async (req, res) => {
  // retrieving all the post in the database
  try {
    // finding the data will take time hence, we need wait for it 
    const postMessages = await PostMessage.find();

    // now we send all the messages as json
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createPost = async (req, res) => {

  // with post request we have access to request body
  const post = req.body;
  // we will now create a new post from the fields in req.body
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost)
  } catch (error) {
    res.status(404)
    console.log(error.message)
  }

}

module.exports = { getPosts, createPost }