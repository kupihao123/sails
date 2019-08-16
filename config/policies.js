module.exports.policies = {

  '*': ['isAuthorized'],
  '*': ['setLanguage'],
  '*': ['apiKey'],
  '*': ['reqResStatus'],
  
  'UserController': {
    'create': ['setLanguage','apiKey'],
    'forgot':['setLanguage','apiKey'],

  },

  'AuthController': {
    'login': ['setLanguage', 'apiKey', 'reqResStatus'],
  },
  'LogOutController':{
    'logout':['setLanguage', 'apiKey', 'isAuthorized']
  }
};