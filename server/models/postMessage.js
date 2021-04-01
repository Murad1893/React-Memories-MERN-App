const mongoose = require("mongoose")

// defining the Schema for a message
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String], // array of strings
  selectedFile: String,
  likeCount: { // we make it into an object because we need to add additional information
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

// converting schema to model
const PostMessage = mongoose.model('PostMessage', postSchema)

module.exports = PostMessage