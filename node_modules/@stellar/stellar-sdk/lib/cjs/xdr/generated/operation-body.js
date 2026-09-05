'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var operationType = require('./operation-type.js');
var createAccountOp = require('./create-account-op.js');
var paymentOp = require('./payment-op.js');
var pathPaymentStrictReceiveOp = require('./path-payment-strict-receive-op.js');
var manageSellOfferOp = require('./manage-sell-offer-op.js');
var createPassiveSellOfferOp = require('./create-passive-sell-offer-op.js');
var setOptionsOp = require('./set-options-op.js');
var changeTrustOp = require('./change-trust-op.js');
var allowTrustOp = require('./allow-trust-op.js');
var muxedAccount = require('./muxed-account.js');
var manageDataOp = require('./manage-data-op.js');
var bumpSequenceOp = require('./bump-sequence-op.js');
var manageBuyOfferOp = require('./manage-buy-offer-op.js');
var pathPaymentStrictSendOp = require('./path-payment-strict-send-op.js');
var createClaimableBalanceOp = require('./create-claimable-balance-op.js');
var claimClaimableBalanceOp = require('./claim-claimable-balance-op.js');
var beginSponsoringFutureReservesOp = require('./begin-sponsoring-future-reserves-op.js');
var revokeSponsorshipOp = require('./revoke-sponsorship-op.js');
var clawbackOp = require('./clawback-op.js');
var clawbackClaimableBalanceOp = require('./clawback-claimable-balance-op.js');
var setTrustLineFlagsOp = require('./set-trust-line-flags-op.js');
var liquidityPoolDepositOp = require('./liquidity-pool-deposit-op.js');
var liquidityPoolWithdrawOp = require('./liquidity-pool-withdraw-op.js');
var invokeHostFunctionOp = require('./invoke-host-function-op.js');
var extendFootprintTtlOp = require('./extend-footprint-ttl-op.js');
var restoreFootprintOp = require('./restore-footprint-op.js');

class OperationBodyBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === OperationBodyBase) {
      throw new TypeError(
        "new xdr.OperationBody(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OperationBody.createAccount(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("OperationBody", {
    switchOn: operationType.OperationType.schema,
    cases: [
      jsXdr.case(
        "createAccount",
        0,
        jsXdr.field("createAccountOp", createAccountOp.CreateAccountOp.schema)
      ),
      jsXdr.case("payment", 1, jsXdr.field("paymentOp", paymentOp.PaymentOp.schema)),
      jsXdr.case(
        "pathPaymentStrictReceive",
        2,
        jsXdr.field("pathPaymentStrictReceiveOp", pathPaymentStrictReceiveOp.PathPaymentStrictReceiveOp.schema)
      ),
      jsXdr.case(
        "manageSellOffer",
        3,
        jsXdr.field("manageSellOfferOp", manageSellOfferOp.ManageSellOfferOp.schema)
      ),
      jsXdr.case(
        "createPassiveSellOffer",
        4,
        jsXdr.field("createPassiveSellOfferOp", createPassiveSellOfferOp.CreatePassiveSellOfferOp.schema)
      ),
      jsXdr.case("setOptions", 5, jsXdr.field("setOptionsOp", setOptionsOp.SetOptionsOp.schema)),
      jsXdr.case("changeTrust", 6, jsXdr.field("changeTrustOp", changeTrustOp.ChangeTrustOp.schema)),
      jsXdr.case("allowTrust", 7, jsXdr.field("allowTrustOp", allowTrustOp.AllowTrustOp.schema)),
      jsXdr.case("accountMerge", 8, jsXdr.field("destination", muxedAccount.MuxedAccount.schema)),
      jsXdr.case("inflation", 9, jsXdr.void()),
      jsXdr.case("manageData", 10, jsXdr.field("manageDataOp", manageDataOp.ManageDataOp.schema)),
      jsXdr.case("bumpSequence", 11, jsXdr.field("bumpSequenceOp", bumpSequenceOp.BumpSequenceOp.schema)),
      jsXdr.case(
        "manageBuyOffer",
        12,
        jsXdr.field("manageBuyOfferOp", manageBuyOfferOp.ManageBuyOfferOp.schema)
      ),
      jsXdr.case(
        "pathPaymentStrictSend",
        13,
        jsXdr.field("pathPaymentStrictSendOp", pathPaymentStrictSendOp.PathPaymentStrictSendOp.schema)
      ),
      jsXdr.case(
        "createClaimableBalance",
        14,
        jsXdr.field("createClaimableBalanceOp", createClaimableBalanceOp.CreateClaimableBalanceOp.schema)
      ),
      jsXdr.case(
        "claimClaimableBalance",
        15,
        jsXdr.field("claimClaimableBalanceOp", claimClaimableBalanceOp.ClaimClaimableBalanceOp.schema)
      ),
      jsXdr.case(
        "beginSponsoringFutureReserves",
        16,
        jsXdr.field(
          "beginSponsoringFutureReservesOp",
          beginSponsoringFutureReservesOp.BeginSponsoringFutureReservesOp.schema
        )
      ),
      jsXdr.case("endSponsoringFutureReserves", 17, jsXdr.void()),
      jsXdr.case(
        "revokeSponsorship",
        18,
        jsXdr.field("revokeSponsorshipOp", revokeSponsorshipOp.RevokeSponsorshipOp.schema)
      ),
      jsXdr.case("clawback", 19, jsXdr.field("clawbackOp", clawbackOp.ClawbackOp.schema)),
      jsXdr.case(
        "clawbackClaimableBalance",
        20,
        jsXdr.field("clawbackClaimableBalanceOp", clawbackClaimableBalanceOp.ClawbackClaimableBalanceOp.schema)
      ),
      jsXdr.case(
        "setTrustLineFlags",
        21,
        jsXdr.field("setTrustLineFlagsOp", setTrustLineFlagsOp.SetTrustLineFlagsOp.schema)
      ),
      jsXdr.case(
        "liquidityPoolDeposit",
        22,
        jsXdr.field("liquidityPoolDepositOp", liquidityPoolDepositOp.LiquidityPoolDepositOp.schema)
      ),
      jsXdr.case(
        "liquidityPoolWithdraw",
        23,
        jsXdr.field("liquidityPoolWithdrawOp", liquidityPoolWithdrawOp.LiquidityPoolWithdrawOp.schema)
      ),
      jsXdr.case(
        "invokeHostFunction",
        24,
        jsXdr.field("invokeHostFunctionOp", invokeHostFunctionOp.InvokeHostFunctionOp.schema)
      ),
      jsXdr.case(
        "extendFootprintTtl",
        25,
        jsXdr.field("extendFootprintTtlOp", extendFootprintTtlOp.ExtendFootprintTtlOp.schema)
      ),
      jsXdr.case(
        "restoreFootprint",
        26,
        jsXdr.field("restoreFootprintOp", restoreFootprintOp.RestoreFootprintOp.schema)
      )
    ]
  });
  static createAccount(createAccountOp) {
    return new OperationBodyCreateAccount(createAccountOp);
  }
  static payment(paymentOp) {
    return new OperationBodyPayment(paymentOp);
  }
  static pathPaymentStrictReceive(pathPaymentStrictReceiveOp) {
    return new OperationBodyPathPaymentStrictReceive(
      pathPaymentStrictReceiveOp
    );
  }
  static manageSellOffer(manageSellOfferOp) {
    return new OperationBodyManageSellOffer(manageSellOfferOp);
  }
  static createPassiveSellOffer(createPassiveSellOfferOp) {
    return new OperationBodyCreatePassiveSellOffer(createPassiveSellOfferOp);
  }
  static setOptions(setOptionsOp) {
    return new OperationBodySetOptions(setOptionsOp);
  }
  static changeTrust(changeTrustOp) {
    return new OperationBodyChangeTrust(changeTrustOp);
  }
  static allowTrust(allowTrustOp) {
    return new OperationBodyAllowTrust(allowTrustOp);
  }
  static accountMerge(destination) {
    return new OperationBodyAccountMerge(destination);
  }
  static inflation() {
    return new OperationBodyInflation();
  }
  static manageData(manageDataOp) {
    return new OperationBodyManageData(manageDataOp);
  }
  static bumpSequence(bumpSequenceOp) {
    return new OperationBodyBumpSequence(bumpSequenceOp);
  }
  static manageBuyOffer(manageBuyOfferOp) {
    return new OperationBodyManageBuyOffer(manageBuyOfferOp);
  }
  static pathPaymentStrictSend(pathPaymentStrictSendOp) {
    return new OperationBodyPathPaymentStrictSend(pathPaymentStrictSendOp);
  }
  static createClaimableBalance(createClaimableBalanceOp) {
    return new OperationBodyCreateClaimableBalance(createClaimableBalanceOp);
  }
  static claimClaimableBalance(claimClaimableBalanceOp) {
    return new OperationBodyClaimClaimableBalance(claimClaimableBalanceOp);
  }
  static beginSponsoringFutureReserves(beginSponsoringFutureReservesOp) {
    return new OperationBodyBeginSponsoringFutureReserves(
      beginSponsoringFutureReservesOp
    );
  }
  static endSponsoringFutureReserves() {
    return new OperationBodyEndSponsoringFutureReserves();
  }
  static revokeSponsorship(revokeSponsorshipOp) {
    return new OperationBodyRevokeSponsorship(revokeSponsorshipOp);
  }
  static clawback(clawbackOp) {
    return new OperationBodyClawback(clawbackOp);
  }
  static clawbackClaimableBalance(clawbackClaimableBalanceOp) {
    return new OperationBodyClawbackClaimableBalance(
      clawbackClaimableBalanceOp
    );
  }
  static setTrustLineFlags(setTrustLineFlagsOp) {
    return new OperationBodySetTrustLineFlags(setTrustLineFlagsOp);
  }
  static liquidityPoolDeposit(liquidityPoolDepositOp) {
    return new OperationBodyLiquidityPoolDeposit(liquidityPoolDepositOp);
  }
  static liquidityPoolWithdraw(liquidityPoolWithdrawOp) {
    return new OperationBodyLiquidityPoolWithdraw(liquidityPoolWithdrawOp);
  }
  static invokeHostFunction(invokeHostFunctionOp) {
    return new OperationBodyInvokeHostFunction(invokeHostFunctionOp);
  }
  static extendFootprintTtl(extendFootprintTtlOp) {
    return new OperationBodyExtendFootprintTtl(extendFootprintTtlOp);
  }
  static restoreFootprint(restoreFootprintOp) {
    return new OperationBodyRestoreFootprint(restoreFootprintOp);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new OperationBodyCreateAccount(
          createAccountOp.CreateAccountOp.fromXdrObject(wire.createAccountOp)
        );
      case 1:
        return new OperationBodyPayment(
          paymentOp.PaymentOp.fromXdrObject(wire.paymentOp)
        );
      case 2:
        return new OperationBodyPathPaymentStrictReceive(
          pathPaymentStrictReceiveOp.PathPaymentStrictReceiveOp.fromXdrObject(
            wire.pathPaymentStrictReceiveOp
          )
        );
      case 3:
        return new OperationBodyManageSellOffer(
          manageSellOfferOp.ManageSellOfferOp.fromXdrObject(wire.manageSellOfferOp)
        );
      case 4:
        return new OperationBodyCreatePassiveSellOffer(
          createPassiveSellOfferOp.CreatePassiveSellOfferOp.fromXdrObject(wire.createPassiveSellOfferOp)
        );
      case 5:
        return new OperationBodySetOptions(
          setOptionsOp.SetOptionsOp.fromXdrObject(wire.setOptionsOp)
        );
      case 6:
        return new OperationBodyChangeTrust(
          changeTrustOp.ChangeTrustOp.fromXdrObject(wire.changeTrustOp)
        );
      case 7:
        return new OperationBodyAllowTrust(
          allowTrustOp.AllowTrustOp.fromXdrObject(wire.allowTrustOp)
        );
      case 8:
        return new OperationBodyAccountMerge(
          muxedAccount.MuxedAccount.fromXdrObject(wire.destination)
        );
      case 9:
        return new OperationBodyInflation();
      case 10:
        return new OperationBodyManageData(
          manageDataOp.ManageDataOp.fromXdrObject(wire.manageDataOp)
        );
      case 11:
        return new OperationBodyBumpSequence(
          bumpSequenceOp.BumpSequenceOp.fromXdrObject(wire.bumpSequenceOp)
        );
      case 12:
        return new OperationBodyManageBuyOffer(
          manageBuyOfferOp.ManageBuyOfferOp.fromXdrObject(wire.manageBuyOfferOp)
        );
      case 13:
        return new OperationBodyPathPaymentStrictSend(
          pathPaymentStrictSendOp.PathPaymentStrictSendOp.fromXdrObject(wire.pathPaymentStrictSendOp)
        );
      case 14:
        return new OperationBodyCreateClaimableBalance(
          createClaimableBalanceOp.CreateClaimableBalanceOp.fromXdrObject(wire.createClaimableBalanceOp)
        );
      case 15:
        return new OperationBodyClaimClaimableBalance(
          claimClaimableBalanceOp.ClaimClaimableBalanceOp.fromXdrObject(wire.claimClaimableBalanceOp)
        );
      case 16:
        return new OperationBodyBeginSponsoringFutureReserves(
          beginSponsoringFutureReservesOp.BeginSponsoringFutureReservesOp.fromXdrObject(
            wire.beginSponsoringFutureReservesOp
          )
        );
      case 17:
        return new OperationBodyEndSponsoringFutureReserves();
      case 18:
        return new OperationBodyRevokeSponsorship(
          revokeSponsorshipOp.RevokeSponsorshipOp.fromXdrObject(wire.revokeSponsorshipOp)
        );
      case 19:
        return new OperationBodyClawback(
          clawbackOp.ClawbackOp.fromXdrObject(wire.clawbackOp)
        );
      case 20:
        return new OperationBodyClawbackClaimableBalance(
          clawbackClaimableBalanceOp.ClawbackClaimableBalanceOp.fromXdrObject(
            wire.clawbackClaimableBalanceOp
          )
        );
      case 21:
        return new OperationBodySetTrustLineFlags(
          setTrustLineFlagsOp.SetTrustLineFlagsOp.fromXdrObject(wire.setTrustLineFlagsOp)
        );
      case 22:
        return new OperationBodyLiquidityPoolDeposit(
          liquidityPoolDepositOp.LiquidityPoolDepositOp.fromXdrObject(wire.liquidityPoolDepositOp)
        );
      case 23:
        return new OperationBodyLiquidityPoolWithdraw(
          liquidityPoolWithdrawOp.LiquidityPoolWithdrawOp.fromXdrObject(wire.liquidityPoolWithdrawOp)
        );
      case 24:
        return new OperationBodyInvokeHostFunction(
          invokeHostFunctionOp.InvokeHostFunctionOp.fromXdrObject(wire.invokeHostFunctionOp)
        );
      case 25:
        return new OperationBodyExtendFootprintTtl(
          extendFootprintTtlOp.ExtendFootprintTtlOp.fromXdrObject(wire.extendFootprintTtlOp)
        );
      case 26:
        return new OperationBodyRestoreFootprint(
          restoreFootprintOp.RestoreFootprintOp.fromXdrObject(wire.restoreFootprintOp)
        );
    }
    throw new jsXdr.XdrError(
      `OperationBody: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete OperationBody variant.
   * Use this instead of `instanceof OperationBody`: the exported `OperationBody` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `OperationBody.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof OperationBodyBase;
  }
}
class OperationBodyCreateAccount extends OperationBodyBase {
  type = "createAccount";
  createAccountOp;
  constructor(createAccountOp) {
    super();
    this.createAccountOp = createAccountOp;
  }
  get value() {
    return this.createAccountOp;
  }
  toXdrObject() {
    return { type: 0, createAccountOp: this.createAccountOp.toXdrObject() };
  }
}
class OperationBodyPayment extends OperationBodyBase {
  type = "payment";
  paymentOp;
  constructor(paymentOp) {
    super();
    this.paymentOp = paymentOp;
  }
  get value() {
    return this.paymentOp;
  }
  toXdrObject() {
    return { type: 1, paymentOp: this.paymentOp.toXdrObject() };
  }
}
class OperationBodyPathPaymentStrictReceive extends OperationBodyBase {
  type = "pathPaymentStrictReceive";
  pathPaymentStrictReceiveOp;
  constructor(pathPaymentStrictReceiveOp) {
    super();
    this.pathPaymentStrictReceiveOp = pathPaymentStrictReceiveOp;
  }
  get value() {
    return this.pathPaymentStrictReceiveOp;
  }
  toXdrObject() {
    return {
      type: 2,
      pathPaymentStrictReceiveOp: this.pathPaymentStrictReceiveOp.toXdrObject()
    };
  }
}
class OperationBodyManageSellOffer extends OperationBodyBase {
  type = "manageSellOffer";
  manageSellOfferOp;
  constructor(manageSellOfferOp) {
    super();
    this.manageSellOfferOp = manageSellOfferOp;
  }
  get value() {
    return this.manageSellOfferOp;
  }
  toXdrObject() {
    return { type: 3, manageSellOfferOp: this.manageSellOfferOp.toXdrObject() };
  }
}
class OperationBodyCreatePassiveSellOffer extends OperationBodyBase {
  type = "createPassiveSellOffer";
  createPassiveSellOfferOp;
  constructor(createPassiveSellOfferOp) {
    super();
    this.createPassiveSellOfferOp = createPassiveSellOfferOp;
  }
  get value() {
    return this.createPassiveSellOfferOp;
  }
  toXdrObject() {
    return {
      type: 4,
      createPassiveSellOfferOp: this.createPassiveSellOfferOp.toXdrObject()
    };
  }
}
class OperationBodySetOptions extends OperationBodyBase {
  type = "setOptions";
  setOptionsOp;
  constructor(setOptionsOp) {
    super();
    this.setOptionsOp = setOptionsOp;
  }
  get value() {
    return this.setOptionsOp;
  }
  toXdrObject() {
    return { type: 5, setOptionsOp: this.setOptionsOp.toXdrObject() };
  }
}
class OperationBodyChangeTrust extends OperationBodyBase {
  type = "changeTrust";
  changeTrustOp;
  constructor(changeTrustOp) {
    super();
    this.changeTrustOp = changeTrustOp;
  }
  get value() {
    return this.changeTrustOp;
  }
  toXdrObject() {
    return { type: 6, changeTrustOp: this.changeTrustOp.toXdrObject() };
  }
}
class OperationBodyAllowTrust extends OperationBodyBase {
  type = "allowTrust";
  allowTrustOp;
  constructor(allowTrustOp) {
    super();
    this.allowTrustOp = allowTrustOp;
  }
  get value() {
    return this.allowTrustOp;
  }
  toXdrObject() {
    return { type: 7, allowTrustOp: this.allowTrustOp.toXdrObject() };
  }
}
class OperationBodyAccountMerge extends OperationBodyBase {
  type = "accountMerge";
  destination;
  constructor(destination) {
    super();
    this.destination = destination;
  }
  get value() {
    return this.destination;
  }
  toXdrObject() {
    return { type: 8, destination: this.destination.toXdrObject() };
  }
}
class OperationBodyInflation extends OperationBodyBase {
  type = "inflation";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 9 };
  }
}
class OperationBodyManageData extends OperationBodyBase {
  type = "manageData";
  manageDataOp;
  constructor(manageDataOp) {
    super();
    this.manageDataOp = manageDataOp;
  }
  get value() {
    return this.manageDataOp;
  }
  toXdrObject() {
    return { type: 10, manageDataOp: this.manageDataOp.toXdrObject() };
  }
}
class OperationBodyBumpSequence extends OperationBodyBase {
  type = "bumpSequence";
  bumpSequenceOp;
  constructor(bumpSequenceOp) {
    super();
    this.bumpSequenceOp = bumpSequenceOp;
  }
  get value() {
    return this.bumpSequenceOp;
  }
  toXdrObject() {
    return { type: 11, bumpSequenceOp: this.bumpSequenceOp.toXdrObject() };
  }
}
class OperationBodyManageBuyOffer extends OperationBodyBase {
  type = "manageBuyOffer";
  manageBuyOfferOp;
  constructor(manageBuyOfferOp) {
    super();
    this.manageBuyOfferOp = manageBuyOfferOp;
  }
  get value() {
    return this.manageBuyOfferOp;
  }
  toXdrObject() {
    return { type: 12, manageBuyOfferOp: this.manageBuyOfferOp.toXdrObject() };
  }
}
class OperationBodyPathPaymentStrictSend extends OperationBodyBase {
  type = "pathPaymentStrictSend";
  pathPaymentStrictSendOp;
  constructor(pathPaymentStrictSendOp) {
    super();
    this.pathPaymentStrictSendOp = pathPaymentStrictSendOp;
  }
  get value() {
    return this.pathPaymentStrictSendOp;
  }
  toXdrObject() {
    return {
      type: 13,
      pathPaymentStrictSendOp: this.pathPaymentStrictSendOp.toXdrObject()
    };
  }
}
class OperationBodyCreateClaimableBalance extends OperationBodyBase {
  type = "createClaimableBalance";
  createClaimableBalanceOp;
  constructor(createClaimableBalanceOp) {
    super();
    this.createClaimableBalanceOp = createClaimableBalanceOp;
  }
  get value() {
    return this.createClaimableBalanceOp;
  }
  toXdrObject() {
    return {
      type: 14,
      createClaimableBalanceOp: this.createClaimableBalanceOp.toXdrObject()
    };
  }
}
class OperationBodyClaimClaimableBalance extends OperationBodyBase {
  type = "claimClaimableBalance";
  claimClaimableBalanceOp;
  constructor(claimClaimableBalanceOp) {
    super();
    this.claimClaimableBalanceOp = claimClaimableBalanceOp;
  }
  get value() {
    return this.claimClaimableBalanceOp;
  }
  toXdrObject() {
    return {
      type: 15,
      claimClaimableBalanceOp: this.claimClaimableBalanceOp.toXdrObject()
    };
  }
}
class OperationBodyBeginSponsoringFutureReserves extends OperationBodyBase {
  type = "beginSponsoringFutureReserves";
  beginSponsoringFutureReservesOp;
  constructor(beginSponsoringFutureReservesOp) {
    super();
    this.beginSponsoringFutureReservesOp = beginSponsoringFutureReservesOp;
  }
  get value() {
    return this.beginSponsoringFutureReservesOp;
  }
  toXdrObject() {
    return {
      type: 16,
      beginSponsoringFutureReservesOp: this.beginSponsoringFutureReservesOp.toXdrObject()
    };
  }
}
class OperationBodyEndSponsoringFutureReserves extends OperationBodyBase {
  type = "endSponsoringFutureReserves";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 17 };
  }
}
class OperationBodyRevokeSponsorship extends OperationBodyBase {
  type = "revokeSponsorship";
  revokeSponsorshipOp;
  constructor(revokeSponsorshipOp) {
    super();
    this.revokeSponsorshipOp = revokeSponsorshipOp;
  }
  get value() {
    return this.revokeSponsorshipOp;
  }
  toXdrObject() {
    return {
      type: 18,
      revokeSponsorshipOp: this.revokeSponsorshipOp.toXdrObject()
    };
  }
}
class OperationBodyClawback extends OperationBodyBase {
  type = "clawback";
  clawbackOp;
  constructor(clawbackOp) {
    super();
    this.clawbackOp = clawbackOp;
  }
  get value() {
    return this.clawbackOp;
  }
  toXdrObject() {
    return { type: 19, clawbackOp: this.clawbackOp.toXdrObject() };
  }
}
class OperationBodyClawbackClaimableBalance extends OperationBodyBase {
  type = "clawbackClaimableBalance";
  clawbackClaimableBalanceOp;
  constructor(clawbackClaimableBalanceOp) {
    super();
    this.clawbackClaimableBalanceOp = clawbackClaimableBalanceOp;
  }
  get value() {
    return this.clawbackClaimableBalanceOp;
  }
  toXdrObject() {
    return {
      type: 20,
      clawbackClaimableBalanceOp: this.clawbackClaimableBalanceOp.toXdrObject()
    };
  }
}
class OperationBodySetTrustLineFlags extends OperationBodyBase {
  type = "setTrustLineFlags";
  setTrustLineFlagsOp;
  constructor(setTrustLineFlagsOp) {
    super();
    this.setTrustLineFlagsOp = setTrustLineFlagsOp;
  }
  get value() {
    return this.setTrustLineFlagsOp;
  }
  toXdrObject() {
    return {
      type: 21,
      setTrustLineFlagsOp: this.setTrustLineFlagsOp.toXdrObject()
    };
  }
}
class OperationBodyLiquidityPoolDeposit extends OperationBodyBase {
  type = "liquidityPoolDeposit";
  liquidityPoolDepositOp;
  constructor(liquidityPoolDepositOp) {
    super();
    this.liquidityPoolDepositOp = liquidityPoolDepositOp;
  }
  get value() {
    return this.liquidityPoolDepositOp;
  }
  toXdrObject() {
    return {
      type: 22,
      liquidityPoolDepositOp: this.liquidityPoolDepositOp.toXdrObject()
    };
  }
}
class OperationBodyLiquidityPoolWithdraw extends OperationBodyBase {
  type = "liquidityPoolWithdraw";
  liquidityPoolWithdrawOp;
  constructor(liquidityPoolWithdrawOp) {
    super();
    this.liquidityPoolWithdrawOp = liquidityPoolWithdrawOp;
  }
  get value() {
    return this.liquidityPoolWithdrawOp;
  }
  toXdrObject() {
    return {
      type: 23,
      liquidityPoolWithdrawOp: this.liquidityPoolWithdrawOp.toXdrObject()
    };
  }
}
class OperationBodyInvokeHostFunction extends OperationBodyBase {
  type = "invokeHostFunction";
  invokeHostFunctionOp;
  constructor(invokeHostFunctionOp) {
    super();
    this.invokeHostFunctionOp = invokeHostFunctionOp;
  }
  get value() {
    return this.invokeHostFunctionOp;
  }
  toXdrObject() {
    return {
      type: 24,
      invokeHostFunctionOp: this.invokeHostFunctionOp.toXdrObject()
    };
  }
}
class OperationBodyExtendFootprintTtl extends OperationBodyBase {
  type = "extendFootprintTtl";
  extendFootprintTtlOp;
  constructor(extendFootprintTtlOp) {
    super();
    this.extendFootprintTtlOp = extendFootprintTtlOp;
  }
  get value() {
    return this.extendFootprintTtlOp;
  }
  toXdrObject() {
    return {
      type: 25,
      extendFootprintTtlOp: this.extendFootprintTtlOp.toXdrObject()
    };
  }
}
class OperationBodyRestoreFootprint extends OperationBodyBase {
  type = "restoreFootprint";
  restoreFootprintOp;
  constructor(restoreFootprintOp) {
    super();
    this.restoreFootprintOp = restoreFootprintOp;
  }
  get value() {
    return this.restoreFootprintOp;
  }
  toXdrObject() {
    return {
      type: 26,
      restoreFootprintOp: this.restoreFootprintOp.toXdrObject()
    };
  }
}
const OperationBody = OperationBodyBase;

