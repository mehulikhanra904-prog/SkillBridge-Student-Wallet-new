import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { RevokeSponsorshipType } from './revoke-sponsorship-type.js';
import { LedgerKey } from './ledger-key.js';
import { RevokeSponsorshipOpSigner } from './revoke-sponsorship-op-signer.js';

class RevokeSponsorshipOpBase extends XdrValue {
  constructor() {
    super();
    if (new.target === RevokeSponsorshipOpBase) {
      throw new TypeError(
        "new xdr.RevokeSponsorshipOp(...) is not supported: XDR unions are built from per-variant factories. Call xdr.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "RevokeSponsorshipOp",
    {
      switchOn: RevokeSponsorshipType.schema,
      cases: [
        _case(
          "revokeSponsorshipLedgerEntry",
          0,
          field("ledgerKey", LedgerKey.schema)
        ),
        _case(
          "revokeSponsorshipSigner",
          1,
          field("signer", RevokeSponsorshipOpSigner.schema)
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
          LedgerKey.fromXdrObject(wire.ledgerKey)
        );
      case 1:
        return new RevokeSponsorshipOpSignerArm(
          RevokeSponsorshipOpSigner.fromXdrObject(wire.signer)
        );
    }
    throw new XdrError(
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

export { RevokeSponsorshipOp, RevokeSponsorshipOpLedgerEntry, RevokeSponsorshipOpSignerArm };
//# sourceMappingURL=revoke-sponsorship-op.js.map
