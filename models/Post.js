const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');
const popInSchema = require('./PopIn');

const PostSchema = new Schema(
  {
    postText: {
      type: String,
      required: [true, 'A post is required.'],
      length: [1, 280, 'Post must be between 1 and 280 characters.']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => { formatDate(createdAtVal) }
    },
    username: {
      type: String,
      required: true
    },
    popIns: [popInSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
);

PostSchema.virtual('popInCount').get(function () {
  return this.popIns.length;
});

const Post = model('Post', PostSchema);

module.exports = Post;