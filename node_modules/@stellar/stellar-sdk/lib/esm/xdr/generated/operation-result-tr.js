import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { OperationType } from './operation-type.js';
import { CreateAccountResult } from './create-account-result.js';
import { PaymentResult } from './payment-result.js';
import { PathPaymentStrictReceiveResult } from './path-payment-strict-receive-result.js';
import { ManageSellOfferResult } from './manage-sell-offer-result.js';
import { SetOptionsResult } from './set-options-result.js';
import { ChangeTrustResult } from './change-trust-result.js';
import { AllowTrustResult } from './allow-trust-result.js';
import { AccountMergeResult } from './account-merge-result.js';
import { InflationResult } from './inflation-result.js';
import { ManageDataResult } from './manage-data-result.js';
import { BumpSequenceResult } from './bump-sequence-result.js';
import { ManageBuyOfferResult } from './manage-buy-offer-result.js';
import { PathPaymentStrictSendResult } from './path-payment-strict-send-result.js';
import { CreateClaimableBalanceResult } from './create-claimable-balance-result.js';
import { ClaimClaimableBalanceResult } from './claim-claimable-balance-result.js';
import { BeginSponsoringFutureReservesResult } from './begin-sponsoring-future-reserves-result.js';
import { EndSponsoringFutureReservesResult } from './end-sponsoring-future-reserves-result.js';
import { RevokeSponsorshipResult } from './revoke-sponsorship-result.js';
import { ClawbackResult } from './clawback-result.js';
import { ClawbackClaimableBalanceResult } from './clawback-claimable-balance-result.js';
import { SetTrustLineFlagsResult } from './set-trust-line-flags-result.js';
import { LiquidityPoolDepositResult } from './liquidity-pool-deposit-result.js';
import { LiquidityPoolWithdrawResult } from './liquidity-pool-withdraw-result.js';
import { InvokeHostFunctionResult } from './invoke-host-function-result.js';
import { ExtendFootprintTtlResult } from './extend-footprint-ttl-result.js';
import { RestoreFootprintResult } from './restore-footprint-result.js';

