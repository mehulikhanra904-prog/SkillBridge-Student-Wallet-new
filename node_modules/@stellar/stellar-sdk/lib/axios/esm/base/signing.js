import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha2.js';

ed.hashes.sha512 = sha512;
function generate(secretKey) {
  return ed.getPublicKey(secretKey);
}
function sign(data, rawSecret) {
  return ed.sign(data, rawSecret);
}
function verify(data, signature, rawPublicKey) {
  return ed.verify(signature, data, rawPublicKey, {
    zip215: false
  });
}

export { generate, sign, verify };
//# sourceMappingURL=signing.js.map
