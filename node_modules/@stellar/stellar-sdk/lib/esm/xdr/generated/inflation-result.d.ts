import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { InflationPayout, type InflationPayoutWire } from "./inflation-payout.js";
export type InflationResultWire = {
    code: 0;
    payouts: InflationPayoutWire[];
} | {
    code: -1;
};
export type InflationResultVariantName = "inflationSuccess" | "inflationNotTime";
/**
 * ```xdr
 * union InflationResult switch (InflationResultCode code)
 * {
 * case INFLATION_SUCCESS:
 *     InflationPayout payouts<>;
 * case INFLATION_NOT_TIME:
 *     void;
 * };
 * ```
 */
declare abstract class InflationResultBase extends XdrValue {
    abstract readonly type: InflationResultVariantName;
    constructor();
    static readonly schema: XdrType<InflationResultWire>;
    static inflationSuccess(payouts: InflationPayout[]): InflationResultSuccess;
    static inflationNotTime(): InflationResultNotTime;
    static fromXdrObject(wire: InflationResultWire): InflationResult;
    /**
     * Type guard narrowing an unknown value to a concrete InflationResult variant.
     * Use this instead of `instanceof InflationResult`: the exported `InflationResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `InflationResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is InflationResult;
    abstract toXdrObject(): InflationResultWire;
}
export declare class InflationResultSuccess extends InflationResultBase {
    readonly type: "inflationSuccess";
    readonly payouts: InflationPayout[];
    constructor(payouts: InflationPayout[]);
    get value(): InflationPayout[];
    toXdrObject(): Extract<InflationResultWire, {
        code: 0;
    }>;
}
export declare class InflationResultNotTime extends InflationResultBase {
    readonly type: "inflationNotTime";
    get value(): null;
    toXdrObject(): Extract<InflationResultWire, {
        code: -1;
    }>;
}
export type InflationResult = InflationResultSuccess | InflationResultNotTime;
export declare const InflationResult: typeof InflationResultBase;
export {};
