/**
 * Created by Administrator on 2015/7/2.
 */

var multer = require('multer');
var upload = multer({dest:'./public/upload/'});

var _ = require('underscore');

var User = require('../app/controllers/user');
var Quote = require('../app/controllers/quote');
var Article = require('../app/controllers/article');
//var jwt = require('jsonwebtoken');
//var SECRET = require('../constants/jwt_secret');

function getToken(req, res, next){
  var bear = req.headers["authorization"];
  if(typeof bear !== 'undefined'){
    var value = bear.split(' ').pop();
    req.token = jwt.verify(value, SECRET);
    next();
  }else{
    res.send(403)
  }


}

module.exports = function(app){
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    //res.header("Content-Type", "application/json;charset=utf-8");
    console.log('set header');

    next();
  });
  //app.use(getToken);
  app.post('/admin/login', User.signin);
  app.post('/admin/signup', User.signup);

  app.get('/admin/login', User.signin);
  app.get('/admin/signup', User.signup);

  //quote
  app.get('/quote', Quote.quote);

  //article
  app.get('/api/articles', Article.articles);
  app.get('/api/article/:id', Article.article);
  app.post('/admin/article',upload.single('cover'), Article.saveCover, Article.saveArticle);
  //app.get('articles', Article.renderArticles);
  app.get('/', Article.renderArticles);
}