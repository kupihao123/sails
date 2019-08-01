var Redis = require("ioredis");
var redis = new Redis();
var dateFormat = require('dateformat');
const uuidv1 = require('uuid/v1');
module.exports = {

    login: function (req, res) {
      var email = req.param('email');
      var password = req.param('password');
  
      verifyParams(res, email, password)
  
      User.findOne({email: email}).then(function (user) {
        if (!user) {
          return invalidEmailOrPassword(res);
        }
        signInUser(req, res, password, user)
      }).catch(function (err) {
        return invalidEmailOrPassword(res);
      })
    },
    logout: function (req, res, err, user) {
      let attributes = {}
    
          if (req.param('platform')){
            attributes.status = "Expired"
          }
          Platform.update({
            id : req.param('id'),
            platform: req.param('platform')
          },attributes
          )
          .then (users => {
            res.ok('Log out successfully');
          })
          .catch(err => res.serverError(err));
      }
  
  };
  
  
  
  function signInUser(req, res, password, user) {
    User.comparePassword(password, user).then(
      function (valid) {
        if (!valid) {
          return this.invalidEmailOrPassword();
        } else {
          var responseData = {
            user: user,
            token: generateToken(user.id),
            platform: req.param('platform'),
            date: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            status: "Active"
          }
            Platform.create({
              platformId: uuidv1(),
              id: user.id,
              platform : responseData.platform,
              date: responseData.date,
              status: "Active"
            }).then(user => {})
          
          redis.set("Token:" + user.id, token, "EX", 3600*24);
          return ResponseService.json(200, res, "Successfully signed in", responseData)
        }
      }
    ).catch(function (err) {
      console.log(err)
      return ResponseService.json(403, res, "Forbidden")
    })
  };
  
  
  function invalidEmailOrPassword(res){
    return ResponseService.json(401, res, "Invalid email or password")
  };
  
  function verifyParams(res, email, password){
    if (!email || !password) {
      return ResponseService.json(401, res, "Email and password required")
    }
  };
  
  
  function generateToken(user_id) {
    return JwtService.issue({id: user_id})
  };