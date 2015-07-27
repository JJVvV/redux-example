/**
 * Created by Administrator on 2015/7/1.
 */

var mongoose = require('mongoose');
var ArticleSchema = require('../schemas/article.js');

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;