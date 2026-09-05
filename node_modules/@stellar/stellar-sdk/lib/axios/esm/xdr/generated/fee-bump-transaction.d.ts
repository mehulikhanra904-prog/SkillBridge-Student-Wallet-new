import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { MuxedAccount, type MuxedAccountWire } from "./muxed-account.js";
import { FeeBumpTransactionInnerTx, type FeeBumpTransactionInnerTxWire } from "./fee-bump-transaction-inner-tx.js";
import { FeeBumpTransactionExt, type FeeBumpTransactionExtWire } from "./fee-bump-transaction-ext.js";
export interface FeeBumpTransactionWire {
    feeSource: MuxedAccountWire;
    fee: bigint;
    innerTx: FeeBumpTransactionInnerTxWire;
    ext: FeeBumpTransactionExtWire;
}
/**
 * ```xdr
 * struct FeeBumpTransaction
 * {
 *     MuxedAccount feeSource;
 *     int64 fee;
 *     union switch (EnvelopeType type)
 *     {
 *     case ENVELOPE_TYPE_TX:
 *         TransactionV1Envelope v1;
 *     }
 *     innerTx;
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class FeeBumpTransaction extends XdrValue {
    readonly feeSource: MuxedAccount;
    readonly fee: bigint;
    readonly innerTx: FeeBumpTransactionInnerTx;
    readonly ext: FeeBumpTransactionExt;
    static readonly schema: XdrType<FeeBumpTransactionWire>;
    constructor(input: {
        feeSource: MuxedAccount;
        fee: bigint;
        innerTx: FeeBumpTransactionInnerTx;
        ext: FeeBumpTransactionExt;
    });
    toXdrObject(): FeeBumpTransactionWire;
    static fromXdrObject(wire: FeeBumpTransactionWire): FeeBumpTransaction;
}
