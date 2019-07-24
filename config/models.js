module.exports.models = {

  migrate: 'safe',

  attributes: {
    id: { type: 'number', autoIncrement: true, },
  },

  dataEncryptionKeys: {
    default: 'I+0Mtk8fU17g7fXpiTxWJb6ShzONgS+FUefikAvV2pw='
  },

  cascadeOnDestroy: true
};