exports.OperationBody = OperationBody;
exports.OperationBodyAccountMerge = OperationBodyAccountMerge;
exports.OperationBodyAllowTrust = OperationBodyAllowTrust;
exports.OperationBodyBeginSponsoringFutureReserves = OperationBodyBeginSponsoringFutureReserves;
exports.OperationBodyBumpSequence = OperationBodyBumpSequence;
exports.OperationBodyChangeTrust = OperationBodyChangeTrust;
exports.OperationBodyClaimClaimableBalance = OperationBodyClaimClaimableBalance;
exports.OperationBodyClawback = OperationBodyClawback;
exports.OperationBodyClawbackClaimableBalance = OperationBodyClawbackClaimableBalance;
exports.OperationBodyCreateAccount = OperationBodyCreateAccount;
exports.OperationBodyCreateClaimableBalance = OperationBodyCreateClaimableBalance;
exports.OperationBodyCreatePassiveSellOffer = OperationBodyCreatePassiveSellOffer;
exports.OperationBodyEndSponsoringFutureReserves = OperationBodyEndSponsoringFutureReserves;
exports.OperationBodyExtendFootprintTtl = OperationBodyExtendFootprintTtl;
exports.OperationBodyInflation = OperationBodyInflation;
exports.OperationBodyInvokeHostFunction = OperationBodyInvokeHostFunction;
exports.OperationBodyLiquidityPoolDeposit = OperationBodyLiquidityPoolDeposit;
exports.OperationBodyLiquidityPoolWithdraw = OperationBodyLiquidityPoolWithdraw;
exports.OperationBodyManageBuyOffer = OperationBodyManageBuyOffer;
exports.OperationBodyManageData = OperationBodyManageData;
exports.OperationBodyManageSellOffer = OperationBodyManageSellOffer;
exports.OperationBodyPathPaymentStrictReceive = OperationBodyPathPaymentStrictReceive;
exports.OperationBodyPathPaymentStrictSend = OperationBodyPathPaymentStrictSend;
exports.OperationBodyPayment = OperationBodyPayment;
exports.OperationBodyRestoreFootprint = OperationBodyRestoreFootprint;
exports.OperationBodyRevokeSponsorship = OperationBodyRevokeSponsorship;
exports.OperationBodySetOptions = OperationBodySetOptions;
exports.OperationBodySetTrustLineFlags = OperationBodySetTrustLineFlags;
//# sourceMappingURL=operation-body.js.map