class OperationResultTrBase extends XdrValue {
  constructor() {
    super();
    if (new.target === OperationResultTrBase) {
      throw new TypeError(
        "new xdr.OperationResultTr(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OperationResultTr.createAccount(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "OperationResultTr",
    {
      switchOn: OperationType.schema,
      cases: [
        _case(
          "createAccount",
          0,
          field("createAccountResult", CreateAccountResult.schema)
        ),
        _case("payment", 1, field("paymentResult", PaymentResult.schema)),
        _case(
          "pathPaymentStrictReceive",
          2,
          field(
            "pathPaymentStrictReceiveResult",
            PathPaymentStrictReceiveResult.schema
          )
        ),
        _case(
          "manageSellOffer",
          3,
          field("manageSellOfferResult", ManageSellOfferResult.schema)
        ),
        _case(
          "createPassiveSellOffer",
          4,
          field("createPassiveSellOfferResult", ManageSellOfferResult.schema)
        ),
        _case(
          "setOptions",
          5,
          field("setOptionsResult", SetOptionsResult.schema)
        ),
        _case(
          "changeTrust",
          6,
          field("changeTrustResult", ChangeTrustResult.schema)
        ),
        _case(
          "allowTrust",
          7,
          field("allowTrustResult", AllowTrustResult.schema)
        ),
        _case(
          "accountMerge",
          8,
          field("accountMergeResult", AccountMergeResult.schema)
        ),
        _case("inflation", 9, field("inflationResult", InflationResult.schema)),
        _case(
          "manageData",
          10,
          field("manageDataResult", ManageDataResult.schema)
        ),
        _case(
          "bumpSequence",
          11,
          field("bumpSeqResult", BumpSequenceResult.schema)
        ),
        _case(
          "manageBuyOffer",
          12,
          field("manageBuyOfferResult", ManageBuyOfferResult.schema)
        ),
        _case(
          "pathPaymentStrictSend",
          13,
          field(
            "pathPaymentStrictSendResult",
            PathPaymentStrictSendResult.schema
          )
        ),
        _case(
          "createClaimableBalance",
          14,
          field(
            "createClaimableBalanceResult",
            CreateClaimableBalanceResult.schema
          )
        ),
        _case(
          "claimClaimableBalance",
          15,
          field(
            "claimClaimableBalanceResult",
            ClaimClaimableBalanceResult.schema
          )
        ),
        _case(
          "beginSponsoringFutureReserves",
          16,
          field(
            "beginSponsoringFutureReservesResult",
            BeginSponsoringFutureReservesResult.schema
          )
        ),
        _case(
          "endSponsoringFutureReserves",
          17,
          field(
            "endSponsoringFutureReservesResult",
            EndSponsoringFutureReservesResult.schema
          )
        ),
        _case(
          "revokeSponsorship",
          18,
          field("revokeSponsorshipResult", RevokeSponsorshipResult.schema)
        ),
        _case("clawback", 19, field("clawbackResult", ClawbackResult.schema)),
        _case(
          "clawbackClaimableBalance",
          20,
          field(
            "clawbackClaimableBalanceResult",
            ClawbackClaimableBalanceResult.schema
          )
        ),
        _case(
          "setTrustLineFlags",
          21,
          field("setTrustLineFlagsResult", SetTrustLineFlagsResult.schema)
        ),
        _case(
          "liquidityPoolDeposit",
          22,
          field(
            "liquidityPoolDepositResult",
            LiquidityPoolDepositResult.schema
          )
        ),
        _case(
          "liquidityPoolWithdraw",
          23,
          field(
            "liquidityPoolWithdrawResult",
            LiquidityPoolWithdrawResult.schema
          )
        ),
        _case(
          "invokeHostFunction",
          24,
          field("invokeHostFunctionResult", InvokeHostFunctionResult.schema)
        ),
        _case(
          "extendFootprintTtl",
          25,
          field("extendFootprintTtlResult", ExtendFootprintTtlResult.schema)
        ),
        _case(
          "restoreFootprint",
          26,
          field("restoreFootprintResult", RestoreFootprintResult.schema)
        )
      ]
    }
  );
  static createAccount(createAccountResult) {
    return new OperationResultTrCreateAccount(createAccountResult);
  }
  static payment(paymentResult) {
    return new OperationResultTrPayment(paymentResult);
  }
  static pathPaymentStrictReceive(pathPaymentStrictReceiveResult) {
    return new OperationResultTrPathPaymentStrictReceive(
      pathPaymentStrictReceiveResult
    );
  }
  static manageSellOffer(manageSellOfferResult) {
    return new OperationResultTrManageSellOffer(manageSellOfferResult);
  }
  static createPassiveSellOffer(createPassiveSellOfferResult) {
    return new OperationResultTrCreatePassiveSellOffer(
      createPassiveSellOfferResult
    );
  }
  static setOptions(setOptionsResult) {
    return new OperationResultTrSetOptions(setOptionsResult);
  }
  static changeTrust(changeTrustResult) {
    return new OperationResultTrChangeTrust(changeTrustResult);
  }
  static allowTrust(allowTrustResult) {
    return new OperationResultTrAllowTrust(allowTrustResult);
  }
  static accountMerge(accountMergeResult) {
    return new OperationResultTrAccountMerge(accountMergeResult);
  }
  static inflation(inflationResult) {
    return new OperationResultTrInflation(inflationResult);
  }
  static manageData(manageDataResult) {
    return new OperationResultTrManageData(manageDataResult);
  }
  static bumpSequence(bumpSeqResult) {
    return new OperationResultTrBumpSequence(bumpSeqResult);
  }
  static manageBuyOffer(manageBuyOfferResult) {
    return new OperationResultTrManageBuyOffer(manageBuyOfferResult);
  }
  static pathPaymentStrictSend(pathPaymentStrictSendResult) {
    return new OperationResultTrPathPaymentStrictSend(
      pathPaymentStrictSendResult
    );
  }
  static createClaimableBalance(createClaimableBalanceResult) {
    return new OperationResultTrCreateClaimableBalance(
      createClaimableBalanceResult
    );
  }
  static claimClaimableBalance(claimClaimableBalanceResult) {
    return new OperationResultTrClaimClaimableBalance(
      claimClaimableBalanceResult
    );
  }
  static beginSponsoringFutureReserves(beginSponsoringFutureReservesResult) {
    return new OperationResultTrBeginSponsoringFutureReserves(
      beginSponsoringFutureReservesResult
    );
  }
  static endSponsoringFutureReserves(endSponsoringFutureReservesResult) {
    return new OperationResultTrEndSponsoringFutureReserves(
      endSponsoringFutureReservesResult
    );
  }
  static revokeSponsorship(revokeSponsorshipResult) {
    return new OperationResultTrRevokeSponsorship(revokeSponsorshipResult);
  }
  static clawback(clawbackResult) {
    return new OperationResultTrClawback(clawbackResult);
  }
  static clawbackClaimableBalance(clawbackClaimableBalanceResult) {
    return new OperationResultTrClawbackClaimableBalance(
      clawbackClaimableBalanceResult
    );
  }
  static setTrustLineFlags(setTrustLineFlagsResult) {
    return new OperationResultTrSetTrustLineFlags(setTrustLineFlagsResult);
  }
  static liquidityPoolDeposit(liquidityPoolDepositResult) {
    return new OperationResultTrLiquidityPoolDeposit(
      liquidityPoolDepositResult
    );
  }
  static liquidityPoolWithdraw(liquidityPoolWithdrawResult) {
    return new OperationResultTrLiquidityPoolWithdraw(
      liquidityPoolWithdrawResult
    );
  }
  static invokeHostFunction(invokeHostFunctionResult) {
    return new OperationResultTrInvokeHostFunction(invokeHostFunctionResult);
  }
  static extendFootprintTtl(extendFootprintTtlResult) {
    return new OperationResultTrExtendFootprintTtl(extendFootprintTtlResult);
  }
  static restoreFootprint(restoreFootprintResult) {
    return new OperationResultTrRestoreFootprint(restoreFootprintResult);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new OperationResultTrCreateAccount(
          CreateAccountResult.fromXdrObject(wire.createAccountResult)
        );
      case 1:
        return new OperationResultTrPayment(
          PaymentResult.fromXdrObject(wire.paymentResult)
        );
      case 2:
        return new OperationResultTrPathPaymentStrictReceive(
          PathPaymentStrictReceiveResult.fromXdrObject(
            wire.pathPaymentStrictReceiveResult
          )
        );
      case 3:
        return new OperationResultTrManageSellOffer(
          ManageSellOfferResult.fromXdrObject(wire.manageSellOfferResult)
        );
      case 4:
        return new OperationResultTrCreatePassiveSellOffer(
          ManageSellOfferResult.fromXdrObject(
            wire.createPassiveSellOfferResult
          )
        );
      case 5:
        return new OperationResultTrSetOptions(
          SetOptionsResult.fromXdrObject(wire.setOptionsResult)
        );
      case 6:
        return new OperationResultTrChangeTrust(
          ChangeTrustResult.fromXdrObject(wire.changeTrustResult)
        );
      case 7:
        return new OperationResultTrAllowTrust(
          AllowTrustResult.fromXdrObject(wire.allowTrustResult)
        );
      case 8:
        return new OperationResultTrAccountMerge(
          AccountMergeResult.fromXdrObject(wire.accountMergeResult)
        );
      case 9:
        return new OperationResultTrInflation(
          InflationResult.fromXdrObject(wire.inflationResult)
        );
      case 10:
        return new OperationResultTrManageData(
          ManageDataResult.fromXdrObject(wire.manageDataResult)
        );
      case 11:
        return new OperationResultTrBumpSequence(
          BumpSequenceResult.fromXdrObject(wire.bumpSeqResult)
        );
      case 12:
        return new OperationResultTrManageBuyOffer(
          ManageBuyOfferResult.fromXdrObject(wire.manageBuyOfferResult)
        );
      case 13:
        return new OperationResultTrPathPaymentStrictSend(
          PathPaymentStrictSendResult.fromXdrObject(
            wire.pathPaymentStrictSendResult
          )
        );
      case 14:
        return new OperationResultTrCreateClaimableBalance(
          CreateClaimableBalanceResult.fromXdrObject(
            wire.createClaimableBalanceResult
          )
        );
      case 15:
        return new OperationResultTrClaimClaimableBalance(
          ClaimClaimableBalanceResult.fromXdrObject(
            wire.claimClaimableBalanceResult
          )
        );
      case 16:
        return new OperationResultTrBeginSponsoringFutureReserves(
          BeginSponsoringFutureReservesResult.fromXdrObject(
            wire.beginSponsoringFutureReservesResult
          )
        );
      case 17:
        return new OperationResultTrEndSponsoringFutureReserves(
          EndSponsoringFutureReservesResult.fromXdrObject(
            wire.endSponsoringFutureReservesResult
          )
        );
      case 18:
        return new OperationResultTrRevokeSponsorship(
          RevokeSponsorshipResult.fromXdrObject(wire.revokeSponsorshipResult)
        );
      case 19:
        return new OperationResultTrClawback(
          ClawbackResult.fromXdrObject(wire.clawbackResult)
        );
      case 20:
        return new OperationResultTrClawbackClaimableBalance(
          ClawbackClaimableBalanceResult.fromXdrObject(
            wire.clawbackClaimableBalanceResult
          )
        );
      case 21:
        return new OperationResultTrSetTrustLineFlags(
          SetTrustLineFlagsResult.fromXdrObject(wire.setTrustLineFlagsResult)
        );
      case 22:
        return new OperationResultTrLiquidityPoolDeposit(
          LiquidityPoolDepositResult.fromXdrObject(
            wire.liquidityPoolDepositResult
          )
        );
      case 23:
        return new OperationResultTrLiquidityPoolWithdraw(
          LiquidityPoolWithdrawResult.fromXdrObject(
            wire.liquidityPoolWithdrawResult
          )
        );
      case 24:
        return new OperationResultTrInvokeHostFunction(
          InvokeHostFunctionResult.fromXdrObject(wire.invokeHostFunctionResult)
        );
      case 25:
        return new OperationResultTrExtendFootprintTtl(
          ExtendFootprintTtlResult.fromXdrObject(wire.extendFootprintTtlResult)
        );
      case 26:
        return new OperationResultTrRestoreFootprint(
          RestoreFootprintResult.fromXdrObject(wire.restoreFootprintResult)
        );
    }
    throw new XdrError(
      `OperationResultTr: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete OperationResultTr variant.
   * Use this instead of `instanceof OperationResultTr`: the exported `OperationResultTr` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `OperationResultTr.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof OperationResultTrBase;
  }
}
class OperationResultTrCreateAccount extends OperationResultTrBase {
  type = "createAccount";
  createAccountResult;
  constructor(createAccountResult) {
    super();
    this.createAccountResult = createAccountResult;
  }
  get value() {
    return this.createAccountResult;
  }
  toXdrObject() {
    return {
      type: 0,
      createAccountResult: this.createAccountResult.toXdrObject()
    };
  }
}
class OperationResultTrPayment extends OperationResultTrBase {
  type = "payment";
  paymentResult;
  constructor(paymentResult) {
    super();
    this.paymentResult = paymentResult;
  }
  get value() {
    return this.paymentResult;
  }
  toXdrObject() {
    return { type: 1, paymentResult: this.paymentResult.toXdrObject() };
  }
}
class OperationResultTrPathPaymentStrictReceive extends OperationResultTrBase {
  type = "pathPaymentStrictReceive";
  pathPaymentStrictReceiveResult;
  constructor(pathPaymentStrictReceiveResult) {
    super();
    this.pathPaymentStrictReceiveResult = pathPaymentStrictReceiveResult;
  }
  get value() {
    return this.pathPaymentStrictReceiveResult;
  }
  toXdrObject() {
    return {
      type: 2,
      pathPaymentStrictReceiveResult: this.pathPaymentStrictReceiveResult.toXdrObject()
    };
  }
}
class OperationResultTrManageSellOffer extends OperationResultTrBase {
  type = "manageSellOffer";
  manageSellOfferResult;
  constructor(manageSellOfferResult) {
    super();
    this.manageSellOfferResult = manageSellOfferResult;
  }
  get value() {
    return this.manageSellOfferResult;
  }
  toXdrObject() {
    return {
      type: 3,
      manageSellOfferResult: this.manageSellOfferResult.toXdrObject()
    };
  }
}
class OperationResultTrCreatePassiveSellOffer extends OperationResultTrBase {
  type = "createPassiveSellOffer";
  createPassiveSellOfferResult;
  constructor(createPassiveSellOfferResult) {
    super();
    this.createPassiveSellOfferResult = createPassiveSellOfferResult;
  }
  get value() {
    return this.createPassiveSellOfferResult;
  }
  toXdrObject() {
    return {
      type: 4,
      createPassiveSellOfferResult: this.createPassiveSellOfferResult.toXdrObject()
    };
  }
}
class OperationResultTrSetOptions extends OperationResultTrBase {
  type = "setOptions";
  setOptionsResult;
  constructor(setOptionsResult) {
    super();
    this.setOptionsResult = setOptionsResult;
  }
  get value() {
    return this.setOptionsResult;
  }
  toXdrObject() {
    return { type: 5, setOptionsResult: this.setOptionsResult.toXdrObject() };
  }
}
class OperationResultTrChangeTrust extends OperationResultTrBase {
  type = "changeTrust";
  changeTrustResult;
  constructor(changeTrustResult) {
    super();
    this.changeTrustResult = changeTrustResult;
  }
  get value() {
    return this.changeTrustResult;
  }
  toXdrObject() {
    return { type: 6, changeTrustResult: this.changeTrustResult.toXdrObject() };
  }
}
class OperationResultTrAllowTrust extends OperationResultTrBase {
  type = "allowTrust";
  allowTrustResult;
  constructor(allowTrustResult) {
    super();
    this.allowTrustResult = allowTrustResult;
  }
  get value() {
    return this.allowTrustResult;
  }
  toXdrObject() {
    return { type: 7, allowTrustResult: this.allowTrustResult.toXdrObject() };
  }
}
class OperationResultTrAccountMerge extends OperationResultTrBase {
  type = "accountMerge";
  accountMergeResult;
  constructor(accountMergeResult) {
    super();
    this.accountMergeResult = accountMergeResult;
  }
  get value() {
    return this.accountMergeResult;
  }
  toXdrObject() {
    return {
      type: 8,
      accountMergeResult: this.accountMergeResult.toXdrObject()
    };
  }
}
class OperationResultTrInflation extends OperationResultTrBase {
  type = "inflation";
  inflationResult;
  constructor(inflationResult) {
    super();
    this.inflationResult = inflationResult;
  }
  get value() {
    return this.inflationResult;
  }
  toXdrObject() {
    return { type: 9, inflationResult: this.inflationResult.toXdrObject() };
  }
}
class OperationResultTrManageData extends OperationResultTrBase {
  type = "manageData";
  manageDataResult;
  constructor(manageDataResult) {
    super();
    this.manageDataResult = manageDataResult;
  }
  get value() {
    return this.manageDataResult;
  }
  toXdrObject() {
    return { type: 10, manageDataResult: this.manageDataResult.toXdrObject() };
  }
}
class OperationResultTrBumpSequence extends OperationResultTrBase {
  type = "bumpSequence";
  bumpSeqResult;
  constructor(bumpSeqResult) {
    super();
    this.bumpSeqResult = bumpSeqResult;
  }
  get value() {
    return this.bumpSeqResult;
  }
  toXdrObject() {
    return { type: 11, bumpSeqResult: this.bumpSeqResult.toXdrObject() };
  }
}
class OperationResultTrManageBuyOffer extends OperationResultTrBase {
  type = "manageBuyOffer";
  manageBuyOfferResult;
  constructor(manageBuyOfferResult) {
    super();
    this.manageBuyOfferResult = manageBuyOfferResult;
  }
  get value() {
    return this.manageBuyOfferResult;
  }
  toXdrObject() {
    return {
      type: 12,
      manageBuyOfferResult: this.manageBuyOfferResult.toXdrObject()
    };
  }
}
class OperationResultTrPathPaymentStrictSend extends OperationResultTrBase {
  type = "pathPaymentStrictSend";
  pathPaymentStrictSendResult;
  constructor(pathPaymentStrictSendResult) {
    super();
    this.pathPaymentStrictSendResult = pathPaymentStrictSendResult;
  }
  get value() {
    return this.pathPaymentStrictSendResult;
  }
  toXdrObject() {
    return {
      type: 13,
      pathPaymentStrictSendResult: this.pathPaymentStrictSendResult.toXdrObject()
    };
  }
}
class OperationResultTrCreateClaimableBalance extends OperationResultTrBase {
  type = "createClaimableBalance";
  createClaimableBalanceResult;
  constructor(createClaimableBalanceResult) {
    super();
    this.createClaimableBalanceResult = createClaimableBalanceResult;
  }
  get value() {
    return this.createClaimableBalanceResult;
  }
  toXdrObject() {
    return {
      type: 14,
      createClaimableBalanceResult: this.createClaimableBalanceResult.toXdrObject()
    };
  }
}
class OperationResultTrClaimClaimableBalance extends OperationResultTrBase {
  type = "claimClaimableBalance";
  claimClaimableBalanceResult;
  constructor(claimClaimableBalanceResult) {
    super();
    this.claimClaimableBalanceResult = claimClaimableBalanceResult;
  }
  get value() {
    return this.claimClaimableBalanceResult;
  }
  toXdrObject() {
    return {
      type: 15,
      claimClaimableBalanceResult: this.claimClaimableBalanceResult.toXdrObject()
    };
  }
}
class OperationResultTrBeginSponsoringFutureReserves extends OperationResultTrBase {
  type = "beginSponsoringFutureReserves";
  beginSponsoringFutureReservesResult;
  constructor(beginSponsoringFutureReservesResult) {
    super();
    this.beginSponsoringFutureReservesResult = beginSponsoringFutureReservesResult;
  }
  get value() {
    return this.beginSponsoringFutureReservesResult;
  }
  toXdrObject() {
    return {
      type: 16,
      beginSponsoringFutureReservesResult: this.beginSponsoringFutureReservesResult.toXdrObject()
    };
  }
}
class OperationResultTrEndSponsoringFutureReserves extends OperationResultTrBase {
  type = "endSponsoringFutureReserves";
  endSponsoringFutureReservesResult;
  constructor(endSponsoringFutureReservesResult) {
    super();
    this.endSponsoringFutureReservesResult = endSponsoringFutureReservesResult;
  }
  get value() {
    return this.endSponsoringFutureReservesResult;
  }
  toXdrObject() {
    return {
      type: 17,
      endSponsoringFutureReservesResult: this.endSponsoringFutureReservesResult.toXdrObject()
    };
  }
}
class OperationResultTrRevokeSponsorship extends OperationResultTrBase {
  type = "revokeSponsorship";
  revokeSponsorshipResult;
  constructor(revokeSponsorshipResult) {
    super();
    this.revokeSponsorshipResult = revokeSponsorshipResult;
  }
  get value() {
    return this.revokeSponsorshipResult;
  }
  toXdrObject() {
    return {
      type: 18,
      revokeSponsorshipResult: this.revokeSponsorshipResult.toXdrObject()
    };
  }
}
class OperationResultTrClawback extends OperationResultTrBase {
  type = "clawback";
  clawbackResult;
  constructor(clawbackResult) {
    super();
    this.clawbackResult = clawbackResult;
  }
  get value() {
    return this.clawbackResult;
  }
  toXdrObject() {
    return { type: 19, clawbackResult: this.clawbackResult.toXdrObject() };
  }
}
class OperationResultTrClawbackClaimableBalance extends OperationResultTrBase {
  type = "clawbackClaimableBalance";
  clawbackClaimableBalanceResult;
  constructor(clawbackClaimableBalanceResult) {
    super();
    this.clawbackClaimableBalanceResult = clawbackClaimableBalanceResult;
  }
  get value() {
    return this.clawbackClaimableBalanceResult;
  }
  toXdrObject() {
    return {
      type: 20,
      clawbackClaimableBalanceResult: this.clawbackClaimableBalanceResult.toXdrObject()
    };
  }
}
class OperationResultTrSetTrustLineFlags extends OperationResultTrBase {
  type = "setTrustLineFlags";
  setTrustLineFlagsResult;
  constructor(setTrustLineFlagsResult) {
    super();
    this.setTrustLineFlagsResult = setTrustLineFlagsResult;
  }
  get value() {
    return this.setTrustLineFlagsResult;
  }
  toXdrObject() {
    return {
      type: 21,
      setTrustLineFlagsResult: this.setTrustLineFlagsResult.toXdrObject()
    };
  }
}
class OperationResultTrLiquidityPoolDeposit extends OperationResultTrBase {
  type = "liquidityPoolDeposit";
  liquidityPoolDepositResult;
  constructor(liquidityPoolDepositResult) {
    super();
    this.liquidityPoolDepositResult = liquidityPoolDepositResult;
  }
  get value() {
    return this.liquidityPoolDepositResult;
  }
  toXdrObject() {
    return {
      type: 22,
      liquidityPoolDepositResult: this.liquidityPoolDepositResult.toXdrObject()
    };
  }
}
class OperationResultTrLiquidityPoolWithdraw extends OperationResultTrBase {
  type = "liquidityPoolWithdraw";
  liquidityPoolWithdrawResult;
  constructor(liquidityPoolWithdrawResult) {
    super();
    this.liquidityPoolWithdrawResult = liquidityPoolWithdrawResult;
  }
  get value() {
    return this.liquidityPoolWithdrawResult;
  }
  toXdrObject() {
    return {
      type: 23,
      liquidityPoolWithdrawResult: this.liquidityPoolWithdrawResult.toXdrObject()
    };
  }
}
class OperationResultTrInvokeHostFunction extends OperationResultTrBase {
  type = "invokeHostFunction";
  invokeHostFunctionResult;
  constructor(invokeHostFunctionResult) {
    super();
    this.invokeHostFunctionResult = invokeHostFunctionResult;
  }
  get value() {
    return this.invokeHostFunctionResult;
  }
  toXdrObject() {
    return {
      type: 24,
      invokeHostFunctionResult: this.invokeHostFunctionResult.toXdrObject()
    };
  }
}
class OperationResultTrExtendFootprintTtl extends OperationResultTrBase {
  type = "extendFootprintTtl";
  extendFootprintTtlResult;
  constructor(extendFootprintTtlResult) {
    super();
    this.extendFootprintTtlResult = extendFootprintTtlResult;
  }
  get value() {
    return this.extendFootprintTtlResult;
  }
  toXdrObject() {
    return {
      type: 25,
      extendFootprintTtlResult: this.extendFootprintTtlResult.toXdrObject()
    };
  }
}
class OperationResultTrRestoreFootprint extends OperationResultTrBase {
  type = "restoreFootprint";
  restoreFootprintResult;
  constructor(restoreFootprintResult) {
    super();
    this.restoreFootprintResult = restoreFootprintResult;
  }
  get value() {
    return this.restoreFootprintResult;
  }
  toXdrObject() {
    return {
      type: 26,
      restoreFootprintResult: this.restoreFootprintResult.toXdrObject()
    };
  }
}
const OperationResultTr = OperationResultTrBase;

export { OperationResultTr, OperationResultTrAccountMerge, OperationResultTrAllowTrust, OperationResultTrBeginSponsoringFutureReserves, OperationResultTrBumpSequence, OperationResultTrChangeTrust, OperationResultTrClaimClaimableBalance, OperationResultTrClawback, OperationResultTrClawbackClaimableBalance, OperationResultTrCreateAccount, OperationResultTrCreateClaimableBalance, OperationResultTrCreatePassiveSellOffer, OperationResultTrEndSponsoringFutureReserves, OperationResultTrExtendFootprintTtl, OperationResultTrInflation, OperationResultTrInvokeHostFunction, OperationResultTrLiquidityPoolDeposit, OperationResultTrLiquidityPoolWithdraw, OperationResultTrManageBuyOffer, OperationResultTrManageData, OperationResultTrManageSellOffer, OperationResultTrPathPaymentStrictReceive, OperationResultTrPathPaymentStrictSend, OperationResultTrPayment, OperationResultTrRestoreFootprint, OperationResultTrRevokeSponsorship, OperationResultTrSetOptions, OperationResultTrSetTrustLineFlags };
//# sourceMappingURL=operation-result-tr.js.map
