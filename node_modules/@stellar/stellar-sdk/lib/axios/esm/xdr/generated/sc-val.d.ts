import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ContractExecutable, type ContractExecutableWire } from "./contract-executable.js";
import { ScError, type ScErrorWire } from "./sc-error.js";
import { Uint128Parts, type Uint128PartsWire } from "./uint128-parts.js";
import { Int128Parts, type Int128PartsWire } from "./int128-parts.js";
import { Uint256Parts, type Uint256PartsWire } from "./uint256-parts.js";
import { Int256Parts, type Int256PartsWire } from "./int256-parts.js";
import { ScBytes, type ScBytesWire } from "./sc-bytes.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { ScNonceKey, type ScNonceKeyWire } from "./sc-nonce-key.js";
export interface ScContractInstanceWire {
    executable: ContractExecutableWire;
    storage: ScMapEntryWire[] | null;
}
/**
 * ```xdr
 * struct SCContractInstance {
 *     ContractExecutable executable;
 *     SCMap* storage;
 * };
 * ```
 */
export declare class ScContractInstance extends XdrValue {
    readonly executable: ContractExecutable;
    readonly storage: ScMapEntry[] | null;
    static readonly schema: XdrType<ScContractInstanceWire>;
    constructor(input: {
        executable: ContractExecutable;
        storage: ScMapEntry[] | null;
    });
    toXdrObject(): ScContractInstanceWire;
    static fromXdrObject(wire: ScContractInstanceWire): ScContractInstance;
}
export interface ScMapEntryWire {
    key: ScValWire;
    val: ScValWire;
}
/**
 * ```xdr
 * struct SCMapEntry
 * {
 *     SCVal key;
 *     SCVal val;
 * };
 * ```
 */
export declare class ScMapEntry extends XdrValue {
    readonly key: ScVal;
    readonly val: ScVal;
    static readonly schema: XdrType<ScMapEntryWire>;
    constructor(input: {
        key: ScVal;
        val: ScVal;
    });
    toXdrObject(): ScMapEntryWire;
    static fromXdrObject(wire: ScMapEntryWire): ScMapEntry;
}
export type ScValWire = {
    type: 0;
    b: boolean;
} | {
    type: 1;
} | {
    type: 2;
    error: ScErrorWire;
} | {
    type: 3;
    u32: number;
} | {
    type: 4;
    i32: number;
} | {
    type: 5;
    u64: bigint;
} | {
    type: 6;
    i64: bigint;
} | {
    type: 7;
    timepoint: bigint;
} | {
    type: 8;
    duration: bigint;
} | {
    type: 9;
    u128: Uint128PartsWire;
} | {
    type: 10;
    i128: Int128PartsWire;
} | {
    type: 11;
    u256: Uint256PartsWire;
} | {
    type: 12;
    i256: Int256PartsWire;
} | {
    type: 13;
    bytes: ScBytesWire;
} | {
    type: 14;
    str: XdrString;
} | {
    type: 15;
    sym: XdrString;
} | {
    type: 16;
    vec: ScValWire[] | null;
} | {
    type: 17;
    map: ScMapEntryWire[] | null;
} | {
    type: 18;
    address: ScAddressWire;
} | {
    type: 19;
    instance: ScContractInstanceWire;
} | {
    type: 20;
} | {
    type: 21;
    nonceKey: ScNonceKeyWire;
} | {
    type: 22;
    executableTag: XdrString;
};
export type ScValVariantName = "scvBool" | "scvVoid" | "scvError" | "scvU32" | "scvI32" | "scvU64" | "scvI64" | "scvTimepoint" | "scvDuration" | "scvU128" | "scvI128" | "scvU256" | "scvI256" | "scvBytes" | "scvString" | "scvSymbol" | "scvVec" | "scvMap" | "scvAddress" | "scvContractInstance" | "scvLedgerKeyContractInstance" | "scvLedgerKeyNonce" | "scvExecutableTag";
/**
 * ```xdr
 * union SCVal switch (SCValType type)
 * {
 *
 * case SCV_BOOL:
 *     bool b;
 * case SCV_VOID:
 *     void;
 * case SCV_ERROR:
 *     SCError error;
 *
 * case SCV_U32:
 *     uint32 u32;
 * case SCV_I32:
 *     int32 i32;
 *
 * case SCV_U64:
 *     uint64 u64;
 * case SCV_I64:
 *     int64 i64;
 * case SCV_TIMEPOINT:
 *     TimePoint timepoint;
 * case SCV_DURATION:
 *     Duration duration;
 *
 * case SCV_U128:
 *     UInt128Parts u128;
 * case SCV_I128:
 *     Int128Parts i128;
 *
 * case SCV_U256:
 *     UInt256Parts u256;
 * case SCV_I256:
 *     Int256Parts i256;
 *
 * case SCV_BYTES:
 *     SCBytes bytes;
 * case SCV_STRING:
 *     SCString str;
 * case SCV_SYMBOL:
 *     SCSymbol sym;
 *
 * // Vec and Map are recursive so need to live
 * // behind an option, due to xdrpp limitations.
 * case SCV_VEC:
 *     SCVec *vec;
 * case SCV_MAP:
 *     SCMap *map;
 *
 * case SCV_ADDRESS:
 *     SCAddress address;
 *
 * // Special SCVals reserved for system-constructed contract-data
 * // ledger keys, not generally usable elsewhere.
 * case SCV_CONTRACT_INSTANCE:
 *     SCContractInstance instance;
 * case SCV_LEDGER_KEY_CONTRACT_INSTANCE:
 *     void;
 * case SCV_LEDGER_KEY_NONCE:
 *     SCNonceKey nonce_key;
 *
 * case SCV_EXECUTABLE_TAG:
 *     SCString executable_tag;
 * };
 * ```
 */
