import { Int64 } from '../../xdr/index.js';
import { hexToUint8Array } from 'uint8array-extras';
import { StrKey } from '../strkey.js';
import { Keypair } from '../keypair.js';
import { Asset } from '../asset.js';
import { LiquidityPoolId } from '../liquidity_pool_id.js';
import { setSourceAccount } from '../util/operations.js';
import { LedgerKey } from '../../xdr/generated/ledger-key.js';
import { LedgerKeyAccount } from '../../xdr/generated/ledger-key-account.js';
import { RevokeSponsorshipOp } from '../../xdr/generated/revoke-sponsorship-op.js';
import { LedgerKeyClaimableBalance } from '../../xdr/generated/ledger-key-claimable-balance.js';
import { LedgerKeyData } from '../../xdr/generated/ledger-key-data.js';
import { LedgerKeyLiquidityPool } from '../../xdr/generated/ledger-key-liquidity-pool.js';
import { LedgerKeyOffer } from '../../xdr/generated/ledger-key-offer.js';
import { RevokeSponsorshipOpSigner } from '../../xdr/generated/revoke-sponsorship-op-signer.js';
import { LedgerKeyTrustLine } from '../../xdr/generated/ledger-key-trust-line.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';
import { ClaimableBalanceId } from '../../xdr/generated/claimable-balance-id.js';
import { PoolId } from '../../xdr/generated/pool-id.js';
import { SignerKey as SignerKey$1 } from '../../xdr/generated/signer-key.js';
import { SignerKeyEd25519SignedPayload } from '../../xdr/generated/signer-key-ed25519-signed-payload.js';

function revokeAccountSponsorship(opts = {}) {
  if (!StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  const ledgerKey = LedgerKey.account(
    new LedgerKeyAccount({
      accountId: Keypair.fromPublicKey(opts.account).xdrAccountId()
    })
  );
  const op = RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey);
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.revokeSponsorship(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function revokeTrustlineSponsorship(opts = {}) {
  if (!StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  let asset;
  if (opts.asset instanceof Asset) {
    asset = opts.asset.toTrustLineXdrObject();
  } else if (opts.asset instanceof LiquidityPoolId) {
    asset = opts.asset.toXdrObject();
  } else {
    throw new TypeError("asset must be an Asset or LiquidityPoolId");
  }
  const ledgerKey = LedgerKey.trustline(
    new LedgerKeyTrustLine({
      accountId: Keypair.fromPublicKey(opts.account).xdrAccountId(),
      asset
    })
  );
  const op = RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey);
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.revokeSponsorship(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function revokeOfferSponsorship(opts = {}) {
  if (!StrKey.isValidEd25519PublicKey(opts.seller)) {
    throw new Error("seller is invalid");
  }
  if (typeof opts.offerId !== "string") {
    throw new Error("offerId is invalid");
  }
  const ledgerKey = LedgerKey.offer(
    new LedgerKeyOffer({
      sellerId: Keypair.fromPublicKey(opts.seller).xdrAccountId(),
      offerId: Int64.fromString(opts.offerId)
    })
  );
  const op = RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey);
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.revokeSponsorship(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function revokeDataSponsorship(opts = {}) {
  if (!StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  if (typeof opts.name !== "string" || opts.name.length > 64) {
    throw new Error("name must be a string, up to 64 characters");
  }
  const ledgerKey = LedgerKey.data(
    new LedgerKeyData({
      accountId: Keypair.fromPublicKey(opts.account).xdrAccountId(),
      dataName: opts.name
    })
  );
  const op = RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey);
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.revokeSponsorship(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function revokeClaimableBalanceSponsorship(opts = {}) {
  if (typeof opts.balanceId !== "string") {
    throw new Error("balanceId is invalid");
  }
  const ledgerKey = LedgerKey.claimableBalance(
    new LedgerKeyClaimableBalance({
      balanceId: ClaimableBalanceId.fromXdr(opts.balanceId, "hex")
    })
  );
  const op = RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey);
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.revokeSponsorship(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function revokeLiquidityPoolSponsorship(opts = {}) {
  if (typeof opts.liquidityPoolId !== "string") {
    throw new Error("liquidityPoolId is invalid");
  }
  const ledgerKey = LedgerKey.liquidityPool(
    new LedgerKeyLiquidityPool({
      liquidityPoolId: new PoolId(hexToUint8Array(opts.liquidityPoolId))
    })
  );
  const op = RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey);
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.revokeSponsorship(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function revokeSignerSponsorship(opts = {}) {
  if (!StrKey.isValidEd25519PublicKey(opts.account)) {
    throw new Error("account is invalid");
  }
  let key;
  if (opts.signer.ed25519PublicKey) {
    if (!StrKey.isValidEd25519PublicKey(opts.signer.ed25519PublicKey)) {
      throw new Error("signer.ed25519PublicKey is invalid.");
    }
    const rawKey = StrKey.decodeEd25519PublicKey(opts.signer.ed25519PublicKey);
    key = SignerKey$1.signerKeyTypeEd25519(rawKey);
  } else if (opts.signer.preAuthTx) {
    let buffer;
    if (typeof opts.signer.preAuthTx === "string") {
      buffer = hexToUint8Array(opts.signer.preAuthTx);
    } else {
      buffer = opts.signer.preAuthTx;
    }
    if (!(buffer instanceof Uint8Array && buffer.length === 32)) {
      throw new Error("signer.preAuthTx must be 32 bytes Uint8Array.");
    }
    key = SignerKey$1.signerKeyTypePreAuthTx(buffer);
  } else if (opts.signer.sha256Hash) {
    let buffer;
    if (typeof opts.signer.sha256Hash === "string") {
      buffer = hexToUint8Array(opts.signer.sha256Hash);
    } else {
      buffer = opts.signer.sha256Hash;
    }
    if (!(buffer instanceof Uint8Array && buffer.length === 32)) {
      throw new Error("signer.sha256Hash must be 32 bytes Uint8Array.");
    }
    key = SignerKey$1.signerKeyTypeHashX(buffer);
  } else if (opts.signer.ed25519SignedPayload) {
    if (!StrKey.isValidSignedPayload(opts.signer.ed25519SignedPayload)) {
      throw new Error("signer.ed25519SignedPayload is invalid.");
    }
    const rawPayload = StrKey.decodeSignedPayload(
      opts.signer.ed25519SignedPayload
    );
    const signedPayloadXdr = SignerKeyEd25519SignedPayload.fromXdr(rawPayload);
    key = SignerKey$1.signerKeyTypeEd25519SignedPayload(signedPayloadXdr);
  } else {
    throw new Error("signer is invalid");
  }
  const signer = new RevokeSponsorshipOpSigner({
    accountId: Keypair.fromPublicKey(opts.account).xdrAccountId(),
    signerKey: key
  });
  const op = RevokeSponsorshipOp.revokeSponsorshipSigner(signer);
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.revokeSponsorship(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { revokeAccountSponsorship, revokeClaimableBalanceSponsorship, revokeDataSponsorship, revokeLiquidityPoolSponsorship, revokeOfferSponsorship, revokeSignerSponsorship, revokeTrustlineSponsorship };
//# sourceMappingURL=revoke_sponsorship.js.map
