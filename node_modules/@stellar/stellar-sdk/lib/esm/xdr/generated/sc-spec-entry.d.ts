import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScSpecFunctionV0, type ScSpecFunctionV0Wire } from "./sc-spec-function-v0.js";
import { ScSpecUdtStructV0, type ScSpecUdtStructV0Wire } from "./sc-spec-udt-struct-v0.js";
import { ScSpecUdtUnionV0, type ScSpecUdtUnionV0Wire } from "./sc-spec-udt-union-v0.js";
import { ScSpecUdtEnumV0, type ScSpecUdtEnumV0Wire } from "./sc-spec-udt-enum-v0.js";
import { ScSpecUdtErrorEnumV0, type ScSpecUdtErrorEnumV0Wire } from "./sc-spec-udt-error-enum-v0.js";
import { ScSpecEventV0, type ScSpecEventV0Wire } from "./sc-spec-event-v0.js";
export type ScSpecEntryWire = {
    kind: 0;
    functionV0: ScSpecFunctionV0Wire;
} | {
    kind: 1;
    udtStructV0: ScSpecUdtStructV0Wire;
} | {
    kind: 2;
    udtUnionV0: ScSpecUdtUnionV0Wire;
} | {
    kind: 3;
    udtEnumV0: ScSpecUdtEnumV0Wire;
} | {
    kind: 4;
    udtErrorEnumV0: ScSpecUdtErrorEnumV0Wire;
} | {
    kind: 5;
    eventV0: ScSpecEventV0Wire;
};
export type ScSpecEntryVariantName = "scSpecEntryFunctionV0" | "scSpecEntryUdtStructV0" | "scSpecEntryUdtUnionV0" | "scSpecEntryUdtEnumV0" | "scSpecEntryUdtErrorEnumV0" | "scSpecEntryEventV0";
/**
 * ```xdr
 * union SCSpecEntry switch (SCSpecEntryKind kind)
 * {
 * case SC_SPEC_ENTRY_FUNCTION_V0:
 *     SCSpecFunctionV0 functionV0;
 * case SC_SPEC_ENTRY_UDT_STRUCT_V0:
 *     SCSpecUDTStructV0 udtStructV0;
 * case SC_SPEC_ENTRY_UDT_UNION_V0:
 *     SCSpecUDTUnionV0 udtUnionV0;
 * case SC_SPEC_ENTRY_UDT_ENUM_V0:
 *     SCSpecUDTEnumV0 udtEnumV0;
 * case SC_SPEC_ENTRY_UDT_ERROR_ENUM_V0:
 *     SCSpecUDTErrorEnumV0 udtErrorEnumV0;
 * case SC_SPEC_ENTRY_EVENT_V0:
 *     SCSpecEventV0 eventV0;
 * };
 * ```
 */
declare abstract class ScSpecEntryBase extends XdrValue {
    abstract readonly type: ScSpecEntryVariantName;
    constructor();
    static readonly schema: XdrType<ScSpecEntryWire>;
    static scSpecEntryFunctionV0(functionV0: ScSpecFunctionV0): ScSpecEntryFunctionV0;
    static scSpecEntryUdtStructV0(udtStructV0: ScSpecUdtStructV0): ScSpecEntryUdtStructV0;
    static scSpecEntryUdtUnionV0(udtUnionV0: ScSpecUdtUnionV0): ScSpecEntryUdtUnionV0;
    static scSpecEntryUdtEnumV0(udtEnumV0: ScSpecUdtEnumV0): ScSpecEntryUdtEnumV0;
    static scSpecEntryUdtErrorEnumV0(udtErrorEnumV0: ScSpecUdtErrorEnumV0): ScSpecEntryUdtErrorEnumV0;
    static scSpecEntryEventV0(eventV0: ScSpecEventV0): ScSpecEntryEventV0;
    static fromXdrObject(wire: ScSpecEntryWire): ScSpecEntry;
    /**
     * Type guard narrowing an unknown value to a concrete ScSpecEntry variant.
     * Use this instead of `instanceof ScSpecEntry`: the exported `ScSpecEntry` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScSpecEntry.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScSpecEntry;
    abstract toXdrObject(): ScSpecEntryWire;
}
export declare class ScSpecEntryFunctionV0 extends ScSpecEntryBase {
    readonly type: "scSpecEntryFunctionV0";
    readonly functionV0: ScSpecFunctionV0;
    constructor(functionV0: ScSpecFunctionV0);
    get value(): ScSpecFunctionV0;
    toXdrObject(): Extract<ScSpecEntryWire, {
        kind: 0;
    }>;
}
export declare class ScSpecEntryUdtStructV0 extends ScSpecEntryBase {
    readonly type: "scSpecEntryUdtStructV0";
    readonly udtStructV0: ScSpecUdtStructV0;
    constructor(udtStructV0: ScSpecUdtStructV0);
    get value(): ScSpecUdtStructV0;
    toXdrObject(): Extract<ScSpecEntryWire, {
        kind: 1;
    }>;
}
export declare class ScSpecEntryUdtUnionV0 extends ScSpecEntryBase {
    readonly type: "scSpecEntryUdtUnionV0";
    readonly udtUnionV0: ScSpecUdtUnionV0;
    constructor(udtUnionV0: ScSpecUdtUnionV0);
    get value(): ScSpecUdtUnionV0;
    toXdrObject(): Extract<ScSpecEntryWire, {
        kind: 2;
    }>;
}
export declare class ScSpecEntryUdtEnumV0 extends ScSpecEntryBase {
    readonly type: "scSpecEntryUdtEnumV0";
    readonly udtEnumV0: ScSpecUdtEnumV0;
    constructor(udtEnumV0: ScSpecUdtEnumV0);
    get value(): ScSpecUdtEnumV0;
    toXdrObject(): Extract<ScSpecEntryWire, {
        kind: 3;
    }>;
}
export declare class ScSpecEntryUdtErrorEnumV0 extends ScSpecEntryBase {
    readonly type: "scSpecEntryUdtErrorEnumV0";
    readonly udtErrorEnumV0: ScSpecUdtErrorEnumV0;
    constructor(udtErrorEnumV0: ScSpecUdtErrorEnumV0);
    get value(): ScSpecUdtErrorEnumV0;
    toXdrObject(): Extract<ScSpecEntryWire, {
        kind: 4;
    }>;
}
export declare class ScSpecEntryEventV0 extends ScSpecEntryBase {
    readonly type: "scSpecEntryEventV0";
    readonly eventV0: ScSpecEventV0;
    constructor(eventV0: ScSpecEventV0);
    get value(): ScSpecEventV0;
    toXdrObject(): Extract<ScSpecEntryWire, {
        kind: 5;
    }>;
}
export type ScSpecEntry = ScSpecEntryFunctionV0 | ScSpecEntryUdtStructV0 | ScSpecEntryUdtUnionV0 | ScSpecEntryUdtEnumV0 | ScSpecEntryUdtErrorEnumV0 | ScSpecEntryEventV0;
export declare const ScSpecEntry: typeof ScSpecEntryBase;
export {};
