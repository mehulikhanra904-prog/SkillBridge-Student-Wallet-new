'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var dataValue = require('./data-value.js');

class ManageDataOp extends xdrValue.XdrValue {
  dataName;
  dataValue;
  static schema = jsXdr.struct("ManageDataOp", {
    dataName: xdrString.xdrString(64),
    dataValue: jsXdr.option(dataValue.DataValue.schema)
  });
  constructor(input) {
    super();
    this.dataName = input.dataName instanceof xdrString.XdrString ? input.dataName : new xdrString.XdrString(input.dataName);
    this.dataValue = input.dataValue === null ? null : input.dataValue instanceof dataValue.DataValue ? input.dataValue : new dataValue.DataValue(input.dataValue);
  }
  toXdrObject() {
    return {
      dataName: this.dataName,
      dataValue: this.dataValue === null ? null : this.dataValue.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ManageDataOp({
      dataName: wire.dataName,
      dataValue: wire.dataValue === null ? null : dataValue.DataValue.fromXdrObject(wire.dataValue)
    });
  }
}

exports.ManageDataOp = ManageDataOp;
//# sourceMappingURL=manage-data-op.js.map
