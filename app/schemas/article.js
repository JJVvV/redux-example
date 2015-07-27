/**
 * Created by Administrator on 2015/7/1.
 */

var mongoose = require('mongoose');


var ROUNDS = 10;

var ArticleSchema = new mongoose.Schema({
  title:{
    type: String,
    unique: true
  },

  content:String,
  cover: String,
  author: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }

});

ArticleSchema.pre('save', function(next){
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now();
  }else{
    this.meta.updateAt = Date.now();
  }
  next();
});

ArticleSchema.statics = { //模型方法
  fetch: function(cb){
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb);
  },

  findById: function(id, cb){
    var objId = mongoose.Types.ObjectId(id);
    var result = this.findOne({_id: id})
      .exec(cb);
    return result;
  }
}

module.exports = ArticleSchema;