import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';

class ContractCodeCostInputs extends XdrValue {
  ext;
  nInstructions;
  nFunctions;
  nGlobals;
  nTableEntries;
  nTypes;
  nDataSegments;
  nElemSegments;
  nImports;
  nExports;
  nDataSegmentBytes;
  static schema = struct(
    "ContractCodeCostInputs",
    {
      ext: ExtensionPoint.schema,
      nInstructions: uint32(),
      nFunctions: uint32(),
      nGlobals: uint32(),
      nTableEntries: uint32(),
      nTypes: uint32(),
      nDataSegments: uint32(),
      nElemSegments: uint32(),
      nImports: uint32(),
      nExports: uint32(),
      nDataSegmentBytes: uint32()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.nInstructions = input.nInstructions;
    this.nFunctions = input.nFunctions;
    this.nGlobals = input.nGlobals;
    this.nTableEntries = input.nTableEntries;
    this.nTypes = input.nTypes;
    this.nDataSegments = input.nDataSegments;
    this.nElemSegments = input.nElemSegments;
    this.nImports = input.nImports;
    this.nExports = input.nExports;
    this.nDataSegmentBytes = input.nDataSegmentBytes;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      nInstructions: this.nInstructions,
      nFunctions: this.nFunctions,
      nGlobals: this.nGlobals,
      nTableEntries: this.nTableEntries,
      nTypes: this.nTypes,
      nDataSegments: this.nDataSegments,
      nElemSegments: this.nElemSegments,
      nImports: this.nImports,
      nExports: this.nExports,
      nDataSegmentBytes: this.nDataSegmentBytes
    };
  }
  static fromXdrObject(wire) {
    return new ContractCodeCostInputs({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      nInstructions: wire.nInstructions,
      nFunctions: wire.nFunctions,
      nGlobals: wire.nGlobals,
      nTableEntries: wire.nTableEntries,
      nTypes: wire.nTypes,
      nDataSegments: wire.nDataSegments,
      nElemSegments: wire.nElemSegments,
      nImports: wire.nImports,
      nExports: wire.nExports,
      nDataSegmentBytes: wire.nDataSegmentBytes
    });
  }
}

export { ContractCodeCostInputs };
//# sourceMappingURL=contract-code-cost-inputs.js.map
