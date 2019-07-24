/**
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fullName: {
      type: 'string',
      required: true,
      unique: true
    },
    passWord: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    }
  },

};

