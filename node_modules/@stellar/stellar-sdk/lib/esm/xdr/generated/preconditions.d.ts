import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TimeBounds, type TimeBoundsWire } from "./time-bounds.js";
import { PreconditionsV2, type PreconditionsV2Wire } from "./preconditions-v2.js";
export type PreconditionsWire = {
    type: 0;
} | {
    type: 1;
    timeBounds: TimeBoundsWire;
} | {
    type: 2;
    v2: PreconditionsV2Wire;
};
export type PreconditionsVariantName = "precondNone" | "precondTime" | "precondV2";
/**
 * ```xdr
 * union Preconditions switch (PreconditionType type)
 * {
 * case PRECOND_NONE:
 *     void;
 * case PRECOND_TIME:
 *     TimeBounds timeBounds;
 * case PRECOND_V2:
 *     PreconditionsV2 v2;
 * };
 * ```
 */
declare abstract class PreconditionsBase extends XdrValue {
    abstract readonly type: PreconditionsVariantName;
    constructor();
    static readonly schema: XdrType<PreconditionsWire>;
    static precondNone(): PreconditionsNone;
    static precondTime(timeBounds: TimeBounds): PreconditionsTime;
    static precondV2(v2: PreconditionsV2): PreconditionsV2Arm;
    static fromXdrObject(wire: PreconditionsWire): Preconditions;
    /**
     * Type guard narrowing an unknown value to a concrete Preconditions variant.
     * Use this instead of `instanceof Preconditions`: the exported `Preconditions` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `Preconditions.is(x)` narrows to the union.
     */
    static is(value: unknown): value is Preconditions;
    abstract toXdrObject(): PreconditionsWire;
}
export declare class PreconditionsNone extends PreconditionsBase {
    readonly type: "precondNone";
    get value(): null;
    toXdrObject(): Extract<PreconditionsWire, {
        type: 0;
    }>;
}
export declare class PreconditionsTime extends PreconditionsBase {
    readonly type: "precondTime";
    readonly timeBounds: TimeBounds;
    constructor(timeBounds: TimeBounds);
    get value(): TimeBounds;
    toXdrObject(): Extract<PreconditionsWire, {
        type: 1;
    }>;
}
export declare class PreconditionsV2Arm extends PreconditionsBase {
    readonly type: "precondV2";
    readonly v2: PreconditionsV2;
    constructor(v2: PreconditionsV2);
    get value(): PreconditionsV2;
    toXdrObject(): Extract<PreconditionsWire, {
        type: 2;
    }>;
}
export type Preconditions = PreconditionsNone | PreconditionsTime | PreconditionsV2Arm;
export declare const Preconditions: typeof PreconditionsBase;
export {};
