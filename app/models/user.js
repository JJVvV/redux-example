/**
 * Created by Administrator on 2015/7/1.
 */

var mongoose = require('mongoose');
var UserSchema = require('../schemas/user.js');

var User = mongoose.model('User', UserSchema);
module.exports = User;