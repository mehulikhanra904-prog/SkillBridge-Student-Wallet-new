'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');

class ContractCodeCostInputs extends xdrValue.XdrValue {
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
  static schema = jsXdr.struct(
    "ContractCodeCostInputs",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      nInstructions: jsXdr.uint32(),
      nFunctions: jsXdr.uint32(),
      nGlobals: jsXdr.uint32(),
      nTableEntries: jsXdr.uint32(),
      nTypes: jsXdr.uint32(),
      nDataSegments: jsXdr.uint32(),
      nElemSegments: jsXdr.uint32(),
      nImports: jsXdr.uint32(),
      nExports: jsXdr.uint32(),
      nDataSegmentBytes: jsXdr.uint32()
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
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
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

exports.ContractCodeCostInputs = ContractCodeCostInputs;
//# sourceMappingURL=contract-code-cost-inputs.js.map
