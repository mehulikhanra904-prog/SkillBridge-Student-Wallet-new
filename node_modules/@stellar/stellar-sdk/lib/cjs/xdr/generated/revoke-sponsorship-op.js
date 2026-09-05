'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var revokeSponsorshipType = require('./revoke-sponsorship-type.js');
var ledgerKey = require('./ledger-key.js');
var revokeSponsorshipOpSigner = require('./revoke-sponsorship-op-signer.js');

class RevokeSponsorshipOpBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === RevokeSponsorshipOpBase) {
      throw new TypeError(
        "new xdr.RevokeSponsorshipOp(...) is not supported: XDR unions are built from per-variant factories. Call xdr.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "RevokeSponsorshipOp",
    {
      switchOn: revokeSponsorshipType.RevokeSponsorshipType.schema,
      cases: [
        jsXdr.case(
          "revokeSponsorshipLedgerEntry",
          0,
          jsXdr.field("ledgerKey", ledgerKey.LedgerKey.schema)
        ),
        jsXdr.case(
          "revokeSponsorshipSigner",
          1,
          jsXdr.field("signer", revokeSponsorshipOpSigner.RevokeSponsorshipOpSigner.schema)
        )
      ]
    }
  );
  static revokeSponsorshipLedgerEntry(ledgerKey) {
    return new RevokeSponsorshipOpLedgerEntry(ledgerKey);
  }
  static revokeSponsorshipSigner(signer) {
    return new RevokeSponsorshipOpSignerArm(signer);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new RevokeSponsorshipOpLedgerEntry(
          ledgerKey.LedgerKey.fromXdrObject(wire.ledgerKey)
        );
      case 1:
        return new RevokeSponsorshipOpSignerArm(
          revokeSponsorshipOpSigner.RevokeSponsorshipOpSigner.fromXdrObject(wire.signer)
        );
    }
    throw new jsXdr.XdrError(
      `RevokeSponsorshipOp: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete RevokeSponsorshipOp variant.
   * Use this instead of `instanceof RevokeSponsorshipOp`: the exported `RevokeSponsorshipOp` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `RevokeSponsorshipOp.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof RevokeSponsorshipOpBase;
  }
}
class RevokeSponsorshipOpLedgerEntry extends RevokeSponsorshipOpBase {
  type = "revokeSponsorshipLedgerEntry";
  ledgerKey;
  constructor(ledgerKey) {
    super();
    this.ledgerKey = ledgerKey;
  }
  get value() {
    return this.ledgerKey;
  }
  toXdrObject() {
    return { type: 0, ledgerKey: this.ledgerKey.toXdrObject() };
  }
}
class RevokeSponsorshipOpSignerArm extends RevokeSponsorshipOpBase {
  type = "revokeSponsorshipSigner";
  signer;
  constructor(signer) {
    super();
    this.signer = signer;
  }
  get value() {
    return this.signer;
  }
  toXdrObject() {
    return { type: 1, signer: this.signer.toXdrObject() };
  }
}
const RevokeSponsorshipOp = RevokeSponsorshipOpBase;

exports.RevokeSponsorshipOp = RevokeSponsorshipOp;
exports.RevokeSponsorshipOpLedgerEntry = RevokeSponsorshipOpLedgerEntry;
exports.RevokeSponsorshipOpSignerArm = RevokeSponsorshipOpSignerArm;
//# sourceMappingURL=revoke-sponsorship-op.js.map
