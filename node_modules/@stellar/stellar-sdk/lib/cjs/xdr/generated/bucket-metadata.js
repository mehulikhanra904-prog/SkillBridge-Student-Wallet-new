'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var bucketMetadataExt = require('./bucket-metadata-ext.js');

class BucketMetadata extends xdrValue.XdrValue {
  ledgerVersion;
  ext;
  static schema = jsXdr.struct(
    "BucketMetadata",
    {
      ledgerVersion: jsXdr.uint32(),
      ext: bucketMetadataExt.BucketMetadataExt.schema
    }
  );
  constructor(input) {
    super();
    this.ledgerVersion = input.ledgerVersion;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ledgerVersion: this.ledgerVersion,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new BucketMetadata({
      ledgerVersion: wire.ledgerVersion,
      ext: bucketMetadataExt.BucketMetadataExt.fromXdrObject(wire.ext)
    });
  }
}

exports.BucketMetadata = BucketMetadata;
//# sourceMappingURL=bucket-metadata.js.map
