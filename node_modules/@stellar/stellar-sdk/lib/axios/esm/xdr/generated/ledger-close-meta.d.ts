import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerCloseMetaV0, type LedgerCloseMetaV0Wire } from "./ledger-close-meta-v0.js";
import { LedgerCloseMetaV1, type LedgerCloseMetaV1Wire } from "./ledger-close-meta-v1.js";
import { LedgerCloseMetaV2, type LedgerCloseMetaV2Wire } from "./ledger-close-meta-v2.js";
export type LedgerCloseMetaWire = {
    v: 0;
    v0: LedgerCloseMetaV0Wire;
} | {
    v: 1;
    v1: LedgerCloseMetaV1Wire;
} | {
    v: 2;
    v2: LedgerCloseMetaV2Wire;
};
export type LedgerCloseMetaVariantName = "v0" | "v1" | "v2";
/**
 * ```xdr
 * union LedgerCloseMeta switch (int v)
 * {
 * case 0:
 *     LedgerCloseMetaV0 v0;
 * case 1:
 *     LedgerCloseMetaV1 v1;
 * case 2:
 *     LedgerCloseMetaV2 v2;
 * };
 * ```
 */
declare abstract class LedgerCloseMetaBase extends XdrValue {
    abstract readonly type: LedgerCloseMetaVariantName;
    constructor();
    static readonly schema: XdrType<LedgerCloseMetaWire>;
    static v0(v0: LedgerCloseMetaV0): LedgerCloseMetaV0Arm;
    static v1(v1: LedgerCloseMetaV1): LedgerCloseMetaV1Arm;
    static v2(v2: LedgerCloseMetaV2): LedgerCloseMetaV2Arm;
    static fromXdrObject(wire: LedgerCloseMetaWire): LedgerCloseMeta;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerCloseMeta variant.
     * Use this instead of `instanceof LedgerCloseMeta`: the exported `LedgerCloseMeta` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerCloseMeta.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerCloseMeta;
    abstract toXdrObject(): LedgerCloseMetaWire;
}
export declare class LedgerCloseMetaV0Arm extends LedgerCloseMetaBase {
    readonly type: "v0";
    readonly v0: LedgerCloseMetaV0;
    constructor(v0: LedgerCloseMetaV0);
    get value(): LedgerCloseMetaV0;
    toXdrObject(): Extract<LedgerCloseMetaWire, {
        v: 0;
    }>;
}
export declare class LedgerCloseMetaV1Arm extends LedgerCloseMetaBase {
    readonly type: "v1";
    readonly v1: LedgerCloseMetaV1;
    constructor(v1: LedgerCloseMetaV1);
    get value(): LedgerCloseMetaV1;
    toXdrObject(): Extract<LedgerCloseMetaWire, {
        v: 1;
    }>;
}
export declare class LedgerCloseMetaV2Arm extends LedgerCloseMetaBase {
    readonly type: "v2";
    readonly v2: LedgerCloseMetaV2;
    constructor(v2: LedgerCloseMetaV2);
    get value(): LedgerCloseMetaV2;
    toXdrObject(): Extract<LedgerCloseMetaWire, {
        v: 2;
    }>;
}
export type LedgerCloseMeta = LedgerCloseMetaV0Arm | LedgerCloseMetaV1Arm | LedgerCloseMetaV2Arm;
export declare const LedgerCloseMeta: typeof LedgerCloseMetaBase;
export {};
