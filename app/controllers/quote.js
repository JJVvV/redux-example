/**
 * Created by Administrator on 2015/7/1.
 */

var jwt = require('jsonwebtoken');
var User = require('../models/user');
var SECRET = require('../constants/jwt_secret');
exports.quote = function(req, res){
  console.log('haaaaaaaaaaaaaaaaaaaaa');
  var bear = req.headers["authorization"];
  console.log(bear);
  var value = bear.split(' ').pop();
  var token = jwt.verify(value, SECRET, function(err, decoded){
    if(err){
      console.log(err);
    }else{
      console.log(decoded);
      User.findOne({name: decoded.name}, function(err, user){
        if(err){
          res.json({
            result: false,
            info:'token 失效'
          });
        }else{
          res.json({
            result: true,
            data:{
              name: user.name
            }
          });
        }
      });
    }
  });

}

