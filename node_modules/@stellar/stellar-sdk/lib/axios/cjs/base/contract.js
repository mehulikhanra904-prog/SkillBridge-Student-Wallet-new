'use strict';

var address = require('./address.js');
var operation = require('./operation.js');
require('../xdr/index.js');
var strkey = require('./strkey.js');
var ledgerKeyContractData = require('../xdr/generated/ledger-key-contract-data.js');
var contractDataDurability = require('../xdr/generated/contract-data-durability.js');
var ledgerKey = require('../xdr/generated/ledger-key.js');
var scVal = require('../xdr/generated/sc-val.js');

class Contract {
  _id;
  /**
   * @param contractId - ID of the contract (ex.
   *     `CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE`).
   */
  constructor(contractId) {
    try {
      this._id = strkey.StrKey.decodeContract(contractId);
    } catch {
      throw new Error(`Invalid contract ID: ${contractId}`);
    }
  }
  /**
   * Returns Stellar contract ID as a strkey, ex.
   * `CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE`.
   */
  contractId() {
    return strkey.StrKey.encodeContract(this._id);
  }
  /** Returns the ID as a strkey (C...). */
  toString() {
    return this.contractId();
  }
  /** Returns the wrapped address of this contract. */
  address() {
    return address.Address.contract(this._id);
  }
  /**
   * Returns an operation that will invoke this contract call.
   *
   * @param method - name of the method to call
   * @param params - arguments to pass to the method, as an array of xdr.ScVal
   *
   * @see Operation.invokeHostFunction
   * @see Operation.invokeContractFunction
   * @see Operation.createCustomContract
   * @see Operation.createStellarAssetContract
   * @see Operation.uploadContractWasm
   */
  call(method, ...params) {
    return operation.Operation.invokeContractFunction({
      contract: this.address().toString(),
      function: method,
      args: params
    });
  }
  /**
   * Returns the read-only footprint entries necessary for any invocations to
   * this contract, for convenience when manually adding it to your
   * transaction's overall footprint or doing bump/restore operations.
   */
  getFootprint() {
    return ledgerKey.LedgerKey.contractData(
      new ledgerKeyContractData.LedgerKeyContractData({
        contract: this.address().toScAddress(),
        key: scVal.ScVal.scvLedgerKeyContractInstance(),
        durability: contractDataDurability.ContractDataDurability.persistent
      })
    );
  }
}

exports.Contract = Contract;
//# sourceMappingURL=contract.js.map
