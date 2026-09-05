import { struct, array, uint32, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class SorobanResourcesExtV0 extends XdrValue {
  archivedSorobanEntries;
  static schema = struct(
    "SorobanResourcesExtV0",
    {
      archivedSorobanEntries: array(uint32(), UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.archivedSorobanEntries = input.archivedSorobanEntries;
  }
  toXdrObject() {
    return {
      archivedSorobanEntries: this.archivedSorobanEntries
    };
  }
  static fromXdrObject(wire) {
    return new SorobanResourcesExtV0({
      archivedSorobanEntries: wire.archivedSorobanEntries
    });
  }
}

export { SorobanResourcesExtV0 };
//# sourceMappingURL=soroban-resources-ext-v0.js.map
