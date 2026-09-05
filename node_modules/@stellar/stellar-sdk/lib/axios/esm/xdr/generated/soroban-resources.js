import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerFootprint } from './ledger-footprint.js';

class SorobanResources extends XdrValue {
  footprint;
  instructions;
  diskReadBytes;
  writeBytes;
  static schema = struct(
    "SorobanResources",
    {
      footprint: LedgerFootprint.schema,
      instructions: uint32(),
      diskReadBytes: uint32(),
      writeBytes: uint32()
    }
  );
  constructor(input) {
    super();
    this.footprint = input.footprint;
    this.instructions = input.instructions;
    this.diskReadBytes = input.diskReadBytes;
    this.writeBytes = input.writeBytes;
  }
  toXdrObject() {
    return {
      footprint: this.footprint.toXdrObject(),
      instructions: this.instructions,
      diskReadBytes: this.diskReadBytes,
      writeBytes: this.writeBytes
    };
  }
  static fromXdrObject(wire) {
    return new SorobanResources({
      footprint: LedgerFootprint.fromXdrObject(wire.footprint),
      instructions: wire.instructions,
      diskReadBytes: wire.diskReadBytes,
      writeBytes: wire.writeBytes
    });
  }
}

export { SorobanResources };
//# sourceMappingURL=soroban-resources.js.map
