import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { BucketMetadataExt } from './bucket-metadata-ext.js';

class BucketMetadata extends XdrValue {
  ledgerVersion;
  ext;
  static schema = struct(
    "BucketMetadata",
    {
      ledgerVersion: uint32(),
      ext: BucketMetadataExt.schema
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
      ext: BucketMetadataExt.fromXdrObject(wire.ext)
    });
  }
}

export { BucketMetadata };
//# sourceMappingURL=bucket-metadata.js.map
