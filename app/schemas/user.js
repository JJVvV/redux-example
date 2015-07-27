/**
 * Created by Administrator on 2015/7/1.
 */

var mongoose = require('mongoose');


var ROUNDS = 10;

var UserSchema = new mongoose.Schema({
  name:{
    type: String,
    unique: true
  },

  password:String,

  token: String


});

UserSchema.methods = {
  comparePassword: function(password, cb){
    cb(null, password == this.password);
  }
}

UserSchema.statics = {
  fetch: function(cb){
    return this.find({})
      .exec(cb);
  },

  findById: function(id, cb){
    var objId = mongoose.Types.ObjectId(id);
    var result = this.findOne({_id: id})
      .exec(cb);
    return result;
  }
}

module.exports = UserSchema;