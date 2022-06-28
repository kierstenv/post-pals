const router = require('express').Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addPopIn,
  removePopIn
} = require('../../controllers/post-controller');

// Set up GET all and POST at /api/posts
router
  .route('/')
  .get(getAllPosts)
  .post(createPost);

// Set up GET one, PUT, and DELETE at /api/posts/:id
router
  .route('/:postId')
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

router
  .route('/:postId/pop-ins')
  .post(addPopIn)
  .delete(removePopIn);

module.exports = router;