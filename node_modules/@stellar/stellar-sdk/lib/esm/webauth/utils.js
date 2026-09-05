import { areUint8ArraysEqual } from 'uint8array-extras';
import '../xdr/index.js';
import '@noble/hashes/sha2.js';
import '../base/signing.js';
import { Keypair } from '../base/keypair.js';
import '@exodus/bytes/base32.js';
import '../base/util/continued_fraction.js';
import '../base/util/bignumber.js';
import '../base/muxed_account.js';
import '@stellar/js-xdr';
import { InvalidChallengeError } from './errors.js';

function gatherTxSigners(transaction, signers) {
  const hashedSignatureBase = transaction.hash();
  const txSignatures = [...transaction.signatures];
  const signersFound = /* @__PURE__ */ new Set();
  for (const signer of signers) {
    if (txSignatures.length === 0) {
      break;
    }
    let keypair;
    try {
      keypair = Keypair.fromPublicKey(signer);
    } catch (err) {
      throw new InvalidChallengeError(
        `Signer is not a valid address: ${err.message}`
      );
    }
    for (let i = 0; i < txSignatures.length; i++) {
      const decSig = txSignatures[i];
      if (!areUint8ArraysEqual(decSig.hint.toBytes(), keypair.signatureHint())) {
        continue;
      }
      if (keypair.verify(hashedSignatureBase, decSig.signature.toBytes())) {
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

export { gatherTxSigners, verifyTxSignedBy };
//# sourceMappingURL=utils.js.map
