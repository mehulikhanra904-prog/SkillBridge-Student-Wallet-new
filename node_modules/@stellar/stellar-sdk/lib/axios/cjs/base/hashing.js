'use strict';

var sha2_js = require('@noble/hashes/sha2.js');
var uint8arrayExtras = require('uint8array-extras');

function hash(data) {
  const bytes = typeof data === "string" ? uint8arrayExtras.stringToUint8Array(data) : data;
  return sha2_js.sha256(bytes);
}

exports.hash = hash;
//# sourceMappingURL=hashing.js.map
