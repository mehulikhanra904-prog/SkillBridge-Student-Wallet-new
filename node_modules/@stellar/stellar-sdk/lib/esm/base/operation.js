import { Asset } from './asset.js';
import { LiquidityPoolAsset } from './liquidity_pool_asset.js';
import { Claimant } from './claimant.js';
import { StrKey } from './strkey.js';
import { LiquidityPoolId } from './liquidity_pool_id.js';
import '../xdr/index.js';
import { uint8ArrayToHex, uint8ArrayToString } from 'uint8array-extras';
import { trimEnd } from './util/util.js';
import { encodeMuxedAccountToAddress } from './util/decode_encode_muxed_account.js';
import { manageSellOffer } from './operations/manage_sell_offer.js';
import { createPassiveSellOffer } from './operations/create_passive_sell_offer.js';
import { accountMerge } from './operations/account_merge.js';
import { allowTrust } from './operations/allow_trust.js';
import { bumpSequence } from './operations/bump_sequence.js';
import { changeTrust } from './operations/change_trust.js';
import { createAccount } from './operations/create_account.js';
import { createClaimableBalance } from './operations/create_claimable_balance.js';
import { claimClaimableBalance } from './operations/claim_claimable_balance.js';
import { clawbackClaimableBalance } from './operations/clawback_claimable_balance.js';
import { inflation } from './operations/inflation.js';
import { manageData } from './operations/manage_data.js';
import { manageBuyOffer } from './operations/manage_buy_offer.js';
import { pathPaymentStrictReceive } from './operations/path_payment_strict_receive.js';
import { pathPaymentStrictSend } from './operations/path_payment_strict_send.js';
import { payment } from './operations/payment.js';
import { setOptions } from './operations/set_options.js';
import { beginSponsoringFutureReserves } from './operations/begin_sponsoring_future_reserves.js';
import { endSponsoringFutureReserves } from './operations/end_sponsoring_future_reserves.js';
import { revokeAccountSponsorship, revokeTrustlineSponsorship, revokeOfferSponsorship, revokeDataSponsorship, revokeClaimableBalanceSponsorship, revokeLiquidityPoolSponsorship, revokeSignerSponsorship } from './operations/revoke_sponsorship.js';
import { clawback } from './operations/clawback.js';
import { setTrustLineFlags } from './operations/set_trustline_flags.js';
import { liquidityPoolDeposit } from './operations/liquidity_pool_deposit.js';
import { liquidityPoolWithdraw } from './operations/liquidity_pool_withdraw.js';
import { invokeHostFunction, createStellarAssetContract, invokeContractFunction, createCustomContract, uploadContractWasm } from './operations/invoke_host_function.js';
import { extendFootprintTtl } from './operations/extend_footprint_ttl.js';
import { restoreFootprint } from './operations/restore_footprint.js';
import { fromXdrAmount, fromXdrPrice } from './util/operations.js';
import { TrustLineFlags } from '../xdr/generated/trust-line-flags.js';

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
      result.source = encodeMuxedAccountToAddress(sourceAccount);
    }
    const attrs = "value" in operation.body ? operation.body.value : void 0;
    const operationName = operation.body.type;
    switch (operationName) {
      case "createAccount": {
        result.type = "createAccount";
        result.destination = accountIdtoAddress(attrs.destination);
        result.startingBalance = fromXdrAmount(attrs.startingBalance);
        break;
      }
      case "payment": {
        result.type = "payment";
        result.destination = encodeMuxedAccountToAddress(attrs.destination);
        result.asset = Asset.fromOperation(attrs.asset);
        result.amount = fromXdrAmount(attrs.amount);
        break;
      }
      case "pathPaymentStrictReceive": {
        result.type = "pathPaymentStrictReceive";
        result.sendAsset = Asset.fromOperation(attrs.sendAsset);
        result.sendMax = fromXdrAmount(attrs.sendMax);
        result.destination = encodeMuxedAccountToAddress(attrs.destination);
        result.destAsset = Asset.fromOperation(attrs.destAsset);
        result.destAmount = fromXdrAmount(attrs.destAmount);
        result.path = attrs.path.map(
          (a) => Asset.fromOperation(a)
        );
        break;
      }
      case "pathPaymentStrictSend": {
        result.type = "pathPaymentStrictSend";
        result.sendAsset = Asset.fromOperation(attrs.sendAsset);
        result.sendAmount = fromXdrAmount(attrs.sendAmount);
        result.destination = encodeMuxedAccountToAddress(attrs.destination);
        result.destAsset = Asset.fromOperation(attrs.destAsset);
        result.destMin = fromXdrAmount(attrs.destMin);
        result.path = attrs.path.map(
          (a) => Asset.fromOperation(a)
        );
        break;
      }
      case "changeTrust": {
        result.type = "changeTrust";
        switch (attrs.line.type) {
          case "assetTypePoolShare":
            result.line = LiquidityPoolAsset.fromOperation(attrs.line);
            break;
          default:
            result.line = Asset.fromOperation(attrs.line);
            break;
        }
        result.limit = fromXdrAmount(attrs.limit);
        break;
      }
      case "allowTrust": {
        result.type = "allowTrust";
        result.trustor = accountIdtoAddress(attrs.trustor);
        result.assetCode = trimEnd(
          uint8ArrayToString(attrs.asset.value.value),
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
              signer.ed25519PublicKey = StrKey.encodeEd25519PublicKey(
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
              signer.ed25519SignedPayload = StrKey.encodeSignedPayload(
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
        result.selling = Asset.fromOperation(attrs.selling);
        result.buying = Asset.fromOperation(attrs.buying);
        result.amount = fromXdrAmount(attrs.amount);
        result.price = fromXdrPrice(attrs.price);
        result.offerId = attrs.offerId.toString();
        break;
      }
      case "manageBuyOffer": {
        result.type = "manageBuyOffer";
        result.selling = Asset.fromOperation(attrs.selling);
        result.buying = Asset.fromOperation(attrs.buying);
        result.buyAmount = fromXdrAmount(attrs.buyAmount);
        result.price = fromXdrPrice(attrs.price);
        result.offerId = attrs.offerId.toString();
        break;
      }
      // the next case intentionally falls through!
      case "createPassiveOffer":
      case "createPassiveSellOffer": {
        result.type = "createPassiveSellOffer";
        result.selling = Asset.fromOperation(attrs.selling);
        result.buying = Asset.fromOperation(attrs.buying);
        result.amount = fromXdrAmount(attrs.amount);
        result.price = fromXdrPrice(attrs.price);
        break;
      }
      case "accountMerge": {
        result.type = "accountMerge";
        result.destination = encodeMuxedAccountToAddress(attrs);
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
        result.asset = Asset.fromOperation(attrs.asset);
        result.amount = fromXdrAmount(attrs.amount);
        result.claimants = [];
        attrs.claimants.forEach((claimant) => {
          result.claimants.push(Claimant.fromXdr(claimant));
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
        result.amount = fromXdrAmount(attrs.amount);
        result.from = encodeMuxedAccountToAddress(attrs.from);
        result.asset = Asset.fromOperation(attrs.asset);
        break;
      }
      case "clawbackClaimableBalance": {
        result.type = "clawbackClaimableBalance";
        result.balanceId = attrs.toXdr("hex");
        break;
      }
      case "setTrustLineFlags": {
        result.type = "setTrustLineFlags";
        result.asset = Asset.fromOperation(attrs.asset);
        result.trustor = accountIdtoAddress(attrs.trustor);
        const clears = attrs.clearFlags;
        const sets = attrs.setFlags;
        const mapping = {
          authorized: TrustLineFlags.authorizedFlag,
          authorizedToMaintainLiabilities: TrustLineFlags.authorizedToMaintainLiabilitiesFlag,
          clawbackEnabled: TrustLineFlags.trustlineClawbackEnabledFlag
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
        result.liquidityPoolId = uint8ArrayToHex(attrs.liquidityPoolId.value);
        result.maxAmountA = fromXdrAmount(attrs.maxAmountA);
        result.maxAmountB = fromXdrAmount(attrs.maxAmountB);
        result.minPrice = fromXdrPrice(attrs.minPrice);
        result.maxPrice = fromXdrPrice(attrs.maxPrice);
        break;
      }
      case "liquidityPoolWithdraw": {
        result.type = "liquidityPoolWithdraw";
        result.liquidityPoolId = uint8ArrayToHex(attrs.liquidityPoolId.value);
        result.amount = fromXdrAmount(attrs.amount);
        result.minAmountA = fromXdrAmount(attrs.minAmountA);
        result.minAmountB = fromXdrAmount(attrs.minAmountB);
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
  static accountMerge = accountMerge;
  static allowTrust = allowTrust;
  static bumpSequence = bumpSequence;
  static changeTrust = changeTrust;
  static createAccount = createAccount;
  static createClaimableBalance = createClaimableBalance;
  static claimClaimableBalance = claimClaimableBalance;
  static clawbackClaimableBalance = clawbackClaimableBalance;
  static createPassiveSellOffer = createPassiveSellOffer;
  static inflation = inflation;
  static manageData = manageData;
  static manageSellOffer = manageSellOffer;
  static manageBuyOffer = manageBuyOffer;
  static pathPaymentStrictReceive = pathPaymentStrictReceive;
  static pathPaymentStrictSend = pathPaymentStrictSend;
  static payment = payment;
  static setOptions = setOptions;
  static beginSponsoringFutureReserves = beginSponsoringFutureReserves;
  static endSponsoringFutureReserves = endSponsoringFutureReserves;
  static revokeAccountSponsorship = revokeAccountSponsorship;
  static revokeTrustlineSponsorship = revokeTrustlineSponsorship;
  static revokeOfferSponsorship = revokeOfferSponsorship;
  static revokeDataSponsorship = revokeDataSponsorship;
  static revokeClaimableBalanceSponsorship = revokeClaimableBalanceSponsorship;
  static revokeLiquidityPoolSponsorship = revokeLiquidityPoolSponsorship;
  static revokeSignerSponsorship = revokeSignerSponsorship;
  static clawback = clawback;
  static setTrustLineFlags = setTrustLineFlags;
  static liquidityPoolDeposit = liquidityPoolDeposit;
  static liquidityPoolWithdraw = liquidityPoolWithdraw;
  static invokeHostFunction = invokeHostFunction;
  static extendFootprintTtl = extendFootprintTtl;
  static restoreFootprint = restoreFootprint;
  // These are not `xdr.Operation`s directly, but proxies for common
  // versions of `Operation.invokeHostFunction`
  static createStellarAssetContract = createStellarAssetContract;
  static invokeContractFunction = invokeContractFunction;
  static createCustomContract = createCustomContract;
  static uploadContractWasm = uploadContractWasm;
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
              result.asset = LiquidityPoolId.fromOperation(xdrAsset);
              break;
            default:
              result.asset = Asset.fromOperation(xdrAsset);
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
          result.liquidityPoolId = uint8ArrayToHex(
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
      attrs.ed25519PublicKey = StrKey.encodeEd25519PublicKey(
        signerKey.value.toBytes()
      );
      break;
    }
    case "signerKeyTypePreAuthTx": {
      attrs.preAuthTx = uint8ArrayToHex(signerKey.value.toBytes());
      break;
    }
    case "signerKeyTypeHashX": {
      attrs.sha256Hash = uint8ArrayToHex(signerKey.value.toBytes());
      break;
    }
    case "signerKeyTypeEd25519SignedPayload": {
      const signedPayload = signerKey.value;
      attrs.ed25519SignedPayload = StrKey.encodeSignedPayload(
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
  return StrKey.encodeEd25519PublicKey(accountId.value.toBytes());
}

export { AuthClawbackEnabledFlag, AuthImmutableFlag, AuthRequiredFlag, AuthRevocableFlag, Operation };
//# sourceMappingURL=operation.js.map
