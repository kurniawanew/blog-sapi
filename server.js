var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000
  mongoose = require('mongoose'),
  redis = require("redis"),
  Article = require('./api/models/blogPostModel'), //created model loading here
  bodyParser = require('body-parser')
  keys = require("./config/key");

require("./services/cache");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/blogPostRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('blog post RESTful API server started on: ' + port);
