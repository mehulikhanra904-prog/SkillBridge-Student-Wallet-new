import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScErrorCode, type ScErrorCodeWire } from "./sc-error-code.js";
export type ScErrorWire = {
    type: 0;
    contractCode: number;
} | {
    type: 1;
    code: ScErrorCodeWire;
} | {
    type: 2;
    code: ScErrorCodeWire;
} | {
    type: 3;
    code: ScErrorCodeWire;
} | {
    type: 4;
    code: ScErrorCodeWire;
} | {
    type: 5;
    code: ScErrorCodeWire;
} | {
    type: 6;
    code: ScErrorCodeWire;
} | {
    type: 7;
    code: ScErrorCodeWire;
} | {
    type: 8;
    code: ScErrorCodeWire;
} | {
    type: 9;
    code: ScErrorCodeWire;
};
export type ScErrorVariantName = "sceContract" | "sceWasmVm" | "sceContext" | "sceStorage" | "sceObject" | "sceCrypto" | "sceEvents" | "sceBudget" | "sceValue" | "sceAuth";
/**
 * ```xdr
 * union SCError switch (SCErrorType type)
 * {
 * case SCE_CONTRACT:
 *     uint32 contractCode;
 * case SCE_WASM_VM:
 * case SCE_CONTEXT:
 * case SCE_STORAGE:
 * case SCE_OBJECT:
 * case SCE_CRYPTO:
 * case SCE_EVENTS:
 * case SCE_BUDGET:
 * case SCE_VALUE:
 * case SCE_AUTH:
 *     SCErrorCode code;
 * };
 * ```
 */
declare abstract class ScErrorBase extends XdrValue {
    abstract readonly type: ScErrorVariantName;
    constructor();
    static readonly schema: XdrType<ScErrorWire>;
    static sceContract(contractCode: number): ScErrorContract;
    static sceWasmVm(code: ScErrorCode): ScErrorWasmVm;
    static sceContext(code: ScErrorCode): ScErrorContext;
    static sceStorage(code: ScErrorCode): ScErrorStorage;
    static sceObject(code: ScErrorCode): ScErrorObject;
    static sceCrypto(code: ScErrorCode): ScErrorCrypto;
    static sceEvents(code: ScErrorCode): ScErrorEvents;
    static sceBudget(code: ScErrorCode): ScErrorBudget;
    static sceValue(code: ScErrorCode): ScErrorValue;
    static sceAuth(code: ScErrorCode): ScErrorAuth;
    static fromXdrObject(wire: ScErrorWire): ScError;
    /**
     * Type guard narrowing an unknown value to a concrete ScError variant.
     * Use this instead of `instanceof ScError`: the exported `ScError` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScError.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScError;
    abstract toXdrObject(): ScErrorWire;
}
export declare class ScErrorContract extends ScErrorBase {
    readonly type: "sceContract";
    readonly contractCode: number;
    constructor(contractCode: number);
    get value(): number;
    toXdrObject(): Extract<ScErrorWire, {
        type: 0;
    }>;
}
export declare class ScErrorWasmVm extends ScErrorBase {
    readonly type: "sceWasmVm";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 1;
    }>;
}
export declare class ScErrorContext extends ScErrorBase {
    readonly type: "sceContext";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 2;
    }>;
}
export declare class ScErrorStorage extends ScErrorBase {
    readonly type: "sceStorage";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 3;
    }>;
}
export declare class ScErrorObject extends ScErrorBase {
    readonly type: "sceObject";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 4;
    }>;
}
export declare class ScErrorCrypto extends ScErrorBase {
    readonly type: "sceCrypto";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 5;
    }>;
}
export declare class ScErrorEvents extends ScErrorBase {
    readonly type: "sceEvents";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 6;
    }>;
}
export declare class ScErrorBudget extends ScErrorBase {
    readonly type: "sceBudget";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 7;
    }>;
}
export declare class ScErrorValue extends ScErrorBase {
    readonly type: "sceValue";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 8;
    }>;
}
export declare class ScErrorAuth extends ScErrorBase {
    readonly type: "sceAuth";
    readonly code: ScErrorCode;
    constructor(code: ScErrorCode);
    get value(): ScErrorCode;
    toXdrObject(): Extract<ScErrorWire, {
        type: 9;
    }>;
}
export type ScError = ScErrorContract | ScErrorWasmVm | ScErrorContext | ScErrorStorage | ScErrorObject | ScErrorCrypto | ScErrorEvents | ScErrorBudget | ScErrorValue | ScErrorAuth;
export declare const ScError: typeof ScErrorBase;
export {};
