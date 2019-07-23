module.exports.datastores = {
  default: {
    adapter: require('sails-mysql'),
    url: 'mysql://root:123456789@localhost:3306/sails',
  }
};