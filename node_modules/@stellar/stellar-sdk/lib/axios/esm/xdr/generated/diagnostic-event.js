import { struct, bool } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractEvent } from './contract-event.js';

class DiagnosticEvent extends XdrValue {
  inSuccessfulContractCall;
  event;
  static schema = struct(
    "DiagnosticEvent",
    {
      inSuccessfulContractCall: bool(),
      event: ContractEvent.schema
    }
  );
  constructor(input) {
    super();
    this.inSuccessfulContractCall = input.inSuccessfulContractCall;
    this.event = input.event;
  }
  toXdrObject() {
    return {
      inSuccessfulContractCall: this.inSuccessfulContractCall,
      event: this.event.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DiagnosticEvent({
      inSuccessfulContractCall: wire.inSuccessfulContractCall,
      event: ContractEvent.fromXdrObject(wire.event)
    });
  }
}

export { DiagnosticEvent };
//# sourceMappingURL=diagnostic-event.js.map
