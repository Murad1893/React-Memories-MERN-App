const express = require("express")
const router = express.Router();

const postRouter = require('../controllers/posts')

router.get('/', postRouter.getPosts)
router.post('/', postRouter.createPost)

module.exports = router; // to access the router in other files