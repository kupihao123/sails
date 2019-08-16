var dateFormat = require('dateformat');
module.exports = function (req, res, next) {
    now = (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"));
    if (req) {
      let a = req.allParams()
      console.log(now + req.url + " " + "[Request] Data: get" + Object.keys(a))
      url=req.url
       next();
    }
  }