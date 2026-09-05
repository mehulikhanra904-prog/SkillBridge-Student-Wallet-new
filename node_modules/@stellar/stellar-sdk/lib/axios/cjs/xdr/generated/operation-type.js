'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class OperationType extends enumValue.EnumValue {
  static createAccount = new OperationType("createAccount", 0);
  static payment = new OperationType("payment", 1);
  static pathPaymentStrictReceive = new OperationType(
    "pathPaymentStrictReceive",
    2
  );
  static manageSellOffer = new OperationType("manageSellOffer", 3);
  static createPassiveSellOffer = new OperationType(
    "createPassiveSellOffer",
    4
  );
  static setOptions = new OperationType("setOptions", 5);
  static changeTrust = new OperationType("changeTrust", 6);
  static allowTrust = new OperationType("allowTrust", 7);
  static accountMerge = new OperationType("accountMerge", 8);
  static inflation = new OperationType("inflation", 9);
  static manageData = new OperationType("manageData", 10);
  static bumpSequence = new OperationType("bumpSequence", 11);
  static manageBuyOffer = new OperationType("manageBuyOffer", 12);
  static pathPaymentStrictSend = new OperationType(
    "pathPaymentStrictSend",
    13
  );
  static createClaimableBalance = new OperationType(
    "createClaimableBalance",
    14
  );
  static claimClaimableBalance = new OperationType(
    "claimClaimableBalance",
    15
  );
  static beginSponsoringFutureReserves = new OperationType(
    "beginSponsoringFutureReserves",
    16
  );
  static endSponsoringFutureReserves = new OperationType(
    "endSponsoringFutureReserves",
    17
  );
  static revokeSponsorship = new OperationType(
    "revokeSponsorship",
    18
  );
  static clawback = new OperationType("clawback", 19);
  static clawbackClaimableBalance = new OperationType(
    "clawbackClaimableBalance",
    20
  );
  static setTrustLineFlags = new OperationType(
    "setTrustLineFlags",
    21
  );
  static liquidityPoolDeposit = new OperationType(
    "liquidityPoolDeposit",
    22
  );
  static liquidityPoolWithdraw = new OperationType(
    "liquidityPoolWithdraw",
    23
  );
  static invokeHostFunction = new OperationType(
    "invokeHostFunction",
    24
  );
  static extendFootprintTtl = new OperationType(
    "extendFootprintTtl",
    25
  );
  static restoreFootprint = new OperationType("restoreFootprint", 26);
  static schema = jsXdr.enumType("OperationType", {
    createAccount: 0,
    payment: 1,
    pathPaymentStrictReceive: 2,
    manageSellOffer: 3,
    createPassiveSellOffer: 4,
    setOptions: 5,
    changeTrust: 6,
    allowTrust: 7,
    accountMerge: 8,
    inflation: 9,
    manageData: 10,
    bumpSequence: 11,
    manageBuyOffer: 12,
    pathPaymentStrictSend: 13,
    createClaimableBalance: 14,
    claimClaimableBalance: 15,
    beginSponsoringFutureReserves: 16,
    endSponsoringFutureReserves: 17,
    revokeSponsorship: 18,
    clawback: 19,
    clawbackClaimableBalance: 20,
    setTrustLineFlags: 21,
    liquidityPoolDeposit: 22,
    liquidityPoolWithdraw: 23,
    invokeHostFunction: 24,
    extendFootprintTtl: 25,
    restoreFootprint: 26
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "OperationType",
      OperationType.schema,
      OperationType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("OperationType", OperationType, name);
  }
  static fromXdrObject(wire) {
    return OperationType.fromValue(wire);
  }
}

exports.OperationType = OperationType;
//# sourceMappingURL=operation-type.js.map
