import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanTransactionMetaExt } from './soroban-transaction-meta-ext.js';
import { ContractEvent } from './contract-event.js';
import { ScVal } from './sc-val.js';
import { DiagnosticEvent } from './diagnostic-event.js';

class SorobanTransactionMeta extends XdrValue {
  ext;
  events;
  returnValue;
  diagnosticEvents;
  static schema = struct(
    "SorobanTransactionMeta",
    {
      ext: SorobanTransactionMetaExt.schema,
      events: array(ContractEvent.schema, UNBOUNDED_MAX_LENGTH),
      returnValue: ScVal.schema,
      diagnosticEvents: array(DiagnosticEvent.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.events = input.events;
    this.returnValue = input.returnValue;
    this.diagnosticEvents = input.diagnosticEvents;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      events: this.events.map((v) => v.toXdrObject()),
      returnValue: this.returnValue.toXdrObject(),
      diagnosticEvents: this.diagnosticEvents.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionMeta({
      ext: SorobanTransactionMetaExt.fromXdrObject(wire.ext),
      events: wire.events.map((w) => ContractEvent.fromXdrObject(w)),
      returnValue: ScVal.fromXdrObject(wire.returnValue),
      diagnosticEvents: wire.diagnosticEvents.map(
        (w) => DiagnosticEvent.fromXdrObject(w)
      )
    });
  }
}

export { SorobanTransactionMeta };
//# sourceMappingURL=soroban-transaction-meta.js.map
