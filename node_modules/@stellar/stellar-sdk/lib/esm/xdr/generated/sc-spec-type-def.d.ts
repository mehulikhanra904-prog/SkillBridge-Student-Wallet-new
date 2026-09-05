import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScSpecTypeBytesN, type ScSpecTypeBytesNWire } from "./sc-spec-type-bytes-n.js";
import { ScSpecTypeUdt, type ScSpecTypeUdtWire } from "./sc-spec-type-udt.js";
export type ScSpecTypeDefWire = {
    type: 0;
} | {
    type: 1;
} | {
    type: 2;
} | {
    type: 3;
} | {
    type: 4;
} | {
    type: 5;
} | {
    type: 6;
} | {
    type: 7;
} | {
    type: 8;
} | {
    type: 9;
} | {
    type: 10;
} | {
    type: 11;
} | {
    type: 12;
} | {
    type: 13;
} | {
    type: 14;
} | {
    type: 16;
} | {
    type: 17;
} | {
    type: 19;
} | {
    type: 20;
} | {
    type: 1000;
    option: ScSpecTypeOptionWire;
} | {
    type: 1001;
    result: ScSpecTypeResultWire;
} | {
    type: 1002;
    vec: ScSpecTypeVecWire;
} | {
    type: 1004;
    map: ScSpecTypeMapWire;
} | {
    type: 1005;
    tuple: ScSpecTypeTupleWire;
} | {
    type: 1006;
    bytesN: ScSpecTypeBytesNWire;
} | {
    type: 2000;
    udt: ScSpecTypeUdtWire;
};
export type ScSpecTypeDefVariantName = "scSpecTypeVal" | "scSpecTypeBool" | "scSpecTypeVoid" | "scSpecTypeError" | "scSpecTypeU32" | "scSpecTypeI32" | "scSpecTypeU64" | "scSpecTypeI64" | "scSpecTypeTimepoint" | "scSpecTypeDuration" | "scSpecTypeU128" | "scSpecTypeI128" | "scSpecTypeU256" | "scSpecTypeI256" | "scSpecTypeBytes" | "scSpecTypeString" | "scSpecTypeSymbol" | "scSpecTypeAddress" | "scSpecTypeMuxedAddress" | "scSpecTypeOption" | "scSpecTypeResult" | "scSpecTypeVec" | "scSpecTypeMap" | "scSpecTypeTuple" | "scSpecTypeBytesN" | "scSpecTypeUdt";
/**
 * ```xdr
 * union SCSpecTypeDef switch (SCSpecType type)
 * {
 * case SC_SPEC_TYPE_VAL:
 * case SC_SPEC_TYPE_BOOL:
 * case SC_SPEC_TYPE_VOID:
 * case SC_SPEC_TYPE_ERROR:
 * case SC_SPEC_TYPE_U32:
 * case SC_SPEC_TYPE_I32:
 * case SC_SPEC_TYPE_U64:
 * case SC_SPEC_TYPE_I64:
 * case SC_SPEC_TYPE_TIMEPOINT:
 * case SC_SPEC_TYPE_DURATION:
 * case SC_SPEC_TYPE_U128:
 * case SC_SPEC_TYPE_I128:
 * case SC_SPEC_TYPE_U256:
 * case SC_SPEC_TYPE_I256:
 * case SC_SPEC_TYPE_BYTES:
 * case SC_SPEC_TYPE_STRING:
 * case SC_SPEC_TYPE_SYMBOL:
 * case SC_SPEC_TYPE_ADDRESS:
 * case SC_SPEC_TYPE_MUXED_ADDRESS:
 *     void;
 * case SC_SPEC_TYPE_OPTION:
 *     SCSpecTypeOption option;
 * case SC_SPEC_TYPE_RESULT:
 *     SCSpecTypeResult result;
 * case SC_SPEC_TYPE_VEC:
 *     SCSpecTypeVec vec;
 * case SC_SPEC_TYPE_MAP:
 *     SCSpecTypeMap map;
 * case SC_SPEC_TYPE_TUPLE:
 *     SCSpecTypeTuple tuple;
 * case SC_SPEC_TYPE_BYTES_N:
 *     SCSpecTypeBytesN bytesN;
 * case SC_SPEC_TYPE_UDT:
 *     SCSpecTypeUDT udt;
 * };
 * ```
 */
