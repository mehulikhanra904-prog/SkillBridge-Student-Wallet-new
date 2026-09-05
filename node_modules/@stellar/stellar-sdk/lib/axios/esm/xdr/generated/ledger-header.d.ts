import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { StellarValue, type StellarValueWire } from "./stellar-value.js";
import { LedgerHeaderExt, type LedgerHeaderExtWire } from "./ledger-header-ext.js";
export interface LedgerHeaderWire {
    ledgerVersion: number;
    previousLedgerHash: HashWire;
    scpValue: StellarValueWire;
    txSetResultHash: HashWire;
    bucketListHash: HashWire;
    ledgerSeq: number;
    totalCoins: bigint;
    feePool: bigint;
    inflationSeq: number;
    idPool: bigint;
    baseFee: number;
    baseReserve: number;
    maxTxSetSize: number;
    skipList: HashWire[];
    ext: LedgerHeaderExtWire;
}
/**
 * ```xdr
 * struct LedgerHeader
 * {
 *     uint32 ledgerVersion;    // the protocol version of the ledger
 *     Hash previousLedgerHash; // hash of the previous ledger header
 *     StellarValue scpValue;   // what consensus agreed to
 *     Hash txSetResultHash;    // the TransactionResultSet that led to this ledger
 *     Hash bucketListHash;     // hash of the ledger state
 *
 *     uint32 ledgerSeq; // sequence number of this ledger
 *
 *     int64 totalCoins; // total number of stroops in existence.
 *                       // 10,000,000 stroops in 1 XLM
 *
 *     int64 feePool;       // fees burned since last inflation run
 *     uint32 inflationSeq; // inflation sequence number
 *
 *     uint64 idPool; // last used global ID, used for generating objects
 *
 *     uint32 baseFee;     // base fee per operation in stroops
 *     uint32 baseReserve; // account base reserve in stroops
 *
 *     uint32 maxTxSetSize; // maximum size a transaction set can be
 *
 *     Hash skipList[4]; // hashes of ledgers in the past. allows you to jump back
 *                       // in time without walking the chain back ledger by ledger
 *                       // each slot contains the oldest ledger that is mod of
 *                       // either 50  5000  50000 or 500000 depending on index
 *                       // skipList[0] mod(50), skipList[1] mod(5000), etc
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         LedgerHeaderExtensionV1 v1;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class LedgerHeader extends XdrValue {
    readonly ledgerVersion: number;
    readonly previousLedgerHash: Hash;
    readonly scpValue: StellarValue;
    readonly txSetResultHash: Hash;
    readonly bucketListHash: Hash;
    readonly ledgerSeq: number;
    readonly totalCoins: bigint;
    readonly feePool: bigint;
    readonly inflationSeq: number;
    readonly idPool: bigint;
    readonly baseFee: number;
    readonly baseReserve: number;
    readonly maxTxSetSize: number;
    readonly skipList: Hash[];
    readonly ext: LedgerHeaderExt;
    static readonly schema: XdrType<LedgerHeaderWire>;
    constructor(input: {
        ledgerVersion: number;
        previousLedgerHash: Hash | Uint8Array | string;
        scpValue: StellarValue;
        txSetResultHash: Hash | Uint8Array | string;
        bucketListHash: Hash | Uint8Array | string;
        ledgerSeq: number;
        totalCoins: bigint;
        feePool: bigint;
        inflationSeq: number;
        idPool: bigint;
        baseFee: number;
        baseReserve: number;
        maxTxSetSize: number;
        skipList: (Hash | Uint8Array | string)[];
        ext: LedgerHeaderExt;
    });
    toXdrObject(): LedgerHeaderWire;
    static fromXdrObject(wire: LedgerHeaderWire): LedgerHeader;
}
