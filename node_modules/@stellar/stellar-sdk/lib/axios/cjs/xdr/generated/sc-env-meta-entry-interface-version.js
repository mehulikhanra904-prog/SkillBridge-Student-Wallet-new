'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ScEnvMetaEntryInterfaceVersion extends xdrValue.XdrValue {
  protocol;
  preRelease;
  static schema = jsXdr.struct(
    "ScEnvMetaEntryInterfaceVersion",
    {
      protocol: jsXdr.uint32(),
      preRelease: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.protocol = input.protocol;
    this.preRelease = input.preRelease;
  }
  toXdrObject() {
    return {
      protocol: this.protocol,
      preRelease: this.preRelease
    };
  }
  static fromXdrObject(wire) {
    return new ScEnvMetaEntryInterfaceVersion({
      protocol: wire.protocol,
      preRelease: wire.preRelease
    });
  }
}

exports.ScEnvMetaEntryInterfaceVersion = ScEnvMetaEntryInterfaceVersion;
//# sourceMappingURL=sc-env-meta-entry-interface-version.js.map
