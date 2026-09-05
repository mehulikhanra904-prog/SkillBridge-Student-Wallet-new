import { XdrError } from '@stellar/js-xdr';
import { XdrValue } from './xdr-value.js';

class EnumValue extends XdrValue {
  name;
  value;
  constructor(name, value) {
    super();
    this.name = name;
    this.value = value;
  }
  toXdrObject() {
    return this.value;
  }
}
function withMemberPrefix(schema, memberPrefix) {
  return Object.assign(schema, { memberPrefix });
}
function enumFromValue(className, schema, instances, value) {
  const name = schema.nameByValue.get(value);
  if (name === void 0) {
    throw new XdrError(`${className}: unknown enum value ${value}`);
  }
  return enumFromName(className, instances, name);
}
function enumFromName(className, instances, name) {
  const instance = instances[name];
  if (!(instance instanceof EnumValue)) {
    throw new XdrError(`${className}: unknown name ${name}`);
  }
  return instance;
}

export { EnumValue, enumFromName, enumFromValue, withMemberPrefix };
//# sourceMappingURL=enum-value.js.map
