module.exports.policies = {

  '*': ['isAuthorized'],
  
  'UserController': {
    'create': true,
    'forgot':true
  },

  'AuthController': {
    'login': true,
  }
};