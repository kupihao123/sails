var Redis = require("ioredis");
var redis = new Redis();
var dateFormat = require('dateformat');
const uuidv1 = require('uuid/v1');

module.exports = {
  login: function (req, res) {
    var platform = req.param('platform');
    var email = req.param('email');
    var password = req.param('password');

    verifyParams(res, email, password)

    User.findOne({email: email}).then(function (user) {
      if (!user) {
        return invalidEmailOrPassword(res);
      }
    
      signInUser(req, res, password, user, platform)
      
    }).catch(function (err) {
      // console.log('err login: ',err)
      return invalidEmailOrPassword(res);
    })
  },
  
};


function signInUser(req, res, password, user, platform) {
  User.comparePassword(password, user).then(
    function (valid) {
      if (!valid) {
        return this.invalidEmailOrPassword();
      } else {
        expire= 60*60*24
        
        
        var gToken=generateToken(user.id)
        
        redis.set('User:'+user.id,gToken,'EX',expire)
        now= new Date()
        now.setDate(now.getDate()+3)
        Token.create({
          id: gToken,
          expiredDate: now,
          status: 1
        }).then(Token => {
          now1= new Date()
          
          var responseData = {
            user: user,
            token: gToken,
            platform: platform,
            date: now1
          }
          Platform.create({
            platformId: uuidv1(),
            id: user.id,
            platform : responseData.platform,
            date: responseData.date,
            status: "Active"
          }).then(user => {})
          return ResponseService.json(200, res, "Successfully signed in", responseData)
        }).catch(error => {
          console.log('err login: ',error)
          
          if (error.invalidAttributes){
          
            return ResponseService.json(400, res, "Token could not import", error.Errors)
          }
        }
      )
      
        
      }
    }
  ).catch(function (err) {
    console.log('err: ',err)
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
  return JwtService.createToken({id: user_id})

};