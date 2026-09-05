import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { TransactionPhase, type TransactionPhaseWire } from "./transaction-phase.js";
export interface TransactionSetV1Wire {
    previousLedgerHash: HashWire;
    phases: TransactionPhaseWire[];
}
/**
 * ```xdr
 * struct TransactionSetV1
 * {
 *     Hash previousLedgerHash;
 *     TransactionPhase phases<>;
 * };
 * ```
 */
export declare class TransactionSetV1 extends XdrValue {
    readonly previousLedgerHash: Hash;
    readonly phases: TransactionPhase[];
    static readonly schema: XdrType<TransactionSetV1Wire>;
    constructor(input: {
        previousLedgerHash: Hash | Uint8Array | string;
        phases: TransactionPhase[];
    });
    toXdrObject(): TransactionSetV1Wire;
    static fromXdrObject(wire: TransactionSetV1Wire): TransactionSetV1;
}
