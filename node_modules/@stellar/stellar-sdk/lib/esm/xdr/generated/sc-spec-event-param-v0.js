import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecTypeDef } from './sc-spec-type-def.js';
import { ScSpecEventParamLocationV0 } from './sc-spec-event-param-location-v0.js';

class ScSpecEventParamV0 extends XdrValue {
  doc;
  name;
  type;
  location;
  static schema = struct(
    "ScSpecEventParamV0",
    {
      doc: xdrString(1024),
      name: xdrString(30),
      type: ScSpecTypeDef.schema,
      location: ScSpecEventParamLocationV0.schema
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
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
      type: ScSpecTypeDef.fromXdrObject(wire.type),
      location: ScSpecEventParamLocationV0.fromXdrObject(wire.location)
    });
  }
}

export { ScSpecEventParamV0 };
//# sourceMappingURL=sc-spec-event-param-v0.js.map
