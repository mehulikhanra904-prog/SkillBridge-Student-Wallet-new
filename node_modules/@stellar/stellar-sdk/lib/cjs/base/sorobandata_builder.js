'use strict';

var index = require('../xdr/index.js');
var sorobanTransactionData = require('../xdr/generated/soroban-transaction-data.js');
var sorobanResources = require('../xdr/generated/soroban-resources.js');
var sorobanTransactionDataExt = require('../xdr/generated/soroban-transaction-data-ext.js');
var ledgerFootprint = require('../xdr/generated/ledger-footprint.js');

class SorobanDataBuilder {
  _data;
  /**
   * @param sorobanData - either a base64-encoded string that represents an
   *      {@link xdr.SorobanTransactionData} instance or an XDR instance itself
   *      (it will be copied); if omitted or "falsy" (e.g. an empty string), it
   *      starts with an empty instance
   */
  constructor(sorobanData) {
    let data;
    if (!sorobanData) {
      data = new sorobanTransactionData.SorobanTransactionData({
        resources: new sorobanResources.SorobanResources({
          footprint: new ledgerFootprint.LedgerFootprint({ readOnly: [], readWrite: [] }),
          instructions: 0,
          diskReadBytes: 0,
          writeBytes: 0
        }),
        ext: sorobanTransactionDataExt.SorobanTransactionDataExt.v0(),
        resourceFee: index.Int64(0)
      });
    } else if (typeof sorobanData === "string" || sorobanData instanceof Uint8Array) {
      data = SorobanDataBuilder.fromXdr(sorobanData);
    } else {
      data = SorobanDataBuilder.fromXdr(sorobanData.toXdr());
    }
    this._data = data;
  }
  /**
   * Decodes and builds a {@link xdr.SorobanTransactionData} instance.
   *
   * @param data - raw input to decode
   */
  static fromXdr(data) {
    if (typeof data === "string") {
      return sorobanTransactionData.SorobanTransactionData.fromXdr(data, "base64");
    } else {
      return sorobanTransactionData.SorobanTransactionData.fromXdr(data);
    }
  }
  /**
   * @deprecated Use {@link SorobanDataBuilder.fromXdr} instead.
   * Deprecated in version v17.0.0
   */
  static fromXDR(data) {
    return SorobanDataBuilder.fromXdr(data);
  }
  replaceResources(next) {
    this._data = new sorobanTransactionData.SorobanTransactionData({
      resources: next,
      ext: this._data.ext,
      resourceFee: this._data.resourceFee
    });
  }
  /**
   * Sets the resource fee portion of the Soroban data.
   *
   * @param fee - the resource fee to set (int64)
   */
  setResourceFee(fee) {
    this._data = new sorobanTransactionData.SorobanTransactionData({
      resources: this._data.resources,
      ext: this._data.ext,
      resourceFee: index.Int64(fee)
    });
    return this;
  }
  /**
   * Sets up the resource metrics.
   *
   * You should almost NEVER need this, as its often generated / provided to you
   * by transaction simulation/preflight from a Soroban RPC server.
   *
   * @param cpuInstrs - number of CPU instructions
   * @param diskReadBytes - number of bytes being read from disk
   * @param writeBytes - number of bytes being written to disk/memory
   */
  setResources(cpuInstrs, diskReadBytes, writeBytes) {
    this.replaceResources(
      new sorobanResources.SorobanResources({
        footprint: this._data.resources.footprint,
        instructions: cpuInstrs,
        diskReadBytes,
        writeBytes
      })
    );
    return this;
  }
  /**
   * Appends the given ledger keys to the existing storage access footprint.
   *
   * @param readOnly - read-only keys to add
   * @param readWrite - read-write keys to add
   */
  appendFootprint(readOnly, readWrite) {
    return this.setFootprint(
      this.getReadOnly().concat(readOnly),
      this.getReadWrite().concat(readWrite)
    );
  }
  /**
   * Sets the storage access footprint to be a certain set of ledger keys.
   *
   * You can also set each field explicitly via
   * {@link SorobanDataBuilder.setReadOnly} and
   * {@link SorobanDataBuilder.setReadWrite} or add to the existing footprint
   * via {@link SorobanDataBuilder.appendFootprint}.
   *
   * Passing `null|undefined` to either parameter will IGNORE the existing
   * values. If you want to clear them, pass `[]`, instead.
   *
   * @param readOnly - the set of ledger keys to set in the read-only portion of the transaction's `sorobanData`, or `null | undefined` to keep the existing keys
   * @param readWrite - the set of ledger keys to set in the read-write portion of the transaction's `sorobanData`, or `null | undefined` to keep the existing keys
   */
  setFootprint(readOnly, readWrite) {
    if (readOnly !== null) {
      this.setReadOnly(readOnly);
    }
    if (readWrite !== null) {
      this.setReadWrite(readWrite);
    }
    return this;
  }
  /**
   * Sets the read-only keys in the access footprint.
   *
   * @param readOnly - read-only keys in the access footprint
   */
  setReadOnly(readOnly) {
    this.replaceResources(
      new sorobanResources.SorobanResources({
        footprint: new ledgerFootprint.LedgerFootprint({
          readOnly: readOnly ?? [],
          readWrite: this._data.resources.footprint.readWrite
        }),
        instructions: this._data.resources.instructions,
        diskReadBytes: this._data.resources.diskReadBytes,
        writeBytes: this._data.resources.writeBytes
      })
    );
    return this;
  }
  /**
   * Sets the read-write keys in the access footprint.
   *
   * @param readWrite - read-write keys in the access footprint
   */
  setReadWrite(readWrite) {
    this.replaceResources(
      new sorobanResources.SorobanResources({
        footprint: new ledgerFootprint.LedgerFootprint({
          readOnly: this._data.resources.footprint.readOnly,
          readWrite: readWrite ?? []
        }),
        instructions: this._data.resources.instructions,
        diskReadBytes: this._data.resources.diskReadBytes,
        writeBytes: this._data.resources.writeBytes
      })
    );
    return this;
  }
  /**
   * Returns a copy of the final data structure.
   */
  build() {
    return sorobanTransactionData.SorobanTransactionData.fromXdr(this._data.toXdr());
  }
  //
  // getters follow
  //
  /** Returns the read-only storage access pattern. */
  getReadOnly() {
    return this.getFootprint().readOnly;
  }
  /** Returns the read-write storage access pattern. */
  getReadWrite() {
    return this.getFootprint().readWrite;
  }
  /** Returns the storage access pattern. */
  getFootprint() {
    return this._data.resources.footprint;
  }
}

exports.SorobanDataBuilder = SorobanDataBuilder;
//# sourceMappingURL=sorobandata_builder.js.map
