'use strict';

var uint8arrayExtras = require('uint8array-extras');
var index = require('../../xdr/index.js');
var strkey = require('../strkey.js');
var muxedAccount = require('../../xdr/generated/muxed-account.js');
var muxedAccountMed25519 = require('../../xdr/generated/muxed-account-med25519.js');

function decodeAddressToMuxedAccount(address) {
  if (strkey.StrKey.isValidMed25519PublicKey(address)) {
    return _decodeAddressFullyToMuxedAccount(address);
  }
  return muxedAccount.MuxedAccount.keyTypeEd25519(strkey.StrKey.decodeEd25519PublicKey(address));
}
function encodeMuxedAccountToAddress(muxedAccount) {
  if (muxedAccount.type === "keyTypeMuxedEd25519") {
    return _encodeMuxedAccountFullyToAddress(muxedAccount);
  }
  return strkey.StrKey.encodeEd25519PublicKey(muxedAccount.value.toBytes());
}
function encodeMuxedAccount(address, id) {
  if (!strkey.StrKey.isValidEd25519PublicKey(address)) {
    throw new Error("address should be a Stellar account ID (G...)");
  }
  if (typeof id !== "string") {
    throw new Error("id should be a string representing a number (uint64)");
  }
  return muxedAccount.MuxedAccount.keyTypeMuxedEd25519(
    new muxedAccountMed25519.MuxedAccountMed25519({
      id: index.Uint64.fromString(id),
      ed25519: strkey.StrKey.decodeEd25519PublicKey(address)
    })
  );
}
function extractBaseAddress(address) {
  if (strkey.StrKey.isValidEd25519PublicKey(address)) {
    return address;
  }
  if (!strkey.StrKey.isValidMed25519PublicKey(address)) {
    throw new TypeError(`expected muxed account (M...), got ${address}`);
  }
  const muxedAccount = decodeAddressToMuxedAccount(address);
  if (muxedAccount.type !== "keyTypeMuxedEd25519") {
    throw new TypeError(`expected muxed account (M...), got ${address}`);
  }
  return strkey.StrKey.encodeEd25519PublicKey(muxedAccount.value.ed25519.toBytes());
}
function _decodeAddressFullyToMuxedAccount(address) {
  const rawBytes = strkey.StrKey.decodeMed25519PublicKey(address);
  return muxedAccount.MuxedAccount.keyTypeMuxedEd25519(
    new muxedAccountMed25519.MuxedAccountMed25519({
      id: index.Uint64.fromXdr(rawBytes.subarray(-8)),
      ed25519: rawBytes.subarray(0, -8)
    })
  );
}
function _encodeMuxedAccountFullyToAddress(muxedAccount) {
  if (muxedAccount.type === "keyTypeEd25519") {
    return encodeMuxedAccountToAddress(muxedAccount);
  }
  const muxed = muxedAccount.value;
  return strkey.StrKey.encodeMed25519PublicKey(
    uint8arrayExtras.concatUint8Arrays([
      muxed.ed25519.toBytes(),
      muxedAccountMed25519.MuxedAccountMed25519.schema.encode(muxed.toXdrObject()).subarray(0, 8)
    ])
  );
}

exports.decodeAddressToMuxedAccount = decodeAddressToMuxedAccount;
exports.encodeMuxedAccount = encodeMuxedAccount;
exports.encodeMuxedAccountToAddress = encodeMuxedAccountToAddress;
exports.extractBaseAddress = extractBaseAddress;
//# sourceMappingURL=decode_encode_muxed_account.js.map
