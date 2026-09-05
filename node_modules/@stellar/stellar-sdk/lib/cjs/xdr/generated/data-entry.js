'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var publicKey = require('./public-key.js');
var dataValue = require('./data-value.js');
var dataEntryExt = require('./data-entry-ext.js');

class DataEntry extends xdrValue.XdrValue {
  accountId;
  dataName;
  dataValue;
  ext;
  static schema = jsXdr.struct("DataEntry", {
    accountId: publicKey.PublicKey.schema,
    dataName: xdrString.xdrString(64),
    dataValue: dataValue.DataValue.schema,
    ext: dataEntryExt.DataEntryExt.schema
  });
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.dataName = input.dataName instanceof xdrString.XdrString ? input.dataName : new xdrString.XdrString(input.dataName);
    this.dataValue = input.dataValue instanceof dataValue.DataValue ? input.dataValue : new dataValue.DataValue(input.dataValue);
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      dataName: this.dataName,
      dataValue: this.dataValue.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DataEntry({
      accountId: publicKey.PublicKey.fromXdrObject(wire.accountId),
      dataName: wire.dataName,
      dataValue: dataValue.DataValue.fromXdrObject(wire.dataValue),
      ext: dataEntryExt.DataEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.DataEntry = DataEntry;
//# sourceMappingURL=data-entry.js.map
