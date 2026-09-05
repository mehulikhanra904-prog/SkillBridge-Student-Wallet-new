import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { StoredTransactionSet, type StoredTransactionSetWire } from "./stored-transaction-set.js";
import { StellarValue, type StellarValueWire } from "./stellar-value.js";
export interface StoredDebugTransactionSetWire {
    txSet: StoredTransactionSetWire;
    ledgerSeq: number;
    scpValue: StellarValueWire;
}
/**
 * ```xdr
 * struct StoredDebugTransactionSet
 * {
 * 	StoredTransactionSet txSet;
 * 	uint32 ledgerSeq;
 * 	StellarValue scpValue;
 * };
 * ```
 */
export declare class StoredDebugTransactionSet extends XdrValue {
    readonly txSet: StoredTransactionSet;
    readonly ledgerSeq: number;
    readonly scpValue: StellarValue;
    static readonly schema: XdrType<StoredDebugTransactionSetWire>;
    constructor(input: {
        txSet: StoredTransactionSet;
        ledgerSeq: number;
        scpValue: StellarValue;
    });
    toXdrObject(): StoredDebugTransactionSetWire;
    static fromXdrObject(wire: StoredDebugTransactionSetWire): StoredDebugTransactionSet;
}
