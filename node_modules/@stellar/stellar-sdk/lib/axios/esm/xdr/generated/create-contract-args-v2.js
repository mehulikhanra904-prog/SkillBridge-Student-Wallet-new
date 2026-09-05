import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractIdPreimage } from './contract-id-preimage.js';
import { ContractExecutable } from './contract-executable.js';
import { ScVal } from './sc-val.js';

class CreateContractArgsV2 extends XdrValue {
  contractIdPreimage;
  executable;
  constructorArgs;
  static schema = struct(
    "CreateContractArgsV2",
    {
      contractIdPreimage: ContractIdPreimage.schema,
      executable: ContractExecutable.schema,
      constructorArgs: array(ScVal.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.contractIdPreimage = input.contractIdPreimage;
    this.executable = input.executable;
    this.constructorArgs = input.constructorArgs;
  }
  toXdrObject() {
    return {
      contractIdPreimage: this.contractIdPreimage.toXdrObject(),
      executable: this.executable.toXdrObject(),
      constructorArgs: this.constructorArgs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new CreateContractArgsV2({
      contractIdPreimage: ContractIdPreimage.fromXdrObject(
        wire.contractIdPreimage
      ),
      executable: ContractExecutable.fromXdrObject(wire.executable),
      constructorArgs: wire.constructorArgs.map((w) => ScVal.fromXdrObject(w))
    });
  }
}

export { CreateContractArgsV2 };
//# sourceMappingURL=create-contract-args-v2.js.map
