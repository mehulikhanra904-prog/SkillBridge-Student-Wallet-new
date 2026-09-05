'use strict';

var index = require('../../xdr/index.js');
var uint8arrayExtras = require('uint8array-extras');
var strkey = require('../strkey.js');
var keypair = require('../keypair.js');
var asset = require('../asset.js');
var liquidity_pool_id = require('../liquidity_pool_id.js');
var operations = require('../util/operations.js');
var ledgerKey = require('../../xdr/generated/ledger-key.js');
var ledgerKeyAccount = require('../../xdr/generated/ledger-key-account.js');
var revokeSponsorshipOp = require('../../xdr/generated/revoke-sponsorship-op.js');
var ledgerKeyClaimableBalance = require('../../xdr/generated/ledger-key-claimable-balance.js');
var ledgerKeyData = require('../../xdr/generated/ledger-key-data.js');
var ledgerKeyLiquidityPool = require('../../xdr/generated/ledger-key-liquidity-pool.js');
var ledgerKeyOffer = require('../../xdr/generated/ledger-key-offer.js');
var revokeSponsorshipOpSigner = require('../../xdr/generated/revoke-sponsorship-op-signer.js');
var ledgerKeyTrustLine = require('../../xdr/generated/ledger-key-trust-line.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');
var claimableBalanceId = require('../../xdr/generated/claimable-balance-id.js');
var poolId = require('../../xdr/generated/pool-id.js');
var signerKey = require('../../xdr/generated/signer-key.js');
var signerKeyEd25519SignedPayload = require('../../xdr/generated/signer-key-ed25519-signed-payload.js');

