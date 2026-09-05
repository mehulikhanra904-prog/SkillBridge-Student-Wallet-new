'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var bucketEntryType = require('./bucket-entry-type.js');
var ledgerEntry = require('./ledger-entry.js');
var ledgerKey = require('./ledger-key.js');
var bucketMetadata = require('./bucket-metadata.js');

class BucketEntryBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === BucketEntryBase) {
      throw new TypeError(
        "new xdr.BucketEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.BucketEntry.liveentry(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("BucketEntry", {
    switchOn: bucketEntryType.BucketEntryType.schema,
    cases: [
      jsXdr.case("liveentry", 0, jsXdr.field("liveEntry", ledgerEntry.LedgerEntry.schema)),
      jsXdr.case("initentry", 2, jsXdr.field("liveEntry", ledgerEntry.LedgerEntry.schema)),
      jsXdr.case("deadentry", 1, jsXdr.field("deadEntry", ledgerKey.LedgerKey.schema)),
      jsXdr.case("metaentry", -1, jsXdr.field("metaEntry", bucketMetadata.BucketMetadata.schema))
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
          ledgerEntry.LedgerEntry.fromXdrObject(wire.liveEntry)
        );
      case 2:
        return new BucketEntryInitentry(
          ledgerEntry.LedgerEntry.fromXdrObject(wire.liveEntry)
        );
      case 1:
        return new BucketEntryDeadentry(
          ledgerKey.LedgerKey.fromXdrObject(wire.deadEntry)
        );
      case -1:
        return new BucketEntryMetaentry(
          bucketMetadata.BucketMetadata.fromXdrObject(wire.metaEntry)
        );
    }
    throw new jsXdr.XdrError(
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

exports.BucketEntry = BucketEntry;
exports.BucketEntryDeadentry = BucketEntryDeadentry;
exports.BucketEntryInitentry = BucketEntryInitentry;
exports.BucketEntryLiveentry = BucketEntryLiveentry;
exports.BucketEntryMetaentry = BucketEntryMetaentry;
//# sourceMappingURL=bucket-entry.js.map
