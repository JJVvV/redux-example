/**
 * Created by Administrator on 2015/7/1.
 */

var jwt = require('jsonwebtoken');
var User = require('../models/user');
var SECRET = require('../constants/jwt_secret');
exports.signup = function(req, res){
  var name = req.body.username;
  var password = req.body.password;

  var _user = {
    name: name,
    password: password
  };
  console.log(_user);
  User.findOne({name: _user.name}, function(err, user){
    console.log('finded');
    if(err){
      console.log(err);
    }
    if(user){
      return res.json({
        result: false,
        info:'用于已存在'
      })
    }else{
      console.log('saving');
      var token = jwt.sign(_user, SECRET);
      _user.token = token;

      var user = new User(_user);
      user.save(function(err, user){
        if(err){
          console.log(err);
        }
        res.json({
          result: true,
          info: '注册成功',
          id_token: user.token
        });
      });
    }
  })
}

exports.signin = function(req, res){
  console.log('********************signin******************');
  var name = req.body.username;
  var password = req.body.password;
  var header = req.headers["authorization"];
  console.log(header);
  var _user = {
    name: name,
    password: password
  };
  console.log(_user);
  User.findOne({'name': name}, function(err, user){
    if(err){
      console.log(err);
    }
    if(!user){
      return res.json({
        result: false,
        info: '用户不粗在'
      });
    }

    user.comparePassword(password, function(err, isMatch){

      if(isMatch){
        return res.json({
          result: true,
          info: '登录成功',
          id_token: user.token
        });
      }else{
        return res.json({
          result: false,
          info: '密码错误'
        });
      }
    });
  })
}