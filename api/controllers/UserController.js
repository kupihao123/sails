var _ = require('lodash');
var Redis = require("ioredis");
var redis = new Redis();
const uuidv1 = require('uuid/v1');
module.exports = {
 
  get: function(req, res) {
    User.find().exec(function(err, users) {
      if (err) {
        return res.json(err);
      }
      return res.json(users);
    });
  },
  create: function(req,res){
    User.create({
      id: uuidv1(),
      fullName : req.param('fullName'),
      password : req.param('password'),
      email : req.param('email'),
    }).then(user => {
      var responseData = {
        user: user,
        // token: JwtService.issue({id: user.id})
      }
      console.log(req.getLocale())
      var z=sails.__("CreateUserSuccess")
      return ResponseService.json(200, res, z, responseData)
    }).catch(error => {
      console.error(error);
        if (error.invalidAttributes){
          return ResponseService.json(400, res, "User could not be created", error.Errors)
        }
      }
    )
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
  },
};