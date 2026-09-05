'use strict';

var ed = require('@noble/ed25519');
var sha2_js = require('@noble/hashes/sha2.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var ed__namespace = /*#__PURE__*/_interopNamespace(ed);

ed__namespace.hashes.sha512 = sha2_js.sha512;
function generate(secretKey) {
  return ed__namespace.getPublicKey(secretKey);
}
function sign(data, rawSecret) {
  return ed__namespace.sign(data, rawSecret);
}
function verify(data, signature, rawPublicKey) {
  return ed__namespace.verify(signature, data, rawPublicKey, {
    zip215: false
  });
}

exports.generate = generate;
exports.sign = sign;
exports.verify = verify;
//# sourceMappingURL=signing.js.map
