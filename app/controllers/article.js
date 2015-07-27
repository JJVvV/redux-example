/**
 * Created by Administrator on 2015/7/1.
 */

var busboy = require('connect-busboy');
var path = require('path');     //used for file path
var fs = require('fs');
var _  = require('underscore');


var Article = require('../models/article');

exports.articles = function(req, res){

  Article.fetch(function(err, articles){
    if(err){
      console.log(err);
    }
    var rtnArticles = articles.map(function(item, i){
      var article = {};
      var dot = item.content.length > 20 ? '...' : '';
      article.content = item.content.slice(0, 20) + dot;
      article.title = item.title;
      article.cover = item.cover;
      article.id = item._id;
      return article;
    });
    return res.json({
      result: true,
      articles:rtnArticles
    })
  })
}

exports.renderArticles = function(req, res){

  Article.fetch(function(err, articles){
    if(err){
      console.log(err);
    }
    var rtnArticles = articles.map(function(item, i){
      var article = {};
      var dot = item.content.length > 20 ? '...' : '';
      article.content = item.content.slice(0, 20) + dot;
      article.title = item.title;
      article.cover = item.cover;
      article.id = item._id;
      return article;
    });

   res.render('articles')
  })
}

//article
exports.article = function(req, res){
  var id = req.params.id;
  Article.findById(id, function(err, article){
    if(err){
      console.log(err);
    }

    return res.json({
      result: true,
      article:{
        id: article._id,
        title: article.title,
        content: article.content,
        cover: article.cover
      }
    })
  })
}

//saveArticle
exports.saveArticle = function(req, res){

  var id = req.body.id;
  var article = req.body;
  article.cover = req.cover;
  if(id === 'new'){
    delete article.id;
    var saveArticle = new Article(article);
    saveArticle.save(function(err, article){
      if(err){
        console.log(err);
      }
      Article.fetch(function(err, articles){
        if(err) console.log(err);

        res.json({
          result:true,
          //article:{
          //  id:article._id,
          //  title: article.title,
          //  content:article.content,
          //  cover: article.cover
          //}
          articles: articles
        });
      });

    });
  }else{
    Article.findById(id, function(err, ar){
      if(err){
        console.log(err);
      }
      var preCover = ar.cover;
      var _article = _.extend(ar, article);
      if(!article.cover){
        _article.cover = preCover;
      }
      _article.save(function(err, cArticle){
        Article.fetch(function(err, articles){
          if(err){
            console.log(err);
          }
          res.json({
            result: true,
            articles: articles
          });
        });

      });
    });
  }

}

//saveCover
exports.saveCover = function(req, res, next){

  var coverData = req.file;
  var filePath, originalFilename;
  if(coverData){

    filePath = coverData.path;
    originalFilename = coverData.filename;

    fs.readFile(filePath, function(err, data){
      var timestamp = Date.now();
      var type = coverData.originalname.slice(coverData.originalname.lastIndexOf('.') + 1);
      console.log('type', type);
      var cover = timestamp + '.' + type;
      var newPath = path.join(__dirname, '../../public/upload', cover);
      console.log('cover', cover);
      fs.writeFile(newPath, data, function(err){
        req.cover = cover;
        next();
      });
    });
  }else{
    next();
  }

}



