'use strict';
module.exports = function(app) {
  var article = require('../controllers/blogPostController');

  app.route('/articles')
    .get(article.getAllArticle)
    .post(article.postANewArticle);
};