var jwt = require('jsonwebtoken');
var jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {
  
  createToken: function (payload) {
    token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'})
    return token
  },

  verify: function (token, callback) {
    return jwt.verify(token, jwtSecret, callback);
  }
}
