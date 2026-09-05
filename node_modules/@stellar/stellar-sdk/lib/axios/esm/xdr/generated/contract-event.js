import { struct, option } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';
import { ContractId } from './contract-id.js';
import { ContractEventType } from './contract-event-type.js';
import { ContractEventBody } from './contract-event-body.js';

class ContractEvent extends XdrValue {
  ext;
  contractId;
  type;
  body;
  static schema = struct("ContractEvent", {
    ext: ExtensionPoint.schema,
    contractId: option(ContractId.schema),
    type: ContractEventType.schema,
    body: ContractEventBody.schema
  });
  constructor(input) {
    super();
    this.ext = input.ext;
    this.contractId = input.contractId;
    this.type = input.type;
    this.body = input.body;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      contractId: this.contractId === null ? null : this.contractId.toXdrObject(),
      type: this.type.toXdrObject(),
      body: this.body.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractEvent({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      contractId: wire.contractId === null ? null : ContractId.fromXdrObject(wire.contractId),
      type: ContractEventType.fromXdrObject(wire.type),
      body: ContractEventBody.fromXdrObject(wire.body)
    });
  }
}

export { ContractEvent };
//# sourceMappingURL=contract-event.js.map
