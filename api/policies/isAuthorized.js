module.exports = function (req, res, next) {
  let token;
  if(req.headers.authorization){
    
    token = req.headers.authorization
  } else {
    return ResponseService.json(401, res, "No authorization header was found");
  }

  JwtService.verify(token, function(err, decoded){
    if (err) return ResponseService.json(401, res, sails.__("InvalidToken"));
    req.token = token;
    expire= 60*60*24
    
    var a= new Date()
    var b=0
    Token.findOne({id: token}).then(function(token){
       a=token.expiredDate
       b= token.status
       if (b==0) {
         return ResponseService.json(401, res, "Token expired!");
         
       }
       a.setDate(a.getDate()+3) 
       return Token.update({id: token.id}).set({
          expiredDate: a
        })
      }).then (function(){
         if (b==1)
         {
            redis.set('User:'+decoded.id,token,'EX',expire)
         }
         next();
    }).catch(err => res.serverError(err));
    
  });

}