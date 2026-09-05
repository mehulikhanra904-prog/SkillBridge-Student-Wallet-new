'use strict';

var uint8arrayExtras = require('uint8array-extras');
var strkey = require('./strkey.js');
var index = require('../xdr/index.js');
var claimableBalanceIdType = require('../xdr/generated/claimable-balance-id-type.js');
var muxedEd25519Account = require('../xdr/generated/muxed-ed25519-account.js');
var scVal = require('../xdr/generated/sc-val.js');
var scAddress = require('../xdr/generated/sc-address.js');
var claimableBalanceId = require('../xdr/generated/claimable-balance-id.js');
var hash = require('../xdr/generated/hash.js');
var contractId = require('../xdr/generated/contract-id.js');
var poolId = require('../xdr/generated/pool-id.js');
var publicKey = require('../xdr/generated/public-key.js');

class Address {
  _type;
  _key;
  /**
   * @param address - a {@link StrKey} of the address value
   */
  constructor(address) {
    if (strkey.StrKey.isValidEd25519PublicKey(address)) {
      this._type = "account";
      this._key = strkey.StrKey.decodeEd25519PublicKey(address);
    } else if (strkey.StrKey.isValidContract(address)) {
      this._type = "contract";
      this._key = strkey.StrKey.decodeContract(address);
    } else if (strkey.StrKey.isValidMed25519PublicKey(address)) {
      this._type = "muxedAccount";
      this._key = strkey.StrKey.decodeMed25519PublicKey(address);
    } else if (strkey.StrKey.isValidClaimableBalance(address)) {
      this._type = "claimableBalance";
      this._key = strkey.StrKey.decodeClaimableBalance(address);
    } else if (strkey.StrKey.isValidLiquidityPool(address)) {
      this._type = "liquidityPool";
      this._key = strkey.StrKey.decodeLiquidityPool(address);
    } else {
      throw new Error(`Unsupported address type: ${address}`);
    }
  }
  /**
   * Parses a string and returns an Address object.
   *
   * @param address - The address to parse. ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`
   */
  static fromString(address) {
    return new Address(address);
  }
  /**
   * Creates a new account Address object from raw bytes.
   *
   * @param buffer - The bytes of an address to parse.
   */
  static account(buffer) {
    return new Address(strkey.StrKey.encodeEd25519PublicKey(buffer));
  }
  /**
   * Creates a new contract Address object from raw bytes.
   *
   * @param buffer - The bytes of an address to parse.
   */
  static contract(buffer) {
    return new Address(strkey.StrKey.encodeContract(buffer));
  }
  /**
   * Creates a new claimable balance Address object from raw bytes.
   *
   * @param buffer - The bytes of a claimable balance ID to parse.
   */
  static claimableBalance(buffer) {
    return new Address(strkey.StrKey.encodeClaimableBalance(buffer));
  }
  /**
   * Creates a new liquidity pool Address object from raw bytes.
   *
   * @param buffer - The bytes of an LP ID to parse.
   */
  static liquidityPool(buffer) {
    return new Address(strkey.StrKey.encodeLiquidityPool(buffer));
  }
  /**
   * Creates a new muxed account Address object from raw bytes.
   *
   * @param buffer - The bytes of an address to parse.
   */
  static muxedAccount(buffer) {
    return new Address(strkey.StrKey.encodeMed25519PublicKey(buffer));
  }
  /**
   * Convert this from an xdr.ScVal type.
   *
   * @param scVal - The xdr.ScVal type to parse
   */
  static fromScVal(scVal) {
    if (scVal.type !== "scvAddress") {
      throw new Error(`Unsupported ScVal type: ${scVal.type}`);
    }
    return Address.fromScAddress(scVal.address);
  }
  /**
   * Convert this from an xdr.ScAddress type
   *
   * @param scAddress - The xdr.ScAddress type to parse
   */
  static fromScAddress(scAddress) {
    switch (scAddress.type) {
      case "scAddressTypeAccount":
        return Address.account(scAddress.accountId.ed25519.toBytes());
      case "scAddressTypeContract":
        return Address.contract(scAddress.contractId.value);
      case "scAddressTypeMuxedAccount": {
        const muxed = scAddress.value;
        const raw = uint8arrayExtras.concatUint8Arrays([
          muxed.ed25519.toBytes(),
          muxedEd25519Account.MuxedEd25519Account.schema.encode(muxed.toXdrObject()).subarray(0, 8)
        ]);
        return Address.muxedAccount(raw);
      }
      case "scAddressTypeClaimableBalance": {
        const cbi = scAddress.value;
        return Address.claimableBalance(
          uint8arrayExtras.concatUint8Arrays([
            Uint8Array.of(
              claimableBalanceIdType.ClaimableBalanceIdType.claimableBalanceIdTypeV0.value
            ),
            cbi.v0.value
          ])
        );
      }
      case "scAddressTypeLiquidityPool":
        return Address.liquidityPool(scAddress.value.toBytes());
      default:
        throw new Error("Unsupported address type");
    }
  }
  /**
   * Serialize an address to string.
   */
  toString() {
    switch (this._type) {
      case "account":
        return strkey.StrKey.encodeEd25519PublicKey(this._key);
      case "contract":
        return strkey.StrKey.encodeContract(this._key);
      case "claimableBalance":
        return strkey.StrKey.encodeClaimableBalance(this._key);
      case "liquidityPool":
        return strkey.StrKey.encodeLiquidityPool(this._key);
      case "muxedAccount":
        return strkey.StrKey.encodeMed25519PublicKey(this._key);
      default:
        throw new Error("Unsupported address type");
    }
  }
  /**
   * Convert this Address to an xdr.ScVal type.
   */
  toScVal() {
    return scVal.ScVal.scvAddress(this.toScAddress());
  }
  /**
   * Convert this Address to an xdr.ScAddress type.
   */
  toScAddress() {
    switch (this._type) {
      case "account":
        return scAddress.ScAddress.scAddressTypeAccount(
          publicKey.PublicKey.publicKeyTypeEd25519(this._key)
        );
      case "contract":
        return scAddress.ScAddress.scAddressTypeContract(new contractId.ContractId(this._key));
      case "liquidityPool":
        return scAddress.ScAddress.scAddressTypeLiquidityPool(new poolId.PoolId(this._key));
      case "claimableBalance":
        return scAddress.ScAddress.scAddressTypeClaimableBalance(
          new claimableBalanceId.ClaimableBalanceIdV0(new hash.Hash(this._key.subarray(1)))
        );
      case "muxedAccount":
        return scAddress.ScAddress.scAddressTypeMuxedAccount(
          new muxedEd25519Account.MuxedEd25519Account({
            ed25519: this._key.subarray(0, 32),
            id: index.Uint64.fromXdr(this._key.subarray(32, 40), "raw")
          })
        );
      default:
        throw new Error("Unsupported address type");
    }
  }
  /**
   * Return the raw public key bytes for this address.
   */
  toBuffer() {
    return this._key;
  }
  /**
   * Return the type of this address.
   */
  get type() {
    return this._type;
  }
}

exports.Address = Address;
//# sourceMappingURL=address.js.map
