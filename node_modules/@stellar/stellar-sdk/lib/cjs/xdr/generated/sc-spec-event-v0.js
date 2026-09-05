'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecEventParamV0 = require('./sc-spec-event-param-v0.js');
var scSpecEventDataFormat = require('./sc-spec-event-data-format.js');

class ScSpecEventV0 extends xdrValue.XdrValue {
  doc;
  lib;
  name;
  prefixTopics;
  params;
  dataFormat;
  static schema = jsXdr.struct("ScSpecEventV0", {
    doc: xdrString.xdrString(1024),
    lib: xdrString.xdrString(80),
    name: xdrString.xdrString(32),
    prefixTopics: jsXdr.array(xdrString.xdrString(32), 2),
    params: jsXdr.array(scSpecEventParamV0.ScSpecEventParamV0.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
    dataFormat: scSpecEventDataFormat.ScSpecEventDataFormat.schema
  });
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.lib = input.lib instanceof xdrString.XdrString ? input.lib : new xdrString.XdrString(input.lib);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
    this.prefixTopics = input.prefixTopics.map(
      (v) => v instanceof xdrString.XdrString ? v : new xdrString.XdrString(v)
    );
    this.params = input.params;
    this.dataFormat = input.dataFormat;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      lib: this.lib,
      name: this.name,
      prefixTopics: this.prefixTopics,
      params: this.params.map((v) => v.toXdrObject()),
      dataFormat: this.dataFormat.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecEventV0({
      doc: wire.doc,
      lib: wire.lib,
      name: wire.name,
      prefixTopics: wire.prefixTopics,
      params: wire.params.map((w) => scSpecEventParamV0.ScSpecEventParamV0.fromXdrObject(w)),
      dataFormat: scSpecEventDataFormat.ScSpecEventDataFormat.fromXdrObject(wire.dataFormat)
    });
  }
}

exports.ScSpecEventV0 = ScSpecEventV0;
//# sourceMappingURL=sc-spec-event-v0.js.map
