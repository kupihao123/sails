module.exports = {
  get: function(req, res) {
    User.find()
      .then(users => res.ok(users))
      .catch(err => res.serverError(err))  
  },
  create: function(req,res){
    User.create({
      fullName : req.param('fullName'),
      password : req.param('password'),
      email : req.param('email')
    })
    .then (users => {
      return res.ok(users)
    })
    .catch(err => res.serverError(err));
  },
  delete: function(req,res){
    User.destroy({
      id : req.param('id'),
    })
    .then (users => {
      return res.ok('Delete User successfully')
    })
    .catch(err => res.serverError(err));
  },
  update: function(req,res){
    
    let attributes = {}

    if (req.param('fullName')){
      attributes.fullName = req.param('fullName')
    }

    if (req.param('password')){
      attributes.password = req.param('password')
    }

    if (req.param('email')){
      attributes.email = req.param('email')
    }
    User.update({
      id : req.params.id
    },attributes
    )
    .then (users => {
      res.ok('Update successfully');
    })
    .catch(err => res.serverError(err));
  }
};