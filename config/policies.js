module.exports.policies = {

  '*': ['reqStatus','isAuthorized','setLanguage','apiKey'],
  
  'UserController': {
    'create': ['reqStatus','setLanguage','apiKey'],
    'forgot':['setLanguage','apiKey'],

  },

  'AuthController': {
    'login': ['setLanguage', 'apiKey', 'reqStatus'],
  },
  'LogOutController':{
    'logout':['reqStatus','setLanguage', 'apiKey', 'isAuthorized']
  },
  'GetPaymentController':{
    'getMomo':['reqStatus','setLanguage'],
    'getVnpay':['reqStatus','setLanguage'],
    'getAsiapay':['reqStatus','setLanguage']
  }
};