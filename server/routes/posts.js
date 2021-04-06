const express = require("express")
const router = express.Router();

const postRouter = require('../controllers/posts')

router.get('/', postRouter.getPosts)
router.post('/', postRouter.createPost)
router.patch('/:id', postRouter.updatePost) // we will make the id dynamic
router.delete('/:id', postRouter.deletePost)
/**
 * PATCH VS PUT:
 *  For example, when you want to change the first name of a person in a database, you need to send the entire resource when making a PUT request.
 *  To make a PUT request, you need to send the two parameters; the first and the last name.
 * 
 *  Unlike PUT, PATCH applies a partial update to the resource.
 * This means that you are only required to send the data that you want to update, and it won’t affect or change anything else. So if you want to update the first    
 * name on a database, you will only be required to send the first parameter; the first name.
 */

module.exports = router; // to access the router in other files