'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecTypeDef = require('./sc-spec-type-def.js');
var scSpecEventParamLocationV0 = require('./sc-spec-event-param-location-v0.js');

class ScSpecEventParamV0 extends xdrValue.XdrValue {
  doc;
  name;
  type;
  location;
  static schema = jsXdr.struct(
    "ScSpecEventParamV0",
    {
      doc: xdrString.xdrString(1024),
      name: xdrString.xdrString(30),
      type: scSpecTypeDef.ScSpecTypeDef.schema,
      location: scSpecEventParamLocationV0.ScSpecEventParamLocationV0.schema
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
    this.type = input.type;
    this.location = input.location;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      name: this.name,
      type: this.type.toXdrObject(),
      location: this.location.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecEventParamV0({
      doc: wire.doc,
      name: wire.name,
      type: scSpecTypeDef.ScSpecTypeDef.fromXdrObject(wire.type),
      location: scSpecEventParamLocationV0.ScSpecEventParamLocationV0.fromXdrObject(wire.location)
    });
  }
}

exports.ScSpecEventParamV0 = ScSpecEventParamV0;
//# sourceMappingURL=sc-spec-event-param-v0.js.map
