import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TimeBounds, type TimeBoundsWire } from "./time-bounds.js";
import { LedgerBounds, type LedgerBoundsWire } from "./ledger-bounds.js";
import { SignerKey, type SignerKeyWire } from "./signer-key.js";
export interface PreconditionsV2Wire {
    timeBounds: TimeBoundsWire | null;
    ledgerBounds: LedgerBoundsWire | null;
    minSeqNum: bigint | null;
    minSeqAge: bigint;
    minSeqLedgerGap: number;
    extraSigners: SignerKeyWire[];
}
/**
 * ```xdr
 * struct PreconditionsV2
 * {
 *     TimeBounds* timeBounds;
 *
 *     // Transaction only valid for ledger numbers n such that
 *     // minLedger <= n < maxLedger (if maxLedger == 0, then
 *     // only minLedger is checked)
 *     LedgerBounds* ledgerBounds;
 *
 *     // If NULL, only valid when sourceAccount's sequence number
 *     // is seqNum - 1.  Otherwise, valid when sourceAccount's
 *     // sequence number n satisfies minSeqNum <= n < tx.seqNum.
 *     // Note that after execution the account's sequence number
 *     // is always raised to tx.seqNum, and a transaction is not
 *     // valid if tx.seqNum is too high to ensure replay protection.
 *     SequenceNumber* minSeqNum;
 *
 *     // For the transaction to be valid, the current ledger time must
 *     // be at least minSeqAge greater than sourceAccount's seqTime.
 *     Duration minSeqAge;
 *
 *     // For the transaction to be valid, the current ledger number
 *     // must be at least minSeqLedgerGap greater than sourceAccount's
 *     // seqLedger.
 *     uint32 minSeqLedgerGap;
 *
 *     // For the transaction to be valid, there must be a signature
 *     // corresponding to every Signer in this array, even if the
 *     // signature is not otherwise required by the sourceAccount or
 *     // operations.
 *     SignerKey extraSigners<2>;
 * };
 * ```
 */
export declare class PreconditionsV2 extends XdrValue {
    readonly timeBounds: TimeBounds | null;
    readonly ledgerBounds: LedgerBounds | null;
    readonly minSeqNum: bigint | null;
    readonly minSeqAge: bigint;
    readonly minSeqLedgerGap: number;
    readonly extraSigners: SignerKey[];
    static readonly schema: XdrType<PreconditionsV2Wire>;
    constructor(input: {
        timeBounds: TimeBounds | null;
        ledgerBounds: LedgerBounds | null;
        minSeqNum: bigint | null;
        minSeqAge: bigint;
        minSeqLedgerGap: number;
        extraSigners: SignerKey[];
    });
    toXdrObject(): PreconditionsV2Wire;
    static fromXdrObject(wire: PreconditionsV2Wire): PreconditionsV2;
}
