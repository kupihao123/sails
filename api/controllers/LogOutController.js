module.exports = {
logout: function (req, res, err, user) {
    let attributes = {}
    JwtService.verify(token, function(err, decoded){
      if (err) return ResponseService.json(401, res, sails.__("InvalidToken"));
      if (req.param('platform')){
          attributes.status = "Expired"
        }
        
        Platform.update({
          id : decoded.id,
          platform: req.param('platform')
        },attributes
        )
        .then (users => {
          res.ok(sails.__("LogOutSuccess"));
        })
        .catch(err => res.serverError(err));
    })
        
    }
}