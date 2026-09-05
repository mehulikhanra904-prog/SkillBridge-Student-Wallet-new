import { sha256 } from '@noble/hashes/sha2.js';
import { stringToUint8Array } from 'uint8array-extras';

function hash(data) {
  const bytes = typeof data === "string" ? stringToUint8Array(data) : data;
  return sha256(bytes);
}

export { hash };
//# sourceMappingURL=hashing.js.map
