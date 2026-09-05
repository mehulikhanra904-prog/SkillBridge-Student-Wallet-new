'use strict';

var uint8arrayExtras = require('uint8array-extras');
require('../xdr/index.js');
require('@noble/hashes/sha2.js');
require('../base/signing.js');
var keypair = require('../base/keypair.js');
require('@exodus/bytes/base32.js');
require('../base/util/continued_fraction.js');
require('../base/util/bignumber.js');
require('../base/muxed_account.js');
require('@stellar/js-xdr');
var errors = require('./errors.js');

function gatherTxSigners(transaction, signers) {
  const hashedSignatureBase = transaction.hash();
  const txSignatures = [...transaction.signatures];
  const signersFound = /* @__PURE__ */ new Set();
  for (const signer of signers) {
    if (txSignatures.length === 0) {
      break;
    }
    let keypair$1;
    try {
      keypair$1 = keypair.Keypair.fromPublicKey(signer);
    } catch (err) {
      throw new errors.InvalidChallengeError(
        `Signer is not a valid address: ${err.message}`
      );
    }
    for (let i = 0; i < txSignatures.length; i++) {
      const decSig = txSignatures[i];
      if (!uint8arrayExtras.areUint8ArraysEqual(decSig.hint.toBytes(), keypair$1.signatureHint())) {
        continue;
      }
      if (keypair$1.verify(hashedSignatureBase, decSig.signature.toBytes())) {
        signersFound.add(signer);
        txSignatures.splice(i, 1);
        break;
      }
    }
  }
  return Array.from(signersFound);
}
function verifyTxSignedBy(transaction, accountId) {
  return gatherTxSigners(transaction, [accountId]).length !== 0;
}

exports.gatherTxSigners = gatherTxSigners;
exports.verifyTxSignedBy = verifyTxSignedBy;
//# sourceMappingURL=utils.js.map
