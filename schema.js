const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  content: {
    type: String,
    required: true,
    minlength: 50
  },
  author: {
    type: String
  },
  tags: {
    type: [String]
  },
  category: {
    type: String,
    default: "General"
  },
  likes: {
    type: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;