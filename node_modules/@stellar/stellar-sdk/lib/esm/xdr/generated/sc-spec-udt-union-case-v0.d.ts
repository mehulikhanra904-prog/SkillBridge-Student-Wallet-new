import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScSpecUdtUnionCaseVoidV0, type ScSpecUdtUnionCaseVoidV0Wire } from "./sc-spec-udt-union-case-void-v0.js";
import { ScSpecUdtUnionCaseTupleV0, type ScSpecUdtUnionCaseTupleV0Wire } from "./sc-spec-udt-union-case-tuple-v0.js";
export type ScSpecUdtUnionCaseV0Wire = {
    kind: 0;
    voidCase: ScSpecUdtUnionCaseVoidV0Wire;
} | {
    kind: 1;
    tupleCase: ScSpecUdtUnionCaseTupleV0Wire;
};
export type ScSpecUdtUnionCaseV0VariantName = "scSpecUdtUnionCaseVoidV0" | "scSpecUdtUnionCaseTupleV0";
/**
 * ```xdr
 * union SCSpecUDTUnionCaseV0 switch (SCSpecUDTUnionCaseV0Kind kind)
 * {
 * case SC_SPEC_UDT_UNION_CASE_VOID_V0:
 *     SCSpecUDTUnionCaseVoidV0 voidCase;
 * case SC_SPEC_UDT_UNION_CASE_TUPLE_V0:
 *     SCSpecUDTUnionCaseTupleV0 tupleCase;
 * };
 * ```
 */
declare abstract class ScSpecUdtUnionCaseV0Base extends XdrValue {
    abstract readonly type: ScSpecUdtUnionCaseV0VariantName;
    constructor();
    static readonly schema: XdrType<ScSpecUdtUnionCaseV0Wire>;
    static scSpecUdtUnionCaseVoidV0(voidCase: ScSpecUdtUnionCaseVoidV0): ScSpecUdtUnionCaseV0VoidV0;
    static scSpecUdtUnionCaseTupleV0(tupleCase: ScSpecUdtUnionCaseTupleV0): ScSpecUdtUnionCaseV0TupleV0;
    static fromXdrObject(wire: ScSpecUdtUnionCaseV0Wire): ScSpecUdtUnionCaseV0;
    /**
     * Type guard narrowing an unknown value to a concrete ScSpecUdtUnionCaseV0 variant.
     * Use this instead of `instanceof ScSpecUdtUnionCaseV0`: the exported `ScSpecUdtUnionCaseV0` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScSpecUdtUnionCaseV0.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScSpecUdtUnionCaseV0;
    abstract toXdrObject(): ScSpecUdtUnionCaseV0Wire;
}
export declare class ScSpecUdtUnionCaseV0VoidV0 extends ScSpecUdtUnionCaseV0Base {
    readonly type: "scSpecUdtUnionCaseVoidV0";
    readonly voidCase: ScSpecUdtUnionCaseVoidV0;
    constructor(voidCase: ScSpecUdtUnionCaseVoidV0);
    get value(): ScSpecUdtUnionCaseVoidV0;
    toXdrObject(): Extract<ScSpecUdtUnionCaseV0Wire, {
        kind: 0;
    }>;
}
export declare class ScSpecUdtUnionCaseV0TupleV0 extends ScSpecUdtUnionCaseV0Base {
    readonly type: "scSpecUdtUnionCaseTupleV0";
    readonly tupleCase: ScSpecUdtUnionCaseTupleV0;
    constructor(tupleCase: ScSpecUdtUnionCaseTupleV0);
    get value(): ScSpecUdtUnionCaseTupleV0;
    toXdrObject(): Extract<ScSpecUdtUnionCaseV0Wire, {
        kind: 1;
    }>;
}
export type ScSpecUdtUnionCaseV0 = ScSpecUdtUnionCaseV0VoidV0 | ScSpecUdtUnionCaseV0TupleV0;
export declare const ScSpecUdtUnionCaseV0: typeof ScSpecUdtUnionCaseV0Base;
export {};
