import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { BucketEntryType } from './bucket-entry-type.js';
import { LedgerEntry } from './ledger-entry.js';
import { LedgerKey } from './ledger-key.js';
import { BucketMetadata } from './bucket-metadata.js';

class BucketEntryBase extends XdrValue {
  constructor() {
    super();
    if (new.target === BucketEntryBase) {
      throw new TypeError(
        "new xdr.BucketEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.BucketEntry.liveentry(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("BucketEntry", {
    switchOn: BucketEntryType.schema,
    cases: [
      _case("liveentry", 0, field("liveEntry", LedgerEntry.schema)),
      _case("initentry", 2, field("liveEntry", LedgerEntry.schema)),
      _case("deadentry", 1, field("deadEntry", LedgerKey.schema)),
      _case("metaentry", -1, field("metaEntry", BucketMetadata.schema))
    ]
  });
  static liveentry(liveEntry) {
    return new BucketEntryLiveentry(liveEntry);
  }
  static initentry(liveEntry) {
    return new BucketEntryInitentry(liveEntry);
  }
  static deadentry(deadEntry) {
    return new BucketEntryDeadentry(deadEntry);
  }
  static metaentry(metaEntry) {
    return new BucketEntryMetaentry(metaEntry);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new BucketEntryLiveentry(
          LedgerEntry.fromXdrObject(wire.liveEntry)
        );
      case 2:
        return new BucketEntryInitentry(
          LedgerEntry.fromXdrObject(wire.liveEntry)
        );
      case 1:
        return new BucketEntryDeadentry(
          LedgerKey.fromXdrObject(wire.deadEntry)
        );
      case -1:
        return new BucketEntryMetaentry(
          BucketMetadata.fromXdrObject(wire.metaEntry)
        );
    }
    throw new XdrError(
      `BucketEntry: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete BucketEntry variant.
   * Use this instead of `instanceof BucketEntry`: the exported `BucketEntry` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `BucketEntry.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof BucketEntryBase;
  }
}
class BucketEntryLiveentry extends BucketEntryBase {
  type = "liveentry";
  liveEntry;
  constructor(liveEntry) {
    super();
    this.liveEntry = liveEntry;
  }
  get value() {
    return this.liveEntry;
  }
  toXdrObject() {
    return { type: 0, liveEntry: this.liveEntry.toXdrObject() };
  }
}
class BucketEntryInitentry extends BucketEntryBase {
  type = "initentry";
  liveEntry;
  constructor(liveEntry) {
    super();
    this.liveEntry = liveEntry;
  }
  get value() {
    return this.liveEntry;
  }
  toXdrObject() {
    return { type: 2, liveEntry: this.liveEntry.toXdrObject() };
  }
}
class BucketEntryDeadentry extends BucketEntryBase {
  type = "deadentry";
  deadEntry;
  constructor(deadEntry) {
    super();
    this.deadEntry = deadEntry;
  }
  get value() {
    return this.deadEntry;
  }
  toXdrObject() {
    return { type: 1, deadEntry: this.deadEntry.toXdrObject() };
  }
}
class BucketEntryMetaentry extends BucketEntryBase {
  type = "metaentry";
  metaEntry;
  constructor(metaEntry) {
    super();
    this.metaEntry = metaEntry;
  }
  get value() {
    return this.metaEntry;
  }
  toXdrObject() {
    return { type: -1, metaEntry: this.metaEntry.toXdrObject() };
  }
}
const BucketEntry = BucketEntryBase;

export { BucketEntry, BucketEntryDeadentry, BucketEntryInitentry, BucketEntryLiveentry, BucketEntryMetaentry };
//# sourceMappingURL=bucket-entry.js.map
