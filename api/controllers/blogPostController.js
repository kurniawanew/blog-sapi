'use strict';

var mongoose = require('mongoose'),
    Article = mongoose.model('Article');

exports.getAllArticle = function(req, res) {
    var where = {};
    var author = req.query.author;
    var query = req.query.query;
    if(author !== undefined) {
        where.author = author;
    }
    if(query !== undefined) {
        where.$or = [{title: { $regex: query, $options: 'i'}}, {body: { $regex: query, $options: 'i'}}]
    }
    Article.find(where, {
        "_id": 0,
        "author": 1, 
        "title": 1, 
        "body": 1, 
        "created": 1
    }, function(err, article) {
        if (err)
            res.send(err);
        res.json(article);
    });
};


exports.postANewArticle = function(req, res) {
    var new_article = new Article(req.body);
    new_article.save(function(err, article) {
        if (err)
            res.send(err);
        res.json(article);
    });
};