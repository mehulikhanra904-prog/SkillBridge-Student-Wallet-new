'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scAddressType = require('./sc-address-type.js');
var publicKey = require('./public-key.js');
var contractId = require('./contract-id.js');
var muxedEd25519Account = require('./muxed-ed25519-account.js');
var claimableBalanceId = require('./claimable-balance-id.js');
var poolId = require('./pool-id.js');

class ScAddressBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScAddressBase) {
      throw new TypeError(
        "new xdr.ScAddress(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScAddress.scAddressTypeAccount(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ScAddress", {
    switchOn: scAddressType.ScAddressType.schema,
    cases: [
      jsXdr.case("scAddressTypeAccount", 0, jsXdr.field("accountId", publicKey.PublicKey.schema)),
      jsXdr.case("scAddressTypeContract", 1, jsXdr.field("contractId", contractId.ContractId.schema)),
      jsXdr.case(
        "scAddressTypeMuxedAccount",
        2,
        jsXdr.field("muxedAccount", muxedEd25519Account.MuxedEd25519Account.schema)
      ),
      jsXdr.case(
        "scAddressTypeClaimableBalance",
        3,
        jsXdr.field("claimableBalanceId", claimableBalanceId.ClaimableBalanceId.schema)
      ),
      jsXdr.case(
        "scAddressTypeLiquidityPool",
        4,
        jsXdr.field("liquidityPoolId", poolId.PoolId.schema)
      )
    ]
  });
  static scAddressTypeAccount(accountId) {
    return new ScAddressAccount(accountId);
  }
  static scAddressTypeContract(contractId) {
    return new ScAddressContract(contractId);
  }
  static scAddressTypeMuxedAccount(muxedAccount) {
    return new ScAddressMuxedAccount(muxedAccount);
  }
  static scAddressTypeClaimableBalance(claimableBalanceId) {
    return new ScAddressClaimableBalance(claimableBalanceId);
  }
  static scAddressTypeLiquidityPool(liquidityPoolId) {
    return new ScAddressLiquidityPool(liquidityPoolId);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ScAddressAccount(publicKey.PublicKey.fromXdrObject(wire.accountId));
      case 1:
        return new ScAddressContract(contractId.ContractId.fromXdrObject(wire.contractId));
      case 2:
        return new ScAddressMuxedAccount(
          muxedEd25519Account.MuxedEd25519Account.fromXdrObject(wire.muxedAccount)
        );
      case 3:
        return new ScAddressClaimableBalance(
          claimableBalanceId.ClaimableBalanceId.fromXdrObject(wire.claimableBalanceId)
        );
      case 4:
        return new ScAddressLiquidityPool(
          poolId.PoolId.fromXdrObject(wire.liquidityPoolId)
        );
    }
    throw new jsXdr.XdrError(
      `ScAddress: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScAddress variant.
   * Use this instead of `instanceof ScAddress`: the exported `ScAddress` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScAddress.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScAddressBase;
  }
}
class ScAddressAccount extends ScAddressBase {
  type = "scAddressTypeAccount";
  accountId;
  constructor(accountId) {
    super();
    this.accountId = accountId;
  }
  get value() {
    return this.accountId;
  }
  toXdrObject() {
    return { type: 0, accountId: this.accountId.toXdrObject() };
  }
}
class ScAddressContract extends ScAddressBase {
  type = "scAddressTypeContract";
  contractId;
  constructor(contractId) {
    super();
    this.contractId = contractId;
  }
  get value() {
    return this.contractId;
  }
  toXdrObject() {
    return { type: 1, contractId: this.contractId.toXdrObject() };
  }
}
class ScAddressMuxedAccount extends ScAddressBase {
  type = "scAddressTypeMuxedAccount";
  muxedAccount;
  constructor(muxedAccount) {
    super();
    this.muxedAccount = muxedAccount;
  }
  get value() {
    return this.muxedAccount;
  }
  toXdrObject() {
    return { type: 2, muxedAccount: this.muxedAccount.toXdrObject() };
  }
}
class ScAddressClaimableBalance extends ScAddressBase {
  type = "scAddressTypeClaimableBalance";
  claimableBalanceId;
  constructor(claimableBalanceId) {
    super();
    this.claimableBalanceId = claimableBalanceId;
  }
  get value() {
    return this.claimableBalanceId;
  }
  toXdrObject() {
    return {
      type: 3,
      claimableBalanceId: this.claimableBalanceId.toXdrObject()
    };
  }
}
class ScAddressLiquidityPool extends ScAddressBase {
  type = "scAddressTypeLiquidityPool";
  liquidityPoolId;
  constructor(liquidityPoolId) {
    super();
    this.liquidityPoolId = liquidityPoolId;
  }
  get value() {
    return this.liquidityPoolId;
  }
  toXdrObject() {
    return { type: 4, liquidityPoolId: this.liquidityPoolId.toXdrObject() };
  }
}
const ScAddress = ScAddressBase;

exports.ScAddress = ScAddress;
exports.ScAddressAccount = ScAddressAccount;
exports.ScAddressClaimableBalance = ScAddressClaimableBalance;
exports.ScAddressContract = ScAddressContract;
exports.ScAddressLiquidityPool = ScAddressLiquidityPool;
exports.ScAddressMuxedAccount = ScAddressMuxedAccount;
//# sourceMappingURL=sc-address.js.map
