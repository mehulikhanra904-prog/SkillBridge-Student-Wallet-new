import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerCloseValueSignature, type LedgerCloseValueSignatureWire } from "./ledger-close-value-signature.js";
import { StellarValueProposedValue, type StellarValueProposedValueWire } from "./stellar-value-proposed-value.js";
export type StellarValueExtWire = {
    v: 0;
} | {
    v: 1;
    lcValueSignature: LedgerCloseValueSignatureWire;
} | {
    v: 2;
    proposedValue: StellarValueProposedValueWire;
};
export type StellarValueExtVariantName = "stellarValueBasic" | "stellarValueSigned" | "stellarValueEmptyTxSet";
/**
 * ```xdr
 * union switch (StellarValueType v)
 *     {
 *     case STELLAR_VALUE_BASIC:
 *         void;
 *     case STELLAR_VALUE_SIGNED:
 *         LedgerCloseValueSignature lcValueSignature;
 *     case STELLAR_VALUE_EMPTY_TX_SET:
 *         struct
 *         {
 *             Hash txSetHash;
 *             Hash previousLedgerHash;
 *             uint32 previousLedgerVersion;
 *             LedgerCloseValueSignature lcValueSignature;
 *         } proposedValue;
 *     }
 * ```
 */
declare abstract class StellarValueExtBase extends XdrValue {
    abstract readonly type: StellarValueExtVariantName;
    constructor();
    static readonly schema: XdrType<StellarValueExtWire>;
    static stellarValueBasic(): StellarValueExtBasic;
    static stellarValueSigned(lcValueSignature: LedgerCloseValueSignature): StellarValueExtSigned;
    static stellarValueEmptyTxSet(proposedValue: StellarValueProposedValue): StellarValueExtEmptyTxSet;
    static fromXdrObject(wire: StellarValueExtWire): StellarValueExt;
    /**
     * Type guard narrowing an unknown value to a concrete StellarValueExt variant.
     * Use this instead of `instanceof StellarValueExt`: the exported `StellarValueExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `StellarValueExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is StellarValueExt;
    abstract toXdrObject(): StellarValueExtWire;
}
export declare class StellarValueExtBasic extends StellarValueExtBase {
    readonly type: "stellarValueBasic";
    get value(): null;
    toXdrObject(): Extract<StellarValueExtWire, {
        v: 0;
    }>;
}
export declare class StellarValueExtSigned extends StellarValueExtBase {
    readonly type: "stellarValueSigned";
    readonly lcValueSignature: LedgerCloseValueSignature;
    constructor(lcValueSignature: LedgerCloseValueSignature);
    get value(): LedgerCloseValueSignature;
    toXdrObject(): Extract<StellarValueExtWire, {
        v: 1;
    }>;
}
export declare class StellarValueExtEmptyTxSet extends StellarValueExtBase {
    readonly type: "stellarValueEmptyTxSet";
    readonly proposedValue: StellarValueProposedValue;
    constructor(proposedValue: StellarValueProposedValue);
    get value(): StellarValueProposedValue;
    toXdrObject(): Extract<StellarValueExtWire, {
        v: 2;
    }>;
}
export type StellarValueExt = StellarValueExtBasic | StellarValueExtSigned | StellarValueExtEmptyTxSet;
export declare const StellarValueExt: typeof StellarValueExtBase;
export {};