function revokeAccountSponsorship(opts = {}) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  const ledgerKey$1 = ledgerKey.LedgerKey.account(
    new ledgerKeyAccount.LedgerKeyAccount({
      accountId: keypair.Keypair.fromPublicKey(opts.account).xdrAccountId()
    })
  );
  const op = revokeSponsorshipOp.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey$1);
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.revokeSponsorship(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function revokeTrustlineSponsorship(opts = {}) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  let asset$1;
  if (opts.asset instanceof asset.Asset) {
    asset$1 = opts.asset.toTrustLineXdrObject();
  } else if (opts.asset instanceof liquidity_pool_id.LiquidityPoolId) {
    asset$1 = opts.asset.toXdrObject();
  } else {
    throw new TypeError("asset must be an Asset or LiquidityPoolId");
  }
  const ledgerKey$1 = ledgerKey.LedgerKey.trustline(
    new ledgerKeyTrustLine.LedgerKeyTrustLine({
      accountId: keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
      asset: asset$1
    })
  );
  const op = revokeSponsorshipOp.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey$1);
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.revokeSponsorship(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function revokeOfferSponsorship(opts = {}) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.seller)) {
    throw new Error("seller is invalid");
  }
  if (typeof opts.offerId !== "string") {
    throw new Error("offerId is invalid");
  }
  const ledgerKey$1 = ledgerKey.LedgerKey.offer(
    new ledgerKeyOffer.LedgerKeyOffer({
      sellerId: keypair.Keypair.fromPublicKey(opts.seller).xdrAccountId(),
      offerId: index.Int64.fromString(opts.offerId)
    })
  );
  const op = revokeSponsorshipOp.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey$1);
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.revokeSponsorship(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function revokeDataSponsorship(opts = {}) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  if (typeof opts.name !== "string" || opts.name.length > 64) {
    throw new Error("name must be a string, up to 64 characters");
  }
  const ledgerKey$1 = ledgerKey.LedgerKey.data(
    new ledgerKeyData.LedgerKeyData({
      accountId: keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
      dataName: opts.name
    })
  );
  const op = revokeSponsorshipOp.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey$1);
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.revokeSponsorship(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function revokeClaimableBalanceSponsorship(opts = {}) {
  if (typeof opts.balanceId !== "string") {
    throw new Error("balanceId is invalid");
  }
  const ledgerKey$1 = ledgerKey.LedgerKey.claimableBalance(
    new ledgerKeyClaimableBalance.LedgerKeyClaimableBalance({
      balanceId: claimableBalanceId.ClaimableBalanceId.fromXdr(opts.balanceId, "hex")
    })
  );
  const op = revokeSponsorshipOp.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey$1);
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.revokeSponsorship(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function revokeLiquidityPoolSponsorship(opts = {}) {
  if (typeof opts.liquidityPoolId !== "string") {
    throw new Error("liquidityPoolId is invalid");
  }
  const ledgerKey$1 = ledgerKey.LedgerKey.liquidityPool(
    new ledgerKeyLiquidityPool.LedgerKeyLiquidityPool({
      liquidityPoolId: new poolId.PoolId(uint8arrayExtras.hexToUint8Array(opts.liquidityPoolId))
    })
  );
  const op = revokeSponsorshipOp.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey$1);
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.revokeSponsorship(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function revokeSignerSponsorship(opts = {}) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  let key;
  if (opts.signer.ed25519PublicKey) {
    if (!strkey.StrKey.isValidEd25519PublicKey(opts.signer.ed25519PublicKey)) {
      throw new Error("signer.ed25519PublicKey is invalid.");
    }
    const rawKey = strkey.StrKey.decodeEd25519PublicKey(opts.signer.ed25519PublicKey);
    key = signerKey.SignerKey.signerKeyTypeEd25519(rawKey);
  } else if (opts.signer.preAuthTx) {
    let buffer;
    if (typeof opts.signer.preAuthTx === "string") {
      buffer = uint8arrayExtras.hexToUint8Array(opts.signer.preAuthTx);
    } else {
      buffer = opts.signer.preAuthTx;
    }
    if (!(buffer instanceof Uint8Array && buffer.length === 32)) {
      throw new Error("signer.preAuthTx must be 32 bytes Uint8Array.");
    }
    key = signerKey.SignerKey.signerKeyTypePreAuthTx(buffer);
  } else if (opts.signer.sha256Hash) {
    let buffer;
    if (typeof opts.signer.sha256Hash === "string") {
      buffer = uint8arrayExtras.hexToUint8Array(opts.signer.sha256Hash);
    } else {
      buffer = opts.signer.sha256Hash;
    }
    if (!(buffer instanceof Uint8Array && buffer.length === 32)) {
      throw new Error("signer.sha256Hash must be 32 bytes Uint8Array.");
    }
    key = signerKey.SignerKey.signerKeyTypeHashX(buffer);
  } else if (opts.signer.ed25519SignedPayload) {
    if (!strkey.StrKey.isValidSignedPayload(opts.signer.ed25519SignedPayload)) {
      throw new Error("signer.ed25519SignedPayload is invalid.");
    }
    const rawPayload = strkey.StrKey.decodeSignedPayload(
      opts.signer.ed25519SignedPayload
    );
    const signedPayloadXdr = signerKeyEd25519SignedPayload.SignerKeyEd25519SignedPayload.fromXdr(rawPayload);
    key = signerKey.SignerKey.signerKeyTypeEd25519SignedPayload(signedPayloadXdr);
  } else {
    throw new Error("signer is invalid");
  }
  const signer = new revokeSponsorshipOpSigner.RevokeSponsorshipOpSigner({
    accountId: keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
    signerKey: key
  });
  const op = revokeSponsorshipOp.RevokeSponsorshipOp.revokeSponsorshipSigner(signer);
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.revokeSponsorship(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.revokeAccountSponsorship = revokeAccountSponsorship;
exports.revokeClaimableBalanceSponsorship = revokeClaimableBalanceSponsorship;
exports.revokeDataSponsorship = revokeDataSponsorship;
exports.revokeLiquidityPoolSponsorship = revokeLiquidityPoolSponsorship;
exports.revokeOfferSponsorship = revokeOfferSponsorship;
exports.revokeSignerSponsorship = revokeSignerSponsorship;
exports.revokeTrustlineSponsorship = revokeTrustlineSponsorship;
//# sourceMappingURL=revoke_sponsorship.js.map
