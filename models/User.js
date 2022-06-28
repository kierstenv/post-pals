const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: [true, 'Username already in use!'],
    required: [true, 'A username is required.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'A valid email address is required.'],
    unique: [true, 'Email already in use!'],
    match: /.+\@.+\..+/
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
},
{
  toJSON: { virtuals: true, getters: true },
  id: false
});

const User = model('User', UserSchema);

module.exports = User;