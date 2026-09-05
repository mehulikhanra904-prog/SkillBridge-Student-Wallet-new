'use strict';

var asset = require('./asset.js');
var liquidity_pool_asset = require('./liquidity_pool_asset.js');
var claimant = require('./claimant.js');
var strkey = require('./strkey.js');
var liquidity_pool_id = require('./liquidity_pool_id.js');
require('../xdr/index.js');
var uint8arrayExtras = require('uint8array-extras');
var util = require('./util/util.js');
var decode_encode_muxed_account = require('./util/decode_encode_muxed_account.js');
var manage_sell_offer = require('./operations/manage_sell_offer.js');
var create_passive_sell_offer = require('./operations/create_passive_sell_offer.js');
var account_merge = require('./operations/account_merge.js');
var allow_trust = require('./operations/allow_trust.js');
var bump_sequence = require('./operations/bump_sequence.js');
var change_trust = require('./operations/change_trust.js');
var create_account = require('./operations/create_account.js');
var create_claimable_balance = require('./operations/create_claimable_balance.js');
var claim_claimable_balance = require('./operations/claim_claimable_balance.js');
var clawback_claimable_balance = require('./operations/clawback_claimable_balance.js');
var inflation = require('./operations/inflation.js');
var manage_data = require('./operations/manage_data.js');
var manage_buy_offer = require('./operations/manage_buy_offer.js');
var path_payment_strict_receive = require('./operations/path_payment_strict_receive.js');
var path_payment_strict_send = require('./operations/path_payment_strict_send.js');
var payment = require('./operations/payment.js');
var set_options = require('./operations/set_options.js');
var begin_sponsoring_future_reserves = require('./operations/begin_sponsoring_future_reserves.js');
var end_sponsoring_future_reserves = require('./operations/end_sponsoring_future_reserves.js');
var revoke_sponsorship = require('./operations/revoke_sponsorship.js');
var clawback = require('./operations/clawback.js');
var set_trustline_flags = require('./operations/set_trustline_flags.js');
var liquidity_pool_deposit = require('./operations/liquidity_pool_deposit.js');
var liquidity_pool_withdraw = require('./operations/liquidity_pool_withdraw.js');
var invoke_host_function = require('./operations/invoke_host_function.js');
var extend_footprint_ttl = require('./operations/extend_footprint_ttl.js');
var restore_footprint = require('./operations/restore_footprint.js');
var operations = require('./util/operations.js');
var trustLineFlags = require('../xdr/generated/trust-line-flags.js');

