'use strict';

var signer = require('./signer.js');

const basicNodeSigner = (keypair, networkPassphrase) => {
  const { signTransaction, signAuthEntry } = new signer.KeypairSigner(
    keypair,
    networkPassphrase
  );
  return { signTransaction, signAuthEntry };
};

exports.basicNodeSigner = basicNodeSigner;
//# sourceMappingURL=basic_node_signer.js.map
