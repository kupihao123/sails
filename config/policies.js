module.exports.policies = {

  '*': ['isAuthorized'],
  '*': ['setLanguage'],
  '*': ['apiKey'],
  
  'UserController': {
    'create': ['setLanguage','apiKey'],
    'forgot':['setLanguage','apiKey'],

  },

  'AuthController': {
    'login': ['setLanguage', 'apiKey'],
  },
  'LogOutController':{
    'logout':['setLanguage', 'apiKey', 'isAuthorized']
  }
};