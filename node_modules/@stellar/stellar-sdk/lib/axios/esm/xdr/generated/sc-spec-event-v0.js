import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecEventParamV0 } from './sc-spec-event-param-v0.js';
import { ScSpecEventDataFormat } from './sc-spec-event-data-format.js';

class ScSpecEventV0 extends XdrValue {
  doc;
  lib;
  name;
  prefixTopics;
  params;
  dataFormat;
  static schema = struct("ScSpecEventV0", {
    doc: xdrString(1024),
    lib: xdrString(80),
    name: xdrString(32),
    prefixTopics: array(xdrString(32), 2),
    params: array(ScSpecEventParamV0.schema, UNBOUNDED_MAX_LENGTH),
    dataFormat: ScSpecEventDataFormat.schema
  });
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.lib = input.lib instanceof XdrString ? input.lib : new XdrString(input.lib);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
    this.prefixTopics = input.prefixTopics.map(
      (v) => v instanceof XdrString ? v : new XdrString(v)
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
      params: wire.params.map((w) => ScSpecEventParamV0.fromXdrObject(w)),
      dataFormat: ScSpecEventDataFormat.fromXdrObject(wire.dataFormat)
    });
  }
}

export { ScSpecEventV0 };
//# sourceMappingURL=sc-spec-event-v0.js.map
