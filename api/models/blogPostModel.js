'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  author: {
    type: String,
    required: 'Kindly enter the name of the Author'
  },
  title: {
    type: String,
    required: 'Kindly enter the title of the article'
  },
  body: {
    type: String,
    required: 'Kindly enter the body of the article'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', ArticleSchema);