import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractIdPreimage } from './contract-id-preimage.js';
import { ContractExecutable } from './contract-executable.js';

class CreateContractArgs extends XdrValue {
  contractIdPreimage;
  executable;
  static schema = struct(
    "CreateContractArgs",
    {
      contractIdPreimage: ContractIdPreimage.schema,
      executable: ContractExecutable.schema
    }
  );
  constructor(input) {
    super();
    this.contractIdPreimage = input.contractIdPreimage;
    this.executable = input.executable;
  }
  toXdrObject() {
    return {
      contractIdPreimage: this.contractIdPreimage.toXdrObject(),
      executable: this.executable.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new CreateContractArgs({
      contractIdPreimage: ContractIdPreimage.fromXdrObject(
        wire.contractIdPreimage
      ),
      executable: ContractExecutable.fromXdrObject(wire.executable)
    });
  }
}

export { CreateContractArgs };
//# sourceMappingURL=create-contract-args.js.map