declare abstract class ScSpecTypeDefBase extends XdrValue {
    abstract readonly type: ScSpecTypeDefVariantName;
    constructor();
    static readonly schema: XdrType<ScSpecTypeDefWire>;
    static scSpecTypeVal(): ScSpecTypeDefVal;
    static scSpecTypeBool(): ScSpecTypeDefBool;
    static scSpecTypeVoid(): ScSpecTypeDefVoid;
    static scSpecTypeError(): ScSpecTypeDefError;
    static scSpecTypeU32(): ScSpecTypeDefU32;
    static scSpecTypeI32(): ScSpecTypeDefI32;
    static scSpecTypeU64(): ScSpecTypeDefU64;
    static scSpecTypeI64(): ScSpecTypeDefI64;
    static scSpecTypeTimepoint(): ScSpecTypeDefTimepoint;
    static scSpecTypeDuration(): ScSpecTypeDefDuration;
    static scSpecTypeU128(): ScSpecTypeDefU128;
    static scSpecTypeI128(): ScSpecTypeDefI128;
    static scSpecTypeU256(): ScSpecTypeDefU256;
    static scSpecTypeI256(): ScSpecTypeDefI256;
    static scSpecTypeBytes(): ScSpecTypeDefBytes;
    static scSpecTypeString(): ScSpecTypeDefString;
    static scSpecTypeSymbol(): ScSpecTypeDefSymbol;
    static scSpecTypeAddress(): ScSpecTypeDefAddress;
    static scSpecTypeMuxedAddress(): ScSpecTypeDefMuxedAddress;
    static scSpecTypeOption(option: ScSpecTypeOption): ScSpecTypeDefOption;
    static scSpecTypeResult(result: ScSpecTypeResult): ScSpecTypeDefResult;
    static scSpecTypeVec(vec: ScSpecTypeVec): ScSpecTypeDefVec;
    static scSpecTypeMap(map: ScSpecTypeMap): ScSpecTypeDefMap;
    static scSpecTypeTuple(tuple: ScSpecTypeTuple): ScSpecTypeDefTuple;
    static scSpecTypeBytesN(bytesN: ScSpecTypeBytesN): ScSpecTypeDefBytesN;
    static scSpecTypeUdt(udt: ScSpecTypeUdt): ScSpecTypeDefUdt;
    static fromXdrObject(wire: ScSpecTypeDefWire): ScSpecTypeDef;
    /**
     * Type guard narrowing an unknown value to a concrete ScSpecTypeDef variant.
     * Use this instead of `instanceof ScSpecTypeDef`: the exported `ScSpecTypeDef` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScSpecTypeDef.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScSpecTypeDef;
    abstract toXdrObject(): ScSpecTypeDefWire;
}
export declare class ScSpecTypeDefVal extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeVal";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 0;
    }>;
}
export declare class ScSpecTypeDefBool extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeBool";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 1;
    }>;
}
export declare class ScSpecTypeDefVoid extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeVoid";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 2;
    }>;
}
export declare class ScSpecTypeDefError extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeError";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 3;
    }>;
}
export declare class ScSpecTypeDefU32 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeU32";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 4;
    }>;
}
export declare class ScSpecTypeDefI32 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeI32";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 5;
    }>;
}
export declare class ScSpecTypeDefU64 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeU64";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 6;
    }>;
}
export declare class ScSpecTypeDefI64 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeI64";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 7;
    }>;
}
export declare class ScSpecTypeDefTimepoint extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeTimepoint";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 8;
    }>;
}
export declare class ScSpecTypeDefDuration extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeDuration";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 9;
    }>;
}
export declare class ScSpecTypeDefU128 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeU128";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 10;
    }>;
}
export declare class ScSpecTypeDefI128 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeI128";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 11;
    }>;
}
export declare class ScSpecTypeDefU256 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeU256";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 12;
    }>;
}
export declare class ScSpecTypeDefI256 extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeI256";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 13;
    }>;
}
export declare class ScSpecTypeDefBytes extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeBytes";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 14;
    }>;
}
export declare class ScSpecTypeDefString extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeString";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 16;
    }>;
}
export declare class ScSpecTypeDefSymbol extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeSymbol";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 17;
    }>;
}
export declare class ScSpecTypeDefAddress extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeAddress";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 19;
    }>;
}
export declare class ScSpecTypeDefMuxedAddress extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeMuxedAddress";
    get value(): null;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 20;
    }>;
}
export declare class ScSpecTypeDefOption extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeOption";
    readonly option: ScSpecTypeOption;
    constructor(option: ScSpecTypeOption);
    get value(): ScSpecTypeOption;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 1000;
    }>;
}
export declare class ScSpecTypeDefResult extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeResult";
    readonly result: ScSpecTypeResult;
    constructor(result: ScSpecTypeResult);
    get value(): ScSpecTypeResult;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 1001;
    }>;
}
export declare class ScSpecTypeDefVec extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeVec";
    readonly vec: ScSpecTypeVec;
    constructor(vec: ScSpecTypeVec);
    get value(): ScSpecTypeVec;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 1002;
    }>;
}
export declare class ScSpecTypeDefMap extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeMap";
    readonly map: ScSpecTypeMap;
    constructor(map: ScSpecTypeMap);
    get value(): ScSpecTypeMap;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 1004;
    }>;
}
export declare class ScSpecTypeDefTuple extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeTuple";
    readonly tuple: ScSpecTypeTuple;
    constructor(tuple: ScSpecTypeTuple);
    get value(): ScSpecTypeTuple;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 1005;
    }>;
}
export declare class ScSpecTypeDefBytesN extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeBytesN";
    readonly bytesN: ScSpecTypeBytesN;
    constructor(bytesN: ScSpecTypeBytesN);
    get value(): ScSpecTypeBytesN;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 1006;
    }>;
}
export declare class ScSpecTypeDefUdt extends ScSpecTypeDefBase {
    readonly type: "scSpecTypeUdt";
    readonly udt: ScSpecTypeUdt;
    constructor(udt: ScSpecTypeUdt);
    get value(): ScSpecTypeUdt;
    toXdrObject(): Extract<ScSpecTypeDefWire, {
        type: 2000;
    }>;
}
export type ScSpecTypeDef = ScSpecTypeDefVal | ScSpecTypeDefBool | ScSpecTypeDefVoid | ScSpecTypeDefError | ScSpecTypeDefU32 | ScSpecTypeDefI32 | ScSpecTypeDefU64 | ScSpecTypeDefI64 | ScSpecTypeDefTimepoint | ScSpecTypeDefDuration | ScSpecTypeDefU128 | ScSpecTypeDefI128 | ScSpecTypeDefU256 | ScSpecTypeDefI256 | ScSpecTypeDefBytes | ScSpecTypeDefString | ScSpecTypeDefSymbol | ScSpecTypeDefAddress | ScSpecTypeDefMuxedAddress | ScSpecTypeDefOption | ScSpecTypeDefResult | ScSpecTypeDefVec | ScSpecTypeDefMap | ScSpecTypeDefTuple | ScSpecTypeDefBytesN | ScSpecTypeDefUdt;
export declare const ScSpecTypeDef: typeof ScSpecTypeDefBase;
export interface ScSpecTypeMapWire {
    keyType: ScSpecTypeDefWire;
    valueType: ScSpecTypeDefWire;
}
/**
 * ```xdr
 * struct SCSpecTypeMap
 * {
 *     SCSpecTypeDef keyType;
 *     SCSpecTypeDef valueType;
 * };
 * ```
 */
export declare class ScSpecTypeMap extends XdrValue {
    readonly keyType: ScSpecTypeDef;
    readonly valueType: ScSpecTypeDef;
    static readonly schema: XdrType<ScSpecTypeMapWire>;
    constructor(input: {
        keyType: ScSpecTypeDef;
        valueType: ScSpecTypeDef;
    });
    toXdrObject(): ScSpecTypeMapWire;
    static fromXdrObject(wire: ScSpecTypeMapWire): ScSpecTypeMap;
}
export interface ScSpecTypeOptionWire {
    valueType: ScSpecTypeDefWire;
}
/**
 * ```xdr
 * struct SCSpecTypeOption
 * {
 *     SCSpecTypeDef valueType;
 * };
 * ```
 */
export declare class ScSpecTypeOption extends XdrValue {
    readonly valueType: ScSpecTypeDef;
    static readonly schema: XdrType<ScSpecTypeOptionWire>;
    constructor(input: {
        valueType: ScSpecTypeDef;
    });
    toXdrObject(): ScSpecTypeOptionWire;
    static fromXdrObject(wire: ScSpecTypeOptionWire): ScSpecTypeOption;
}
export interface ScSpecTypeResultWire {
    okType: ScSpecTypeDefWire;
    errorType: ScSpecTypeDefWire;
}
/**
 * ```xdr
 * struct SCSpecTypeResult
 * {
 *     SCSpecTypeDef okType;
 *     SCSpecTypeDef errorType;
 * };
 * ```
 */
export declare class ScSpecTypeResult extends XdrValue {
    readonly okType: ScSpecTypeDef;
    readonly errorType: ScSpecTypeDef;
    static readonly schema: XdrType<ScSpecTypeResultWire>;
    constructor(input: {
        okType: ScSpecTypeDef;
        errorType: ScSpecTypeDef;
    });
    toXdrObject(): ScSpecTypeResultWire;
    static fromXdrObject(wire: ScSpecTypeResultWire): ScSpecTypeResult;
}
export interface ScSpecTypeTupleWire {
    valueTypes: ScSpecTypeDefWire[];
}
/**
 * ```xdr
 * struct SCSpecTypeTuple
 * {
 *     SCSpecTypeDef valueTypes<12>;
 * };
 * ```
 */
export declare class ScSpecTypeTuple extends XdrValue {
    readonly valueTypes: ScSpecTypeDef[];
    static readonly schema: XdrType<ScSpecTypeTupleWire>;
    constructor(input: {
        valueTypes: ScSpecTypeDef[];
    });
    toXdrObject(): ScSpecTypeTupleWire;
    static fromXdrObject(wire: ScSpecTypeTupleWire): ScSpecTypeTuple;
}
export interface ScSpecTypeVecWire {
    elementType: ScSpecTypeDefWire;
}
/**
 * ```xdr
 * struct SCSpecTypeVec
 * {
 *     SCSpecTypeDef elementType;
 * };
 * ```
 */
export declare class ScSpecTypeVec extends XdrValue {
    readonly elementType: ScSpecTypeDef;
    static readonly schema: XdrType<ScSpecTypeVecWire>;
    constructor(input: {
        elementType: ScSpecTypeDef;
    });
    toXdrObject(): ScSpecTypeVecWire;
    static fromXdrObject(wire: ScSpecTypeVecWire): ScSpecTypeVec;
}
export {};
