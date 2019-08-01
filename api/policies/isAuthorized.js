var Redis = require("ioredis");
var redis = new Redis();
module.exports = function (req, res, next) {
    let token;

  
    if (req.headers.token) {
      token = req.headers.token;
  
      delete req.query.token;
    } else {
      return ResponseService.json(401, res, "No authorization header was found");
    }
    // var a = User.findOne({id: decoded.id})
    // console.log(a)
    // redis.get("Token:" + user.id, function(err, result) {
    //   console.log(result);
    // });
    JwtService.verify(token, function(err, decoded){
      if (err) return ResponseService.json(401, res, "Invalid Token!");
      req.token = token;
      User.findOne({id: decoded.id}).then(function(user){
        req.current_user = user;
        next();
      })
    });
  
  }