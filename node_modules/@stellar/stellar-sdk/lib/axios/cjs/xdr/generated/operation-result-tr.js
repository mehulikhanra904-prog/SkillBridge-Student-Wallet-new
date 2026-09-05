'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var operationType = require('./operation-type.js');
var createAccountResult = require('./create-account-result.js');
var paymentResult = require('./payment-result.js');
var pathPaymentStrictReceiveResult = require('./path-payment-strict-receive-result.js');
var manageSellOfferResult = require('./manage-sell-offer-result.js');
var setOptionsResult = require('./set-options-result.js');
var changeTrustResult = require('./change-trust-result.js');
var allowTrustResult = require('./allow-trust-result.js');
var accountMergeResult = require('./account-merge-result.js');
var inflationResult = require('./inflation-result.js');
var manageDataResult = require('./manage-data-result.js');
var bumpSequenceResult = require('./bump-sequence-result.js');
var manageBuyOfferResult = require('./manage-buy-offer-result.js');
var pathPaymentStrictSendResult = require('./path-payment-strict-send-result.js');
var createClaimableBalanceResult = require('./create-claimable-balance-result.js');
var claimClaimableBalanceResult = require('./claim-claimable-balance-result.js');
var beginSponsoringFutureReservesResult = require('./begin-sponsoring-future-reserves-result.js');
var endSponsoringFutureReservesResult = require('./end-sponsoring-future-reserves-result.js');
var revokeSponsorshipResult = require('./revoke-sponsorship-result.js');
var clawbackResult = require('./clawback-result.js');
var clawbackClaimableBalanceResult = require('./clawback-claimable-balance-result.js');
var setTrustLineFlagsResult = require('./set-trust-line-flags-result.js');
var liquidityPoolDepositResult = require('./liquidity-pool-deposit-result.js');
var liquidityPoolWithdrawResult = require('./liquidity-pool-withdraw-result.js');
var invokeHostFunctionResult = require('./invoke-host-function-result.js');
var extendFootprintTtlResult = require('./extend-footprint-ttl-result.js');
var restoreFootprintResult = require('./restore-footprint-result.js');

class OperationResultTrBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === OperationResultTrBase) {
      throw new TypeError(
        "new xdr.OperationResultTr(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OperationResultTr.createAccount(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "OperationResultTr",
    {
      switchOn: operationType.OperationType.schema,
      cases: [
        jsXdr.case(
          "createAccount",
          0,
          jsXdr.field("createAccountResult", createAccountResult.CreateAccountResult.schema)
        ),
        jsXdr.case("payment", 1, jsXdr.field("paymentResult", paymentResult.PaymentResult.schema)),
        jsXdr.case(
          "pathPaymentStrictReceive",
          2,
          jsXdr.field(
            "pathPaymentStrictReceiveResult",
            pathPaymentStrictReceiveResult.PathPaymentStrictReceiveResult.schema
          )
        ),
        jsXdr.case(
          "manageSellOffer",
          3,
          jsXdr.field("manageSellOfferResult", manageSellOfferResult.ManageSellOfferResult.schema)
        ),
        jsXdr.case(
          "createPassiveSellOffer",
          4,
          jsXdr.field("createPassiveSellOfferResult", manageSellOfferResult.ManageSellOfferResult.schema)
        ),
        jsXdr.case(
          "setOptions",
          5,
          jsXdr.field("setOptionsResult", setOptionsResult.SetOptionsResult.schema)
        ),
        jsXdr.case(
          "changeTrust",
          6,
          jsXdr.field("changeTrustResult", changeTrustResult.ChangeTrustResult.schema)
        ),
        jsXdr.case(
          "allowTrust",
          7,
          jsXdr.field("allowTrustResult", allowTrustResult.AllowTrustResult.schema)
        ),
        jsXdr.case(
          "accountMerge",
          8,
          jsXdr.field("accountMergeResult", accountMergeResult.AccountMergeResult.schema)
        ),
        jsXdr.case("inflation", 9, jsXdr.field("inflationResult", inflationResult.InflationResult.schema)),
        jsXdr.case(
          "manageData",
          10,
          jsXdr.field("manageDataResult", manageDataResult.ManageDataResult.schema)
        ),
        jsXdr.case(
          "bumpSequence",
          11,
          jsXdr.field("bumpSeqResult", bumpSequenceResult.BumpSequenceResult.schema)
        ),
        jsXdr.case(
          "manageBuyOffer",
          12,
          jsXdr.field("manageBuyOfferResult", manageBuyOfferResult.ManageBuyOfferResult.schema)
        ),
        jsXdr.case(
          "pathPaymentStrictSend",
          13,
          jsXdr.field(
            "pathPaymentStrictSendResult",
            pathPaymentStrictSendResult.PathPaymentStrictSendResult.schema
          )
        ),
        jsXdr.case(
          "createClaimableBalance",
          14,
          jsXdr.field(
            "createClaimableBalanceResult",
            createClaimableBalanceResult.CreateClaimableBalanceResult.schema
          )
        ),
        jsXdr.case(
          "claimClaimableBalance",
          15,
          jsXdr.field(
            "claimClaimableBalanceResult",
            claimClaimableBalanceResult.ClaimClaimableBalanceResult.schema
          )
        ),
        jsXdr.case(
          "beginSponsoringFutureReserves",
          16,
          jsXdr.field(
            "beginSponsoringFutureReservesResult",
            beginSponsoringFutureReservesResult.BeginSponsoringFutureReservesResult.schema
          )
        ),
        jsXdr.case(
          "endSponsoringFutureReserves",
          17,
          jsXdr.field(
            "endSponsoringFutureReservesResult",
            endSponsoringFutureReservesResult.EndSponsoringFutureReservesResult.schema
          )
        ),
        jsXdr.case(
          "revokeSponsorship",
          18,
          jsXdr.field("revokeSponsorshipResult", revokeSponsorshipResult.RevokeSponsorshipResult.schema)
        ),
        jsXdr.case("clawback", 19, jsXdr.field("clawbackResult", clawbackResult.ClawbackResult.schema)),
        jsXdr.case(
          "clawbackClaimableBalance",
          20,
          jsXdr.field(
            "clawbackClaimableBalanceResult",
            clawbackClaimableBalanceResult.ClawbackClaimableBalanceResult.schema
          )
        ),
        jsXdr.case(
          "setTrustLineFlags",
          21,
          jsXdr.field("setTrustLineFlagsResult", setTrustLineFlagsResult.SetTrustLineFlagsResult.schema)
        ),
        jsXdr.case(
          "liquidityPoolDeposit",
          22,
          jsXdr.field(
            "liquidityPoolDepositResult",
            liquidityPoolDepositResult.LiquidityPoolDepositResult.schema
          )
        ),
        jsXdr.case(
          "liquidityPoolWithdraw",
          23,
          jsXdr.field(
            "liquidityPoolWithdrawResult",
            liquidityPoolWithdrawResult.LiquidityPoolWithdrawResult.schema
          )
        ),
        jsXdr.case(
          "invokeHostFunction",
          24,
          jsXdr.field("invokeHostFunctionResult", invokeHostFunctionResult.InvokeHostFunctionResult.schema)
        ),
        jsXdr.case(
          "extendFootprintTtl",
          25,
          jsXdr.field("extendFootprintTtlResult", extendFootprintTtlResult.ExtendFootprintTtlResult.schema)
        ),
        jsXdr.case(
          "restoreFootprint",
          26,
          jsXdr.field("restoreFootprintResult", restoreFootprintResult.RestoreFootprintResult.schema)
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
          createAccountResult.CreateAccountResult.fromXdrObject(wire.createAccountResult)
        );
      case 1:
        return new OperationResultTrPayment(
          paymentResult.PaymentResult.fromXdrObject(wire.paymentResult)
        );
      case 2:
        return new OperationResultTrPathPaymentStrictReceive(
          pathPaymentStrictReceiveResult.PathPaymentStrictReceiveResult.fromXdrObject(
            wire.pathPaymentStrictReceiveResult
          )
        );
      case 3:
        return new OperationResultTrManageSellOffer(
          manageSellOfferResult.ManageSellOfferResult.fromXdrObject(wire.manageSellOfferResult)
        );
      case 4:
        return new OperationResultTrCreatePassiveSellOffer(
          manageSellOfferResult.ManageSellOfferResult.fromXdrObject(
            wire.createPassiveSellOfferResult
          )
        );
      case 5:
        return new OperationResultTrSetOptions(
          setOptionsResult.SetOptionsResult.fromXdrObject(wire.setOptionsResult)
        );
      case 6:
        return new OperationResultTrChangeTrust(
          changeTrustResult.ChangeTrustResult.fromXdrObject(wire.changeTrustResult)
        );
      case 7:
        return new OperationResultTrAllowTrust(
          allowTrustResult.AllowTrustResult.fromXdrObject(wire.allowTrustResult)
        );
      case 8:
        return new OperationResultTrAccountMerge(
          accountMergeResult.AccountMergeResult.fromXdrObject(wire.accountMergeResult)
        );
      case 9:
        return new OperationResultTrInflation(
          inflationResult.InflationResult.fromXdrObject(wire.inflationResult)
        );
      case 10:
        return new OperationResultTrManageData(
          manageDataResult.ManageDataResult.fromXdrObject(wire.manageDataResult)
        );
      case 11:
        return new OperationResultTrBumpSequence(
          bumpSequenceResult.BumpSequenceResult.fromXdrObject(wire.bumpSeqResult)
        );
      case 12:
        return new OperationResultTrManageBuyOffer(
          manageBuyOfferResult.ManageBuyOfferResult.fromXdrObject(wire.manageBuyOfferResult)
        );
      case 13:
        return new OperationResultTrPathPaymentStrictSend(
          pathPaymentStrictSendResult.PathPaymentStrictSendResult.fromXdrObject(
            wire.pathPaymentStrictSendResult
          )
        );
      case 14:
        return new OperationResultTrCreateClaimableBalance(
          createClaimableBalanceResult.CreateClaimableBalanceResult.fromXdrObject(
            wire.createClaimableBalanceResult
          )
        );
      case 15:
        return new OperationResultTrClaimClaimableBalance(
          claimClaimableBalanceResult.ClaimClaimableBalanceResult.fromXdrObject(
            wire.claimClaimableBalanceResult
          )
        );
      case 16:
        return new OperationResultTrBeginSponsoringFutureReserves(
          beginSponsoringFutureReservesResult.BeginSponsoringFutureReservesResult.fromXdrObject(
            wire.beginSponsoringFutureReservesResult
          )
        );
      case 17:
        return new OperationResultTrEndSponsoringFutureReserves(
          endSponsoringFutureReservesResult.EndSponsoringFutureReservesResult.fromXdrObject(
            wire.endSponsoringFutureReservesResult
          )
        );
      case 18:
        return new OperationResultTrRevokeSponsorship(
          revokeSponsorshipResult.RevokeSponsorshipResult.fromXdrObject(wire.revokeSponsorshipResult)
        );
      case 19:
        return new OperationResultTrClawback(
          clawbackResult.ClawbackResult.fromXdrObject(wire.clawbackResult)
        );
      case 20:
        return new OperationResultTrClawbackClaimableBalance(
          clawbackClaimableBalanceResult.ClawbackClaimableBalanceResult.fromXdrObject(
            wire.clawbackClaimableBalanceResult
          )
        );
      case 21:
        return new OperationResultTrSetTrustLineFlags(
          setTrustLineFlagsResult.SetTrustLineFlagsResult.fromXdrObject(wire.setTrustLineFlagsResult)
        );
      case 22:
        return new OperationResultTrLiquidityPoolDeposit(
          liquidityPoolDepositResult.LiquidityPoolDepositResult.fromXdrObject(
            wire.liquidityPoolDepositResult
          )
        );
      case 23:
        return new OperationResultTrLiquidityPoolWithdraw(
          liquidityPoolWithdrawResult.LiquidityPoolWithdrawResult.fromXdrObject(
            wire.liquidityPoolWithdrawResult
          )
        );
      case 24:
        return new OperationResultTrInvokeHostFunction(
          invokeHostFunctionResult.InvokeHostFunctionResult.fromXdrObject(wire.invokeHostFunctionResult)
        );
      case 25:
        return new OperationResultTrExtendFootprintTtl(
          extendFootprintTtlResult.ExtendFootprintTtlResult.fromXdrObject(wire.extendFootprintTtlResult)
        );
      case 26:
        return new OperationResultTrRestoreFootprint(
          restoreFootprintResult.RestoreFootprintResult.fromXdrObject(wire.restoreFootprintResult)
        );
    }
    throw new jsXdr.XdrError(
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

exports.OperationResultTr = OperationResultTr;
exports.OperationResultTrAccountMerge = OperationResultTrAccountMerge;
exports.OperationResultTrAllowTrust = OperationResultTrAllowTrust;
exports.OperationResultTrBeginSponsoringFutureReserves = OperationResultTrBeginSponsoringFutureReserves;
exports.OperationResultTrBumpSequence = OperationResultTrBumpSequence;
exports.OperationResultTrChangeTrust = OperationResultTrChangeTrust;
exports.OperationResultTrClaimClaimableBalance = OperationResultTrClaimClaimableBalance;
exports.OperationResultTrClawback = OperationResultTrClawback;
exports.OperationResultTrClawbackClaimableBalance = OperationResultTrClawbackClaimableBalance;
exports.OperationResultTrCreateAccount = OperationResultTrCreateAccount;
exports.OperationResultTrCreateClaimableBalance = OperationResultTrCreateClaimableBalance;
exports.OperationResultTrCreatePassiveSellOffer = OperationResultTrCreatePassiveSellOffer;
exports.OperationResultTrEndSponsoringFutureReserves = OperationResultTrEndSponsoringFutureReserves;
exports.OperationResultTrExtendFootprintTtl = OperationResultTrExtendFootprintTtl;
exports.OperationResultTrInflation = OperationResultTrInflation;
exports.OperationResultTrInvokeHostFunction = OperationResultTrInvokeHostFunction;
exports.OperationResultTrLiquidityPoolDeposit = OperationResultTrLiquidityPoolDeposit;
exports.OperationResultTrLiquidityPoolWithdraw = OperationResultTrLiquidityPoolWithdraw;
exports.OperationResultTrManageBuyOffer = OperationResultTrManageBuyOffer;
exports.OperationResultTrManageData = OperationResultTrManageData;
exports.OperationResultTrManageSellOffer = OperationResultTrManageSellOffer;
exports.OperationResultTrPathPaymentStrictReceive = OperationResultTrPathPaymentStrictReceive;
exports.OperationResultTrPathPaymentStrictSend = OperationResultTrPathPaymentStrictSend;
exports.OperationResultTrPayment = OperationResultTrPayment;
exports.OperationResultTrRestoreFootprint = OperationResultTrRestoreFootprint;
exports.OperationResultTrRevokeSponsorship = OperationResultTrRevokeSponsorship;
exports.OperationResultTrSetOptions = OperationResultTrSetOptions;
exports.OperationResultTrSetTrustLineFlags = OperationResultTrSetTrustLineFlags;
//# sourceMappingURL=operation-result-tr.js.map
