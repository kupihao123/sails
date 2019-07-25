module.exports.policies = {

  '*': ['isAuthorized'],
  
  'UserController': {
    'create': true
  },

  'AuthController': {
    '*': true
  }
};