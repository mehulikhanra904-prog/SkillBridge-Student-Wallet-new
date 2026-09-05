import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { OperationType } from './operation-type.js';
import { CreateAccountOp } from './create-account-op.js';
import { PaymentOp } from './payment-op.js';
import { PathPaymentStrictReceiveOp } from './path-payment-strict-receive-op.js';
import { ManageSellOfferOp } from './manage-sell-offer-op.js';
import { CreatePassiveSellOfferOp } from './create-passive-sell-offer-op.js';
import { SetOptionsOp } from './set-options-op.js';
import { ChangeTrustOp } from './change-trust-op.js';
import { AllowTrustOp } from './allow-trust-op.js';
import { MuxedAccount } from './muxed-account.js';
import { ManageDataOp } from './manage-data-op.js';
import { BumpSequenceOp } from './bump-sequence-op.js';
import { ManageBuyOfferOp } from './manage-buy-offer-op.js';
import { PathPaymentStrictSendOp } from './path-payment-strict-send-op.js';
import { CreateClaimableBalanceOp } from './create-claimable-balance-op.js';
import { ClaimClaimableBalanceOp } from './claim-claimable-balance-op.js';
import { BeginSponsoringFutureReservesOp } from './begin-sponsoring-future-reserves-op.js';
import { RevokeSponsorshipOp } from './revoke-sponsorship-op.js';
import { ClawbackOp } from './clawback-op.js';
import { ClawbackClaimableBalanceOp } from './clawback-claimable-balance-op.js';
import { SetTrustLineFlagsOp } from './set-trust-line-flags-op.js';
import { LiquidityPoolDepositOp } from './liquidity-pool-deposit-op.js';
import { LiquidityPoolWithdrawOp } from './liquidity-pool-withdraw-op.js';
import { InvokeHostFunctionOp } from './invoke-host-function-op.js';
import { ExtendFootprintTtlOp } from './extend-footprint-ttl-op.js';
import { RestoreFootprintOp } from './restore-footprint-op.js';

