import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { LedgerCloseValueSignature, type LedgerCloseValueSignatureWire } from "./ledger-close-value-signature.js";
export interface StellarValueProposedValueWire {
    txSetHash: HashWire;
    previousLedgerHash: HashWire;
    previousLedgerVersion: number;
    lcValueSignature: LedgerCloseValueSignatureWire;
}
/**
 * ```xdr
 * struct
 *         {
 *             Hash txSetHash;
 *             Hash previousLedgerHash;
 *             uint32 previousLedgerVersion;
 *             LedgerCloseValueSignature lcValueSignature;
 *         }
 * ```
 */
export declare class StellarValueProposedValue extends XdrValue {
    readonly txSetHash: Hash;
    readonly previousLedgerHash: Hash;
    readonly previousLedgerVersion: number;
    readonly lcValueSignature: LedgerCloseValueSignature;
    static readonly schema: XdrType<StellarValueProposedValueWire>;
    constructor(input: {
        txSetHash: Hash | Uint8Array | string;
        previousLedgerHash: Hash | Uint8Array | string;
        previousLedgerVersion: number;
        lcValueSignature: LedgerCloseValueSignature;
    });
    toXdrObject(): StellarValueProposedValueWire;
    static fromXdrObject(wire: StellarValueProposedValueWire): StellarValueProposedValue;
}
