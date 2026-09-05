import { concatUint8Arrays } from 'uint8array-extras';
import { StrKey } from './strkey.js';
import { Uint64 } from '../xdr/index.js';
import { ClaimableBalanceIdType } from '../xdr/generated/claimable-balance-id-type.js';
import { MuxedEd25519Account } from '../xdr/generated/muxed-ed25519-account.js';
import { ScVal } from '../xdr/generated/sc-val.js';
import { ScAddress } from '../xdr/generated/sc-address.js';
import { ClaimableBalanceIdV0 } from '../xdr/generated/claimable-balance-id.js';
import { Hash } from '../xdr/generated/hash.js';
import { ContractId } from '../xdr/generated/contract-id.js';
import { PoolId } from '../xdr/generated/pool-id.js';
import { PublicKey } from '../xdr/generated/public-key.js';

class Address {
  _type;
  _key;
  /**
   * @param address - a {@link StrKey} of the address value
   */
  constructor(address) {
    if (StrKey.isValidEd25519PublicKey(address)) {
      this._type = "account";
      this._key = StrKey.decodeEd25519PublicKey(address);
    } else if (StrKey.isValidContract(address)) {
      this._type = "contract";
      this._key = StrKey.decodeContract(address);
    } else if (StrKey.isValidMed25519PublicKey(address)) {
      this._type = "muxedAccount";
      this._key = StrKey.decodeMed25519PublicKey(address);
    } else if (StrKey.isValidClaimableBalance(address)) {
      this._type = "claimableBalance";
      this._key = StrKey.decodeClaimableBalance(address);
    } else if (StrKey.isValidLiquidityPool(address)) {
      this._type = "liquidityPool";
      this._key = StrKey.decodeLiquidityPool(address);
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
    return new Address(StrKey.encodeEd25519PublicKey(buffer));
  }
  /**
   * Creates a new contract Address object from raw bytes.
   *
   * @param buffer - The bytes of an address to parse.
   */
  static contract(buffer) {
    return new Address(StrKey.encodeContract(buffer));
  }
  /**
   * Creates a new claimable balance Address object from raw bytes.
   *
   * @param buffer - The bytes of a claimable balance ID to parse.
   */
  static claimableBalance(buffer) {
    return new Address(StrKey.encodeClaimableBalance(buffer));
  }
  /**
   * Creates a new liquidity pool Address object from raw bytes.
   *
   * @param buffer - The bytes of an LP ID to parse.
   */
  static liquidityPool(buffer) {
    return new Address(StrKey.encodeLiquidityPool(buffer));
  }
  /**
   * Creates a new muxed account Address object from raw bytes.
   *
   * @param buffer - The bytes of an address to parse.
   */
  static muxedAccount(buffer) {
    return new Address(StrKey.encodeMed25519PublicKey(buffer));
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
        const raw = concatUint8Arrays([
          muxed.ed25519.toBytes(),
          MuxedEd25519Account.schema.encode(muxed.toXdrObject()).subarray(0, 8)
        ]);
        return Address.muxedAccount(raw);
      }
      case "scAddressTypeClaimableBalance": {
        const cbi = scAddress.value;
        return Address.claimableBalance(
          concatUint8Arrays([
            Uint8Array.of(
              ClaimableBalanceIdType.claimableBalanceIdTypeV0.value
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
        return StrKey.encodeEd25519PublicKey(this._key);
      case "contract":
        return StrKey.encodeContract(this._key);
      case "claimableBalance":
        return StrKey.encodeClaimableBalance(this._key);
      case "liquidityPool":
        return StrKey.encodeLiquidityPool(this._key);
      case "muxedAccount":
        return StrKey.encodeMed25519PublicKey(this._key);
      default:
        throw new Error("Unsupported address type");
    }
  }
  /**
   * Convert this Address to an xdr.ScVal type.
   */
  toScVal() {
    return ScVal.scvAddress(this.toScAddress());
  }
  /**
   * Convert this Address to an xdr.ScAddress type.
   */
  toScAddress() {
    switch (this._type) {
      case "account":
        return ScAddress.scAddressTypeAccount(
          PublicKey.publicKeyTypeEd25519(this._key)
        );
      case "contract":
        return ScAddress.scAddressTypeContract(new ContractId(this._key));
      case "liquidityPool":
        return ScAddress.scAddressTypeLiquidityPool(new PoolId(this._key));
      case "claimableBalance":
        return ScAddress.scAddressTypeClaimableBalance(
          new ClaimableBalanceIdV0(new Hash(this._key.subarray(1)))
        );
      case "muxedAccount":
        return ScAddress.scAddressTypeMuxedAccount(
          new MuxedEd25519Account({
            ed25519: this._key.subarray(0, 32),
            id: Uint64.fromXdr(this._key.subarray(32, 40), "raw")
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

export { Address };
//# sourceMappingURL=address.js.map
