module.exports = {
   get: function(req,res){
       User.find()
       .exec(function(err,users){
           if(err){
               return res.json(err);
           }
           return res.json(users);
       })
   }
}