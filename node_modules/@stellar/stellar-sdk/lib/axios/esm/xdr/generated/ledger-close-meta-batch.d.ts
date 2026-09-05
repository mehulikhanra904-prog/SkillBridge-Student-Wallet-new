import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerCloseMeta, type LedgerCloseMetaWire } from "./ledger-close-meta.js";
export interface LedgerCloseMetaBatchWire {
    startSequence: number;
    endSequence: number;
    ledgerCloseMetas: LedgerCloseMetaWire[];
}
/**
 * ```xdr
 * struct LedgerCloseMetaBatch
 * {
 *     // starting ledger sequence number in the batch
 *     uint32 startSequence;
 *
 *     // ending ledger sequence number in the batch
 *     uint32 endSequence;
 *
 *     // Ledger close meta for each ledger within the batch
 *     LedgerCloseMeta ledgerCloseMetas<>;
 * };
 * ```
 */
export declare class LedgerCloseMetaBatch extends XdrValue {
    readonly startSequence: number;
    readonly endSequence: number;
    readonly ledgerCloseMetas: LedgerCloseMeta[];
    static readonly schema: XdrType<LedgerCloseMetaBatchWire>;
    constructor(input: {
        startSequence: number;
        endSequence: number;
        ledgerCloseMetas: LedgerCloseMeta[];
    });
    toXdrObject(): LedgerCloseMetaBatchWire;
    static fromXdrObject(wire: LedgerCloseMetaBatchWire): LedgerCloseMetaBatch;
}
