// this is done to seperate the routing from the actual logic

const mongoose = require('mongoose');
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

// request will be like 5000/post/id so we can access it from params

const updatePost = async (req, res) => {
  try {
    console.log(req.body)

    const { id } = req.params
    const post = req.body
    if (mongoose.isValidObjectId(id)) { // mongoose function to check whether id valid or not
      const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })
      res.send(updatedPost)
    }
    else {
      res.status(404).send("Invalid id")
    }
  } catch (error) {
    res.send(error.message)
  }

}

/**
 * req.body reads the hson
 * req.params reads from the url
 * 
 */

const deletePost = async (req, res) => {
  try {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
      await PostMessage.findByIdAndRemove(id)

      res.send('Post deleted successfully')
    } else {
      res.status(404).send("Invalid id")
    }
  } catch (error) {
    res.send(error.message)
  }
}

module.exports = { getPosts, createPost, updatePost, deletePost }