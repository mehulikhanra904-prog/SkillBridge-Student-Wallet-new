import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PersistedScpStateV0, type PersistedScpStateV0Wire } from "./persisted-scp-state-v0.js";
import { PersistedScpStateV1, type PersistedScpStateV1Wire } from "./persisted-scp-state-v1.js";
export type PersistedScpStateWire = {
    v: 0;
    v0: PersistedScpStateV0Wire;
} | {
    v: 1;
    v1: PersistedScpStateV1Wire;
};
export type PersistedScpStateVariantName = "v0" | "v1";
/**
 * ```xdr
 * union PersistedSCPState switch (int v)
 * {
 * case 0:
 * 	PersistedSCPStateV0 v0;
 * case 1:
 * 	PersistedSCPStateV1 v1;
 * };
 * ```
 */
declare abstract class PersistedScpStateBase extends XdrValue {
    abstract readonly type: PersistedScpStateVariantName;
    constructor();
    static readonly schema: XdrType<PersistedScpStateWire>;
    static v0(v0: PersistedScpStateV0): PersistedScpStateV0Arm;
    static v1(v1: PersistedScpStateV1): PersistedScpStateV1Arm;
    static fromXdrObject(wire: PersistedScpStateWire): PersistedScpState;
    /**
     * Type guard narrowing an unknown value to a concrete PersistedScpState variant.
     * Use this instead of `instanceof PersistedScpState`: the exported `PersistedScpState` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `PersistedScpState.is(x)` narrows to the union.
     */
    static is(value: unknown): value is PersistedScpState;
    abstract toXdrObject(): PersistedScpStateWire;
}
export declare class PersistedScpStateV0Arm extends PersistedScpStateBase {
    readonly type: "v0";
    readonly v0: PersistedScpStateV0;
    constructor(v0: PersistedScpStateV0);
    get value(): PersistedScpStateV0;
    toXdrObject(): Extract<PersistedScpStateWire, {
        v: 0;
    }>;
}
export declare class PersistedScpStateV1Arm extends PersistedScpStateBase {
    readonly type: "v1";
    readonly v1: PersistedScpStateV1;
    constructor(v1: PersistedScpStateV1);
    get value(): PersistedScpStateV1;
    toXdrObject(): Extract<PersistedScpStateWire, {
        v: 1;
    }>;
}
export type PersistedScpState = PersistedScpStateV0Arm | PersistedScpStateV1Arm;
export declare const PersistedScpState: typeof PersistedScpStateBase;
export {};
