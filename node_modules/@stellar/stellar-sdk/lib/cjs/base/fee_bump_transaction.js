'use strict';

var base64 = require('./util/base64.js');
require('../xdr/index.js');
var hashing = require('./hashing.js');
var transaction = require('./transaction.js');
var transaction_base = require('./transaction_base.js');
var decode_encode_muxed_account = require('./util/decode_encode_muxed_account.js');
var feeBumpTransactionEnvelope = require('../xdr/generated/fee-bump-transaction-envelope.js');
var transactionEnvelope = require('../xdr/generated/transaction-envelope.js');
var transactionSignaturePayloadTaggedTransaction = require('../xdr/generated/transaction-signature-payload-tagged-transaction.js');
var transactionSignaturePayload = require('../xdr/generated/transaction-signature-payload.js');
var hash = require('../xdr/generated/hash.js');
var feeBumpTransaction = require('../xdr/generated/fee-bump-transaction.js');

class FeeBumpTransaction extends transaction_base.TransactionBase {
  _feeSource;
  _innerTransaction;
  /**
   * @param envelope - transaction envelope object or base64 encoded string.
   * @param networkPassphrase - passphrase of the target Stellar network
   *     (e.g. "Public Global Stellar Network ; September 2015").
   */
  constructor(envelope, networkPassphrase) {
    if (typeof envelope === "string") {
      const bytes = base64.base64ToUint8Array(envelope);
      envelope = transactionEnvelope.TransactionEnvelope.fromXdr(bytes);
    }
    const envelopeType = envelope.type;
    if (envelopeType !== "envelopeTypeTxFeeBump") {
      throw new Error(
        `Invalid TransactionEnvelope: expected an envelopeTypeTxFeeBump but received an ${envelopeType}.`
      );
    }
    const txEnvelope = envelope.value;
    const tx = txEnvelope.tx;
    const fee = tx.fee.toString();
    const signatures = (txEnvelope.signatures || []).slice();
    super(tx, signatures, fee, networkPassphrase);
    const innerTxEnvelope = transactionEnvelope.TransactionEnvelope.envelopeTypeTx(
      tx.innerTx.value
    );
    this._feeSource = decode_encode_muxed_account.encodeMuxedAccountToAddress(this.tx.feeSource);
    this._innerTransaction = new transaction.Transaction(
      innerTxEnvelope,
      networkPassphrase
    );
  }
  /**
   * The inner transaction that this fee bump wraps.
   */
  get innerTransaction() {
    return this._innerTransaction;
  }
  /**
   * The operations from the inner transaction.
   */
  get operations() {
    return this._innerTransaction.operations;
  }
  /**
   * The account paying the fee for this transaction.
   */
  get feeSource() {
    return this._feeSource;
  }
  /**
   * Returns the "signature base" of this transaction, which is the value
   * that, when hashed, should be signed to create a signature that
   * validators on the Stellar Network will accept.
   *
   * It is composed of a 4 prefix bytes followed by the xdr-encoded form
   * of this transaction.
   */
  signatureBase() {
    const taggedTransaction = transactionSignaturePayloadTaggedTransaction.TransactionSignaturePayloadTaggedTransaction.envelopeTypeTxFeeBump(
      this.tx
    );
    const txSignature = new transactionSignaturePayload.TransactionSignaturePayload({
      networkId: hash.Hash.fromXdr(hashing.hash(this.networkPassphrase)),
      taggedTransaction
    });
    return txSignature.toXdr();
  }
  /**
   * To envelope returns a xdr.TransactionEnvelope which can be submitted to the network.
   */
  toEnvelope() {
    const envelope = new feeBumpTransactionEnvelope.FeeBumpTransactionEnvelope({
      tx: feeBumpTransaction.FeeBumpTransaction.fromXdr(this.tx.toXdr()),
      // make a copy of the tx
      signatures: this.signatures.slice()
      // make a copy of the signatures
    });
    return transactionEnvelope.TransactionEnvelope.envelopeTypeTxFeeBump(envelope);
  }
}

exports.FeeBumpTransaction = FeeBumpTransaction;
//# sourceMappingURL=fee_bump_transaction.js.map
