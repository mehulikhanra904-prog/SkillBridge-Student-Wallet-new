'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hotArchiveBucketEntryType = require('./hot-archive-bucket-entry-type.js');
var ledgerEntry = require('./ledger-entry.js');
var ledgerKey = require('./ledger-key.js');
var bucketMetadata = require('./bucket-metadata.js');

class HotArchiveBucketEntryBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === HotArchiveBucketEntryBase) {
      throw new TypeError(
        "new xdr.HotArchiveBucketEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.HotArchiveBucketEntry.hotArchiveArchived(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "HotArchiveBucketEntry",
    {
      switchOn: hotArchiveBucketEntryType.HotArchiveBucketEntryType.schema,
      cases: [
        jsXdr.case(
          "hotArchiveArchived",
          0,
          jsXdr.field("archivedEntry", ledgerEntry.LedgerEntry.schema)
        ),
        jsXdr.case("hotArchiveLive", 1, jsXdr.field("key", ledgerKey.LedgerKey.schema)),
        jsXdr.case(
          "hotArchiveMetaentry",
          -1,
          jsXdr.field("metaEntry", bucketMetadata.BucketMetadata.schema)
        )
      ]
    }
  );
  static hotArchiveArchived(archivedEntry) {
    return new HotArchiveBucketEntryArchived(archivedEntry);
  }
  static hotArchiveLive(key) {
    return new HotArchiveBucketEntryLive(key);
  }
  static hotArchiveMetaentry(metaEntry) {
    return new HotArchiveBucketEntryMetaentry(metaEntry);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new HotArchiveBucketEntryArchived(
          ledgerEntry.LedgerEntry.fromXdrObject(wire.archivedEntry)
        );
      case 1:
        return new HotArchiveBucketEntryLive(ledgerKey.LedgerKey.fromXdrObject(wire.key));
      case -1:
        return new HotArchiveBucketEntryMetaentry(
          bucketMetadata.BucketMetadata.fromXdrObject(wire.metaEntry)
        );
    }
    throw new jsXdr.XdrError(
      `HotArchiveBucketEntry: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete HotArchiveBucketEntry variant.
   * Use this instead of `instanceof HotArchiveBucketEntry`: the exported `HotArchiveBucketEntry` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `HotArchiveBucketEntry.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof HotArchiveBucketEntryBase;
  }
}
class HotArchiveBucketEntryArchived extends HotArchiveBucketEntryBase {
  type = "hotArchiveArchived";
  archivedEntry;
  constructor(archivedEntry) {
    super();
    this.archivedEntry = archivedEntry;
  }
  get value() {
    return this.archivedEntry;
  }
  toXdrObject() {
    return { type: 0, archivedEntry: this.archivedEntry.toXdrObject() };
  }
}
class HotArchiveBucketEntryLive extends HotArchiveBucketEntryBase {
  type = "hotArchiveLive";
  key;
  constructor(key) {
    super();
    this.key = key;
  }
  get value() {
    return this.key;
  }
  toXdrObject() {
    return { type: 1, key: this.key.toXdrObject() };
  }
}
class HotArchiveBucketEntryMetaentry extends HotArchiveBucketEntryBase {
  type = "hotArchiveMetaentry";
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
const HotArchiveBucketEntry = HotArchiveBucketEntryBase;

exports.HotArchiveBucketEntry = HotArchiveBucketEntry;
exports.HotArchiveBucketEntryArchived = HotArchiveBucketEntryArchived;
exports.HotArchiveBucketEntryLive = HotArchiveBucketEntryLive;
exports.HotArchiveBucketEntryMetaentry = HotArchiveBucketEntryMetaentry;
//# sourceMappingURL=hot-archive-bucket-entry.js.map
