const { Post, User } = require("../models");

const postController = {
  getAllPosts(req, res) {
    Post.find({})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.status(400).json(err));
  },

  getPostById({ params }, res) {
    Post.findOne({ _id: params.postId })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.status(400).json(err));
  },

  createPost({ body }, res) {
    Post.create(body)
    .then(({ _id }) => {
      return User.findOneAndUpdate({ _id: body.userId }, { $push: { posts: _id } }, { new: true });
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
  },

  updatePost({ params, body }, res) {
    Post.findOneAndUpdate({ _id: params.postId }, body, { new: true })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.status(400).json(err));
  },

  deletePost({ params }, res) {
    Post.findOneAndDelete({ _id: params.postId })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.status(400).json(err));
  },

  // ADD a pop in (reaction) to a post
  addPopIn({ params, body }, res) {
    Post.findOneAndUpdate({ _id: params.postId }, { $push: { popIns: body } }, { new: true })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.status(400).json(err));
  },

  removePopIn({ params }, res) {
    Post.findOneAndUpdate({ _id: params.postId }, { $pull: { popIns: { popInId: params.popInId } } }, { new: true })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.status(400).json(err));
  }
}; 

module.exports = postController;