const AuthRequiredFlag = 1 << 0;
const AuthRevocableFlag = 1 << 1;
const AuthImmutableFlag = 1 << 2;
const AuthClawbackEnabledFlag = 1 << 3;
class Operation {
  /**
   * @deprecated Use {@link Operation.fromXdrObject} instead.
   * Deprecated in version v17.0.0
   */
  static fromXDRObject(operation) {
    return Operation.fromXdrObject(operation);
  }
  /**
   * Deconstructs the raw XDR operation object into the structured object that
   * was used to create the operation (i.e. the `opts` parameter to most ops).
   *
   * @param operation - An XDR Operation.
   */
  static fromXdrObject(operation) {
    const result = {};
    const sourceAccount = operation.sourceAccount;
    if (sourceAccount) {
      result.source = decode_encode_muxed_account.encodeMuxedAccountToAddress(sourceAccount);
    }
    const attrs = "value" in operation.body ? operation.body.value : void 0;
    const operationName = operation.body.type;
    switch (operationName) {
      case "createAccount": {
        result.type = "createAccount";
        result.destination = accountIdtoAddress(attrs.destination);
        result.startingBalance = operations.fromXdrAmount(attrs.startingBalance);
        break;
      }
      case "payment": {
        result.type = "payment";
        result.destination = decode_encode_muxed_account.encodeMuxedAccountToAddress(attrs.destination);
        result.asset = asset.Asset.fromOperation(attrs.asset);
        result.amount = operations.fromXdrAmount(attrs.amount);
        break;
      }
      case "pathPaymentStrictReceive": {
        result.type = "pathPaymentStrictReceive";
        result.sendAsset = asset.Asset.fromOperation(attrs.sendAsset);
        result.sendMax = operations.fromXdrAmount(attrs.sendMax);
        result.destination = decode_encode_muxed_account.encodeMuxedAccountToAddress(attrs.destination);
        result.destAsset = asset.Asset.fromOperation(attrs.destAsset);
        result.destAmount = operations.fromXdrAmount(attrs.destAmount);
        result.path = attrs.path.map(
          (a) => asset.Asset.fromOperation(a)
        );
        break;
      }
      case "pathPaymentStrictSend": {
        result.type = "pathPaymentStrictSend";
        result.sendAsset = asset.Asset.fromOperation(attrs.sendAsset);
        result.sendAmount = operations.fromXdrAmount(attrs.sendAmount);
        result.destination = decode_encode_muxed_account.encodeMuxedAccountToAddress(attrs.destination);
        result.destAsset = asset.Asset.fromOperation(attrs.destAsset);
        result.destMin = operations.fromXdrAmount(attrs.destMin);
        result.path = attrs.path.map(
          (a) => asset.Asset.fromOperation(a)
        );
        break;
      }
      case "changeTrust": {
        result.type = "changeTrust";
        switch (attrs.line.type) {
          case "assetTypePoolShare":
            result.line = liquidity_pool_asset.LiquidityPoolAsset.fromOperation(attrs.line);
            break;
          default:
            result.line = asset.Asset.fromOperation(attrs.line);
            break;
        }
        result.limit = operations.fromXdrAmount(attrs.limit);
        break;
      }
      case "allowTrust": {
        result.type = "allowTrust";
        result.trustor = accountIdtoAddress(attrs.trustor);
        result.assetCode = util.trimEnd(
          uint8arrayExtras.uint8ArrayToString(attrs.asset.value.value),
          "\0"
        );
        result.authorize = attrs.authorize;
        break;
      }
      case "setOptions": {
        result.type = "setOptions";
        if (attrs.inflationDest) {
          result.inflationDest = accountIdtoAddress(attrs.inflationDest);
        }
        result.clearFlags = attrs.clearFlags ?? void 0;
        result.setFlags = attrs.setFlags ?? void 0;
        result.masterWeight = attrs.masterWeight ?? void 0;
        result.lowThreshold = attrs.lowThreshold ?? void 0;
        result.medThreshold = attrs.medThreshold ?? void 0;
        result.highThreshold = attrs.highThreshold ?? void 0;
        result.homeDomain = attrs.homeDomain === null ? void 0 : attrs.homeDomain.toString();
        if (attrs.signer) {
          const signer = {};
          const key = attrs.signer.key;
          switch (key.type) {
            case "signerKeyTypeEd25519":
              signer.ed25519PublicKey = strkey.StrKey.encodeEd25519PublicKey(
                key.ed25519.toBytes()
              );
              break;
            case "signerKeyTypePreAuthTx":
              signer.preAuthTx = key.preAuthTx.toBytes().slice();
              break;
            case "signerKeyTypeHashX":
              signer.sha256Hash = key.hashX.toBytes().slice();
              break;
            case "signerKeyTypeEd25519SignedPayload":
              signer.ed25519SignedPayload = strkey.StrKey.encodeSignedPayload(
                key.ed25519SignedPayload.toXdr()
              );
              break;
          }
          signer.weight = attrs.signer.weight;
          result.signer = signer;
        }
        break;
      }
      // the next case intentionally falls through!
      case "manageOffer":
      case "manageSellOffer": {
        result.type = "manageSellOffer";
        result.selling = asset.Asset.fromOperation(attrs.selling);
        result.buying = asset.Asset.fromOperation(attrs.buying);
        result.amount = operations.fromXdrAmount(attrs.amount);
        result.price = operations.fromXdrPrice(attrs.price);
        result.offerId = attrs.offerId.toString();
        break;
      }
      case "manageBuyOffer": {
        result.type = "manageBuyOffer";
        result.selling = asset.Asset.fromOperation(attrs.selling);
        result.buying = asset.Asset.fromOperation(attrs.buying);
        result.buyAmount = operations.fromXdrAmount(attrs.buyAmount);
        result.price = operations.fromXdrPrice(attrs.price);
        result.offerId = attrs.offerId.toString();
        break;
      }
      // the next case intentionally falls through!
      case "createPassiveOffer":
      case "createPassiveSellOffer": {
        result.type = "createPassiveSellOffer";
        result.selling = asset.Asset.fromOperation(attrs.selling);
        result.buying = asset.Asset.fromOperation(attrs.buying);
        result.amount = operations.fromXdrAmount(attrs.amount);
        result.price = operations.fromXdrPrice(attrs.price);
        break;
      }
      case "accountMerge": {
        result.type = "accountMerge";
        result.destination = decode_encode_muxed_account.encodeMuxedAccountToAddress(attrs);
        break;
      }
      case "manageData": {
        result.type = "manageData";
        result.name = attrs.dataName.toString();
        result.value = attrs.dataValue === null ? void 0 : attrs.dataValue.value.slice();
        break;
      }
      case "inflation": {
        result.type = "inflation";
        break;
      }
      case "bumpSequence": {
        result.type = "bumpSequence";
        result.bumpTo = attrs.bumpTo.toString();
        break;
      }
      case "createClaimableBalance": {
        result.type = "createClaimableBalance";
        result.asset = asset.Asset.fromOperation(attrs.asset);
        result.amount = operations.fromXdrAmount(attrs.amount);
        result.claimants = [];
        attrs.claimants.forEach((claimant$1) => {
          result.claimants.push(claimant.Claimant.fromXdr(claimant$1));
        });
        break;
      }
      case "claimClaimableBalance": {
        result.type = "claimClaimableBalance";
        result.balanceId = attrs.toXdr("hex");
        break;
      }
      case "beginSponsoringFutureReserves": {
        result.type = "beginSponsoringFutureReserves";
        result.sponsoredId = accountIdtoAddress(attrs.sponsoredId);
        break;
      }
      case "endSponsoringFutureReserves": {
        result.type = "endSponsoringFutureReserves";
        break;
      }
      case "revokeSponsorship": {
        extractRevokeSponshipDetails(attrs, result);
        break;
      }
      case "clawback": {
        result.type = "clawback";
        result.amount = operations.fromXdrAmount(attrs.amount);
        result.from = decode_encode_muxed_account.encodeMuxedAccountToAddress(attrs.from);
        result.asset = asset.Asset.fromOperation(attrs.asset);
        break;
      }
      case "clawbackClaimableBalance": {
        result.type = "clawbackClaimableBalance";
        result.balanceId = attrs.toXdr("hex");
        break;
      }
      case "setTrustLineFlags": {
        result.type = "setTrustLineFlags";
        result.asset = asset.Asset.fromOperation(attrs.asset);
        result.trustor = accountIdtoAddress(attrs.trustor);
        const clears = attrs.clearFlags;
        const sets = attrs.setFlags;
        const mapping = {
          authorized: trustLineFlags.TrustLineFlags.authorizedFlag,
          authorizedToMaintainLiabilities: trustLineFlags.TrustLineFlags.authorizedToMaintainLiabilitiesFlag,
          clawbackEnabled: trustLineFlags.TrustLineFlags.trustlineClawbackEnabledFlag
        };
        const getFlagValue = (key) => {
          const bit = mapping[key]?.value ?? 0;
          if (sets & bit) {
            return true;
          }
          if (clears & bit) {
            return false;
          }
          return void 0;
        };
        const flags = {};
        Object.keys(mapping).forEach((flagName) => {
          flags[flagName] = getFlagValue(flagName);
        });
        result.flags = flags;
        break;
      }
      case "liquidityPoolDeposit": {
        result.type = "liquidityPoolDeposit";
        result.liquidityPoolId = uint8arrayExtras.uint8ArrayToHex(attrs.liquidityPoolId.value);
        result.maxAmountA = operations.fromXdrAmount(attrs.maxAmountA);
        result.maxAmountB = operations.fromXdrAmount(attrs.maxAmountB);
        result.minPrice = operations.fromXdrPrice(attrs.minPrice);
        result.maxPrice = operations.fromXdrPrice(attrs.maxPrice);
        break;
      }
      case "liquidityPoolWithdraw": {
        result.type = "liquidityPoolWithdraw";
        result.liquidityPoolId = uint8arrayExtras.uint8ArrayToHex(attrs.liquidityPoolId.value);
        result.amount = operations.fromXdrAmount(attrs.amount);
        result.minAmountA = operations.fromXdrAmount(attrs.minAmountA);
        result.minAmountB = operations.fromXdrAmount(attrs.minAmountB);
        break;
      }
      case "invokeHostFunction": {
        result.type = "invokeHostFunction";
        result.func = attrs.hostFunction;
        result.auth = attrs.auth ?? [];
        break;
      }
      case "extendFootprintTtl": {
        result.type = "extendFootprintTtl";
        result.extendTo = attrs.extendTo;
        break;
      }
      case "restoreFootprint": {
        result.type = "restoreFootprint";
        break;
      }
      default: {
        throw new Error(`Unknown operation: ${operationName}`);
      }
    }
    return result;
  }
  // Attach all imported operations as static methods on the Operation class
  static accountMerge = account_merge.accountMerge;
  static allowTrust = allow_trust.allowTrust;
  static bumpSequence = bump_sequence.bumpSequence;
  static changeTrust = change_trust.changeTrust;
  static createAccount = create_account.createAccount;
  static createClaimableBalance = create_claimable_balance.createClaimableBalance;
  static claimClaimableBalance = claim_claimable_balance.claimClaimableBalance;
  static clawbackClaimableBalance = clawback_claimable_balance.clawbackClaimableBalance;
  static createPassiveSellOffer = create_passive_sell_offer.createPassiveSellOffer;
  static inflation = inflation.inflation;
  static manageData = manage_data.manageData;
  static manageSellOffer = manage_sell_offer.manageSellOffer;
  static manageBuyOffer = manage_buy_offer.manageBuyOffer;
  static pathPaymentStrictReceive = path_payment_strict_receive.pathPaymentStrictReceive;
  static pathPaymentStrictSend = path_payment_strict_send.pathPaymentStrictSend;
  static payment = payment.payment;
  static setOptions = set_options.setOptions;
  static beginSponsoringFutureReserves = begin_sponsoring_future_reserves.beginSponsoringFutureReserves;
  static endSponsoringFutureReserves = end_sponsoring_future_reserves.endSponsoringFutureReserves;
  static revokeAccountSponsorship = revoke_sponsorship.revokeAccountSponsorship;
  static revokeTrustlineSponsorship = revoke_sponsorship.revokeTrustlineSponsorship;
  static revokeOfferSponsorship = revoke_sponsorship.revokeOfferSponsorship;
  static revokeDataSponsorship = revoke_sponsorship.revokeDataSponsorship;
  static revokeClaimableBalanceSponsorship = revoke_sponsorship.revokeClaimableBalanceSponsorship;
  static revokeLiquidityPoolSponsorship = revoke_sponsorship.revokeLiquidityPoolSponsorship;
  static revokeSignerSponsorship = revoke_sponsorship.revokeSignerSponsorship;
  static clawback = clawback.clawback;
  static setTrustLineFlags = set_trustline_flags.setTrustLineFlags;
  static liquidityPoolDeposit = liquidity_pool_deposit.liquidityPoolDeposit;
  static liquidityPoolWithdraw = liquidity_pool_withdraw.liquidityPoolWithdraw;
  static invokeHostFunction = invoke_host_function.invokeHostFunction;
  static extendFootprintTtl = extend_footprint_ttl.extendFootprintTtl;
  static restoreFootprint = restore_footprint.restoreFootprint;
  // These are not `xdr.Operation`s directly, but proxies for common
  // versions of `Operation.invokeHostFunction`
  static createStellarAssetContract = invoke_host_function.createStellarAssetContract;
  static invokeContractFunction = invoke_host_function.invokeContractFunction;
  static createCustomContract = invoke_host_function.createCustomContract;
  static uploadContractWasm = invoke_host_function.uploadContractWasm;
}
function extractRevokeSponshipDetails(attrs, result) {
  switch (attrs.type) {
    case "revokeSponsorshipLedgerEntry": {
      const ledgerKey = attrs.ledgerKey;
      switch (ledgerKey.type) {
        case "account": {
          result.type = "revokeAccountSponsorship";
          result.account = accountIdtoAddress(ledgerKey.account.accountId);
          break;
        }
        case "trustline": {
          result.type = "revokeTrustlineSponsorship";
          result.account = accountIdtoAddress(ledgerKey.trustLine.accountId);
          const xdrAsset = ledgerKey.trustLine.asset;
          switch (xdrAsset.type) {
            case "assetTypePoolShare":
              result.asset = liquidity_pool_id.LiquidityPoolId.fromOperation(xdrAsset);
              break;
            default:
              result.asset = asset.Asset.fromOperation(xdrAsset);
              break;
          }
          break;
        }
        case "offer": {
          result.type = "revokeOfferSponsorship";
          result.seller = accountIdtoAddress(ledgerKey.offer.sellerId);
          result.offerId = ledgerKey.offer.offerId.toString();
          break;
        }
        case "data": {
          result.type = "revokeDataSponsorship";
          result.account = accountIdtoAddress(ledgerKey.data.accountId);
          result.name = ledgerKey.data.dataName.toString();
          break;
        }
        case "claimableBalance": {
          result.type = "revokeClaimableBalanceSponsorship";
          result.balanceId = ledgerKey.claimableBalance.balanceId.toXdr("hex");
          break;
        }
        case "liquidityPool": {
          result.type = "revokeLiquidityPoolSponsorship";
          result.liquidityPoolId = uint8arrayExtras.uint8ArrayToHex(
            ledgerKey.liquidityPool.liquidityPoolId.value
          );
          break;
        }
        default: {
          throw new Error(`Unknown ledgerKey: ${ledgerKey.type}`);
        }
      }
      break;
    }
    case "revokeSponsorshipSigner": {
      const signer = attrs.signer;
      result.type = "revokeSignerSponsorship";
      result.account = accountIdtoAddress(signer.accountId);
      result.signer = convertXdrSignerKeyToObject(signer.signerKey);
      break;
    }
    default: {
      throw new Error(`Unknown revokeSponsorship: ${attrs.type}`);
    }
  }
}
function convertXdrSignerKeyToObject(signerKey) {
  const attrs = {};
  switch (signerKey.type) {
    case "signerKeyTypeEd25519": {
      attrs.ed25519PublicKey = strkey.StrKey.encodeEd25519PublicKey(
        signerKey.value.toBytes()
      );
      break;
    }
    case "signerKeyTypePreAuthTx": {
      attrs.preAuthTx = uint8arrayExtras.uint8ArrayToHex(signerKey.value.toBytes());
      break;
    }
    case "signerKeyTypeHashX": {
      attrs.sha256Hash = uint8arrayExtras.uint8ArrayToHex(signerKey.value.toBytes());
      break;
    }
    case "signerKeyTypeEd25519SignedPayload": {
      const signedPayload = signerKey.value;
      attrs.ed25519SignedPayload = strkey.StrKey.encodeSignedPayload(
        signedPayload.toXdr()
      );
      break;
    }
    default: {
      throw new Error("Unknown signerKey type: " + signerKey.type);
    }
  }
  return attrs;
}
function accountIdtoAddress(accountId) {
  return strkey.StrKey.encodeEd25519PublicKey(accountId.value.toBytes());
}

exports.AuthClawbackEnabledFlag = AuthClawbackEnabledFlag;
exports.AuthImmutableFlag = AuthImmutableFlag;
exports.AuthRequiredFlag = AuthRequiredFlag;
exports.AuthRevocableFlag = AuthRevocableFlag;
exports.Operation = Operation;
//# sourceMappingURL=operation.js.map