declare abstract class ScValBase extends XdrValue {
    abstract readonly type: ScValVariantName;
    constructor();
    static readonly schema: XdrType<ScValWire>;
    static scvBool(b: boolean): ScValBool;
    static scvVoid(): ScValVoid;
    static scvError(error: ScError): ScValError;
    static scvU32(u32: number): ScValU32;
    static scvI32(i32: number): ScValI32;
    static scvU64(u64: bigint): ScValU64;
    static scvI64(i64: bigint): ScValI64;
    static scvTimepoint(timepoint: bigint): ScValTimepoint;
    static scvDuration(duration: bigint): ScValDuration;
    static scvU128(u128: Uint128Parts): ScValU128;
    static scvI128(i128: Int128Parts): ScValI128;
    static scvU256(u256: Uint256Parts): ScValU256;
    static scvI256(i256: Int256Parts): ScValI256;
    static scvBytes(bytes: ScBytes | Uint8Array | string): ScValBytes;
    static scvString(str: XdrString | string | Uint8Array): ScValString;
    static scvSymbol(sym: XdrString | string | Uint8Array): ScValSymbol;
    static scvVec(vec: ScVal[] | null): ScValVec;
    static scvMap(map: ScMapEntry[] | null): ScValMap;
    static scvAddress(address: ScAddress): ScValAddress;
    static scvContractInstance(instance: ScContractInstance): ScValContractInstance;
    static scvLedgerKeyContractInstance(): ScValLedgerKeyContractInstance;
    static scvLedgerKeyNonce(nonceKey: ScNonceKey): ScValLedgerKeyNonce;
    static scvExecutableTag(executableTag: XdrString | string | Uint8Array): ScValExecutableTag;
    static fromXdrObject(wire: ScValWire): ScVal;
    /**
     * Type guard narrowing an unknown value to a concrete ScVal variant.
     * Use this instead of `instanceof ScVal`: the exported `ScVal` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScVal.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScVal;
    abstract toXdrObject(): ScValWire;
}
export declare class ScValBool extends ScValBase {
    readonly type: "scvBool";
    readonly b: boolean;
    constructor(b: boolean);
    get value(): boolean;
    toXdrObject(): Extract<ScValWire, {
        type: 0;
    }>;
}
export declare class ScValVoid extends ScValBase {
    readonly type: "scvVoid";
    get value(): null;
    toXdrObject(): Extract<ScValWire, {
        type: 1;
    }>;
}
export declare class ScValError extends ScValBase {
    readonly type: "scvError";
    readonly error: ScError;
    constructor(error: ScError);
    get value(): ScError;
    toXdrObject(): Extract<ScValWire, {
        type: 2;
    }>;
}
export declare class ScValU32 extends ScValBase {
    readonly type: "scvU32";
    readonly u32: number;
    constructor(u32: number);
    get value(): number;
    toXdrObject(): Extract<ScValWire, {
        type: 3;
    }>;
}
export declare class ScValI32 extends ScValBase {
    readonly type: "scvI32";
    readonly i32: number;
    constructor(i32: number);
    get value(): number;
    toXdrObject(): Extract<ScValWire, {
        type: 4;
    }>;
}
export declare class ScValU64 extends ScValBase {
    readonly type: "scvU64";
    readonly u64: bigint;
    constructor(u64: bigint);
    get value(): bigint;
    toXdrObject(): Extract<ScValWire, {
        type: 5;
    }>;
}
export declare class ScValI64 extends ScValBase {
    readonly type: "scvI64";
    readonly i64: bigint;
    constructor(i64: bigint);
    get value(): bigint;
    toXdrObject(): Extract<ScValWire, {
        type: 6;
    }>;
}
export declare class ScValTimepoint extends ScValBase {
    readonly type: "scvTimepoint";
    readonly timepoint: bigint;
    constructor(timepoint: bigint);
    get value(): bigint;
    toXdrObject(): Extract<ScValWire, {
        type: 7;
    }>;
}
export declare class ScValDuration extends ScValBase {
    readonly type: "scvDuration";
    readonly duration: bigint;
    constructor(duration: bigint);
    get value(): bigint;
    toXdrObject(): Extract<ScValWire, {
        type: 8;
    }>;
}
export declare class ScValU128 extends ScValBase {
    readonly type: "scvU128";
    readonly u128: Uint128Parts;
    constructor(u128: Uint128Parts);
    get value(): Uint128Parts;
    toXdrObject(): Extract<ScValWire, {
        type: 9;
    }>;
}
export declare class ScValI128 extends ScValBase {
    readonly type: "scvI128";
    readonly i128: Int128Parts;
    constructor(i128: Int128Parts);
    get value(): Int128Parts;
    toXdrObject(): Extract<ScValWire, {
        type: 10;
    }>;
}
export declare class ScValU256 extends ScValBase {
    readonly type: "scvU256";
    readonly u256: Uint256Parts;
    constructor(u256: Uint256Parts);
    get value(): Uint256Parts;
    toXdrObject(): Extract<ScValWire, {
        type: 11;
    }>;
}
export declare class ScValI256 extends ScValBase {
    readonly type: "scvI256";
    readonly i256: Int256Parts;
    constructor(i256: Int256Parts);
    get value(): Int256Parts;
    toXdrObject(): Extract<ScValWire, {
        type: 12;
    }>;
}
export declare class ScValBytes extends ScValBase {
    readonly type: "scvBytes";
    readonly bytes: ScBytes;
    constructor(bytes: ScBytes | Uint8Array | string);
    get value(): ScBytes;
    toXdrObject(): Extract<ScValWire, {
        type: 13;
    }>;
}
export declare class ScValString extends ScValBase {
    readonly type: "scvString";
    readonly str: XdrString;
    constructor(str: XdrString | string | Uint8Array);
    get value(): string;
    toXdrObject(): Extract<ScValWire, {
        type: 14;
    }>;
}
export declare class ScValSymbol extends ScValBase {
    readonly type: "scvSymbol";
    readonly sym: XdrString;
    constructor(sym: XdrString | string | Uint8Array);
    get value(): string;
    toXdrObject(): Extract<ScValWire, {
        type: 15;
    }>;
}
export declare class ScValVec extends ScValBase {
    readonly type: "scvVec";
    readonly vec: ScVal[] | null;
    constructor(vec: ScVal[] | null);
    get value(): ScVal[] | null;
    toXdrObject(): Extract<ScValWire, {
        type: 16;
    }>;
}
export declare class ScValMap extends ScValBase {
    readonly type: "scvMap";
    readonly map: ScMapEntry[] | null;
    constructor(map: ScMapEntry[] | null);
    get value(): ScMapEntry[] | null;
    toXdrObject(): Extract<ScValWire, {
        type: 17;
    }>;
}
export declare class ScValAddress extends ScValBase {
    readonly type: "scvAddress";
    readonly address: ScAddress;
    constructor(address: ScAddress);
    get value(): ScAddress;
    toXdrObject(): Extract<ScValWire, {
        type: 18;
    }>;
}
export declare class ScValContractInstance extends ScValBase {
    readonly type: "scvContractInstance";
    readonly instance: ScContractInstance;
    constructor(instance: ScContractInstance);
    get value(): ScContractInstance;
    toXdrObject(): Extract<ScValWire, {
        type: 19;
    }>;
}
export declare class ScValLedgerKeyContractInstance extends ScValBase {
    readonly type: "scvLedgerKeyContractInstance";
    get value(): null;
    toXdrObject(): Extract<ScValWire, {
        type: 20;
    }>;
}
export declare class ScValLedgerKeyNonce extends ScValBase {
    readonly type: "scvLedgerKeyNonce";
    readonly nonceKey: ScNonceKey;
    constructor(nonceKey: ScNonceKey);
    get value(): ScNonceKey;
    toXdrObject(): Extract<ScValWire, {
        type: 21;
    }>;
}
export declare class ScValExecutableTag extends ScValBase {
    readonly type: "scvExecutableTag";
    readonly executableTag: XdrString;
    constructor(executableTag: XdrString | string | Uint8Array);
    get value(): string;
    toXdrObject(): Extract<ScValWire, {
        type: 22;
    }>;
}
export type ScVal = ScValBool | ScValVoid | ScValError | ScValU32 | ScValI32 | ScValU64 | ScValI64 | ScValTimepoint | ScValDuration | ScValU128 | ScValI128 | ScValU256 | ScValI256 | ScValBytes | ScValString | ScValSymbol | ScValVec | ScValMap | ScValAddress | ScValContractInstance | ScValLedgerKeyContractInstance | ScValLedgerKeyNonce | ScValExecutableTag;
export declare const ScVal: typeof ScValBase;
export {};
