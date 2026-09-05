import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScAddress } from './sc-address.js';
import { ScVal } from './sc-val.js';

class InvokeContractArgs extends XdrValue {
  contractAddress;
  functionName;
  args;
  static schema = struct(
    "InvokeContractArgs",
    {
      contractAddress: ScAddress.schema,
      functionName: xdrString(32),
      args: array(ScVal.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.contractAddress = input.contractAddress;
    this.functionName = input.functionName instanceof XdrString ? input.functionName : new XdrString(input.functionName);
    this.args = input.args;
  }
  toXdrObject() {
    return {
      contractAddress: this.contractAddress.toXdrObject(),
      functionName: this.functionName,
      args: this.args.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new InvokeContractArgs({
      contractAddress: ScAddress.fromXdrObject(wire.contractAddress),
      functionName: wire.functionName,
      args: wire.args.map((w) => ScVal.fromXdrObject(w))
    });
  }
}

export { InvokeContractArgs };
//# sourceMappingURL=invoke-contract-args.js.map
