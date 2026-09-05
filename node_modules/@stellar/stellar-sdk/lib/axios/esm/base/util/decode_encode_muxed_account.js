import { concatUint8Arrays } from 'uint8array-extras';
import { Uint64 } from '../../xdr/index.js';
import { StrKey } from '../strkey.js';
import { MuxedAccount } from '../../xdr/generated/muxed-account.js';
import { MuxedAccountMed25519 } from '../../xdr/generated/muxed-account-med25519.js';

function decodeAddressToMuxedAccount(address) {
  if (StrKey.isValidMed25519PublicKey(address)) {
    return _decodeAddressFullyToMuxedAccount(address);
  }
  return MuxedAccount.keyTypeEd25519(StrKey.decodeEd25519PublicKey(address));
}
function encodeMuxedAccountToAddress(muxedAccount) {
  if (muxedAccount.type === "keyTypeMuxedEd25519") {
    return _encodeMuxedAccountFullyToAddress(muxedAccount);
  }
  return StrKey.encodeEd25519PublicKey(muxedAccount.value.toBytes());
}
function encodeMuxedAccount(address, id) {
  if (!StrKey.isValidEd25519PublicKey(address)) {
    throw new Error("address should be a Stellar account ID (G...)");
  }
  if (typeof id !== "string") {
    throw new Error("id should be a string representing a number (uint64)");
  }
  return MuxedAccount.keyTypeMuxedEd25519(
    new MuxedAccountMed25519({
      id: Uint64.fromString(id),
      ed25519: StrKey.decodeEd25519PublicKey(address)
    })
  );
}
function extractBaseAddress(address) {
  if (StrKey.isValidEd25519PublicKey(address)) {
    return address;
  }
  if (!StrKey.isValidMed25519PublicKey(address)) {
    throw new TypeError(`expected muxed account (M...), got ${address}`);
  }
  const muxedAccount = decodeAddressToMuxedAccount(address);
  if (muxedAccount.type !== "keyTypeMuxedEd25519") {
    throw new TypeError(`expected muxed account (M...), got ${address}`);
  }
  return StrKey.encodeEd25519PublicKey(muxedAccount.value.ed25519.toBytes());
}
function _decodeAddressFullyToMuxedAccount(address) {
  const rawBytes = StrKey.decodeMed25519PublicKey(address);
  return MuxedAccount.keyTypeMuxedEd25519(
    new MuxedAccountMed25519({
      id: Uint64.fromXdr(rawBytes.subarray(-8)),
      ed25519: rawBytes.subarray(0, -8)
    })
  );
}
function _encodeMuxedAccountFullyToAddress(muxedAccount) {
  if (muxedAccount.type === "keyTypeEd25519") {
    return encodeMuxedAccountToAddress(muxedAccount);
  }
  const muxed = muxedAccount.value;
  return StrKey.encodeMed25519PublicKey(
    concatUint8Arrays([
      muxed.ed25519.toBytes(),
      MuxedAccountMed25519.schema.encode(muxed.toXdrObject()).subarray(0, 8)
    ])
  );
}

export { decodeAddressToMuxedAccount, encodeMuxedAccount, encodeMuxedAccountToAddress, extractBaseAddress };
//# sourceMappingURL=decode_encode_muxed_account.js.map
