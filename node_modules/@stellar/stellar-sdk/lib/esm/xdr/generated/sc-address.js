import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScAddressType } from './sc-address-type.js';
import { PublicKey } from './public-key.js';
import { ContractId } from './contract-id.js';
import { MuxedEd25519Account } from './muxed-ed25519-account.js';
import { ClaimableBalanceId } from './claimable-balance-id.js';
import { PoolId } from './pool-id.js';

class ScAddressBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ScAddressBase) {
      throw new TypeError(
        "new xdr.ScAddress(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScAddress.scAddressTypeAccount(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("ScAddress", {
    switchOn: ScAddressType.schema,
    cases: [
      _case("scAddressTypeAccount", 0, field("accountId", PublicKey.schema)),
      _case("scAddressTypeContract", 1, field("contractId", ContractId.schema)),
      _case(
        "scAddressTypeMuxedAccount",
        2,
        field("muxedAccount", MuxedEd25519Account.schema)
      ),
      _case(
        "scAddressTypeClaimableBalance",
        3,
        field("claimableBalanceId", ClaimableBalanceId.schema)
      ),
      _case(
        "scAddressTypeLiquidityPool",
        4,
        field("liquidityPoolId", PoolId.schema)
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
        return new ScAddressAccount(PublicKey.fromXdrObject(wire.accountId));
      case 1:
        return new ScAddressContract(ContractId.fromXdrObject(wire.contractId));
      case 2:
        return new ScAddressMuxedAccount(
          MuxedEd25519Account.fromXdrObject(wire.muxedAccount)
        );
      case 3:
        return new ScAddressClaimableBalance(
          ClaimableBalanceId.fromXdrObject(wire.claimableBalanceId)
        );
      case 4:
        return new ScAddressLiquidityPool(
          PoolId.fromXdrObject(wire.liquidityPoolId)
        );
    }
    throw new XdrError(
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

export { ScAddress, ScAddressAccount, ScAddressClaimableBalance, ScAddressContract, ScAddressLiquidityPool, ScAddressMuxedAccount };
//# sourceMappingURL=sc-address.js.map