class OperationBodyBase extends XdrValue {
  constructor() {
    super();
    if (new.target === OperationBodyBase) {
      throw new TypeError(
        "new xdr.OperationBody(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OperationBody.createAccount(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("OperationBody", {
    switchOn: OperationType.schema,
    cases: [
      _case(
        "createAccount",
        0,
        field("createAccountOp", CreateAccountOp.schema)
      ),
      _case("payment", 1, field("paymentOp", PaymentOp.schema)),
      _case(
        "pathPaymentStrictReceive",
        2,
        field("pathPaymentStrictReceiveOp", PathPaymentStrictReceiveOp.schema)
      ),
      _case(
        "manageSellOffer",
        3,
        field("manageSellOfferOp", ManageSellOfferOp.schema)
      ),
      _case(
        "createPassiveSellOffer",
        4,
        field("createPassiveSellOfferOp", CreatePassiveSellOfferOp.schema)
      ),
      _case("setOptions", 5, field("setOptionsOp", SetOptionsOp.schema)),
      _case("changeTrust", 6, field("changeTrustOp", ChangeTrustOp.schema)),
      _case("allowTrust", 7, field("allowTrustOp", AllowTrustOp.schema)),
      _case("accountMerge", 8, field("destination", MuxedAccount.schema)),
      _case("inflation", 9, _void()),
      _case("manageData", 10, field("manageDataOp", ManageDataOp.schema)),
      _case("bumpSequence", 11, field("bumpSequenceOp", BumpSequenceOp.schema)),
      _case(
        "manageBuyOffer",
        12,
        field("manageBuyOfferOp", ManageBuyOfferOp.schema)
      ),
      _case(
        "pathPaymentStrictSend",
        13,
        field("pathPaymentStrictSendOp", PathPaymentStrictSendOp.schema)
      ),
      _case(
        "createClaimableBalance",
        14,
        field("createClaimableBalanceOp", CreateClaimableBalanceOp.schema)
      ),
      _case(
        "claimClaimableBalance",
        15,
        field("claimClaimableBalanceOp", ClaimClaimableBalanceOp.schema)
      ),
      _case(
        "beginSponsoringFutureReserves",
        16,
        field(
          "beginSponsoringFutureReservesOp",
          BeginSponsoringFutureReservesOp.schema
        )
      ),
      _case("endSponsoringFutureReserves", 17, _void()),
      _case(
        "revokeSponsorship",
        18,
        field("revokeSponsorshipOp", RevokeSponsorshipOp.schema)
      ),
      _case("clawback", 19, field("clawbackOp", ClawbackOp.schema)),
      _case(
        "clawbackClaimableBalance",
        20,
        field("clawbackClaimableBalanceOp", ClawbackClaimableBalanceOp.schema)
      ),
      _case(
        "setTrustLineFlags",
        21,
        field("setTrustLineFlagsOp", SetTrustLineFlagsOp.schema)
      ),
      _case(
        "liquidityPoolDeposit",
        22,
        field("liquidityPoolDepositOp", LiquidityPoolDepositOp.schema)
      ),
      _case(
        "liquidityPoolWithdraw",
        23,
        field("liquidityPoolWithdrawOp", LiquidityPoolWithdrawOp.schema)
      ),
      _case(
        "invokeHostFunction",
        24,
        field("invokeHostFunctionOp", InvokeHostFunctionOp.schema)
      ),
      _case(
        "extendFootprintTtl",
        25,
        field("extendFootprintTtlOp", ExtendFootprintTtlOp.schema)
      ),
      _case(
        "restoreFootprint",
        26,
        field("restoreFootprintOp", RestoreFootprintOp.schema)
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
          CreateAccountOp.fromXdrObject(wire.createAccountOp)
        );
      case 1:
        return new OperationBodyPayment(
          PaymentOp.fromXdrObject(wire.paymentOp)
        );
      case 2:
        return new OperationBodyPathPaymentStrictReceive(
          PathPaymentStrictReceiveOp.fromXdrObject(
            wire.pathPaymentStrictReceiveOp
          )
        );
      case 3:
        return new OperationBodyManageSellOffer(
          ManageSellOfferOp.fromXdrObject(wire.manageSellOfferOp)
        );
      case 4:
        return new OperationBodyCreatePassiveSellOffer(
          CreatePassiveSellOfferOp.fromXdrObject(wire.createPassiveSellOfferOp)
        );
      case 5:
        return new OperationBodySetOptions(
          SetOptionsOp.fromXdrObject(wire.setOptionsOp)
        );
      case 6:
        return new OperationBodyChangeTrust(
          ChangeTrustOp.fromXdrObject(wire.changeTrustOp)
        );
      case 7:
        return new OperationBodyAllowTrust(
          AllowTrustOp.fromXdrObject(wire.allowTrustOp)
        );
      case 8:
        return new OperationBodyAccountMerge(
          MuxedAccount.fromXdrObject(wire.destination)
        );
      case 9:
        return new OperationBodyInflation();
      case 10:
        return new OperationBodyManageData(
          ManageDataOp.fromXdrObject(wire.manageDataOp)
        );
      case 11:
        return new OperationBodyBumpSequence(
          BumpSequenceOp.fromXdrObject(wire.bumpSequenceOp)
        );
      case 12:
        return new OperationBodyManageBuyOffer(
          ManageBuyOfferOp.fromXdrObject(wire.manageBuyOfferOp)
        );
      case 13:
        return new OperationBodyPathPaymentStrictSend(
          PathPaymentStrictSendOp.fromXdrObject(wire.pathPaymentStrictSendOp)
        );
      case 14:
        return new OperationBodyCreateClaimableBalance(
          CreateClaimableBalanceOp.fromXdrObject(wire.createClaimableBalanceOp)
        );
      case 15:
        return new OperationBodyClaimClaimableBalance(
          ClaimClaimableBalanceOp.fromXdrObject(wire.claimClaimableBalanceOp)
        );
      case 16:
        return new OperationBodyBeginSponsoringFutureReserves(
          BeginSponsoringFutureReservesOp.fromXdrObject(
            wire.beginSponsoringFutureReservesOp
          )
        );
      case 17:
        return new OperationBodyEndSponsoringFutureReserves();
      case 18:
        return new OperationBodyRevokeSponsorship(
          RevokeSponsorshipOp.fromXdrObject(wire.revokeSponsorshipOp)
        );
      case 19:
        return new OperationBodyClawback(
          ClawbackOp.fromXdrObject(wire.clawbackOp)
        );
      case 20:
        return new OperationBodyClawbackClaimableBalance(
          ClawbackClaimableBalanceOp.fromXdrObject(
            wire.clawbackClaimableBalanceOp
          )
        );
      case 21:
        return new OperationBodySetTrustLineFlags(
          SetTrustLineFlagsOp.fromXdrObject(wire.setTrustLineFlagsOp)
        );
      case 22:
        return new OperationBodyLiquidityPoolDeposit(
          LiquidityPoolDepositOp.fromXdrObject(wire.liquidityPoolDepositOp)
        );
      case 23:
        return new OperationBodyLiquidityPoolWithdraw(
          LiquidityPoolWithdrawOp.fromXdrObject(wire.liquidityPoolWithdrawOp)
        );
      case 24:
        return new OperationBodyInvokeHostFunction(
          InvokeHostFunctionOp.fromXdrObject(wire.invokeHostFunctionOp)
        );
      case 25:
        return new OperationBodyExtendFootprintTtl(
          ExtendFootprintTtlOp.fromXdrObject(wire.extendFootprintTtlOp)
        );
      case 26:
        return new OperationBodyRestoreFootprint(
          RestoreFootprintOp.fromXdrObject(wire.restoreFootprintOp)
        );
    }
    throw new XdrError(
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

export { OperationBody, OperationBodyAccountMerge, OperationBodyAllowTrust, OperationBodyBeginSponsoringFutureReserves, OperationBodyBumpSequence, OperationBodyChangeTrust, OperationBodyClaimClaimableBalance, OperationBodyClawback, OperationBodyClawbackClaimableBalance, OperationBodyCreateAccount, OperationBodyCreateClaimableBalance, OperationBodyCreatePassiveSellOffer, OperationBodyEndSponsoringFutureReserves, OperationBodyExtendFootprintTtl, OperationBodyInflation, OperationBodyInvokeHostFunction, OperationBodyLiquidityPoolDeposit, OperationBodyLiquidityPoolWithdraw, OperationBodyManageBuyOffer, OperationBodyManageData, OperationBodyManageSellOffer, OperationBodyPathPaymentStrictReceive, OperationBodyPathPaymentStrictSend, OperationBodyPayment, OperationBodyRestoreFootprint, OperationBodyRevokeSponsorship, OperationBodySetOptions, OperationBodySetTrustLineFlags };
//# sourceMappingURL=operation-body.js.map
