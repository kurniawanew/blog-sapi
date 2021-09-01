'use strict';
module.exports = function(app) {
  var article = require('../controllers/blogPostController');

  // todoList Routes
  app.route('/articles')
    .get(article.getAllArticle)
    .post(article.postANewArticle);
};