import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export type InvokeHostFunctionResultWire = {
    code: 0;
    success: HashWire;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
} | {
    code: -4;
} | {
    code: -5;
};
export type InvokeHostFunctionResultVariantName = "invokeHostFunctionSuccess" | "invokeHostFunctionMalformed" | "invokeHostFunctionTrapped" | "invokeHostFunctionResourceLimitExceeded" | "invokeHostFunctionEntryArchived" | "invokeHostFunctionInsufficientRefundableFee";
/**
 * ```xdr
 * union InvokeHostFunctionResult switch (InvokeHostFunctionResultCode code)
 * {
 * case INVOKE_HOST_FUNCTION_SUCCESS:
 *     Hash success; // sha256(InvokeHostFunctionSuccessPreImage)
 * case INVOKE_HOST_FUNCTION_MALFORMED:
 * case INVOKE_HOST_FUNCTION_TRAPPED:
 * case INVOKE_HOST_FUNCTION_RESOURCE_LIMIT_EXCEEDED:
 * case INVOKE_HOST_FUNCTION_ENTRY_ARCHIVED:
 * case INVOKE_HOST_FUNCTION_INSUFFICIENT_REFUNDABLE_FEE:
 *     void;
 * };
 * ```
 */
declare abstract class InvokeHostFunctionResultBase extends XdrValue {
    abstract readonly type: InvokeHostFunctionResultVariantName;
    constructor();
    static readonly schema: XdrType<InvokeHostFunctionResultWire>;
    static invokeHostFunctionSuccess(success: Hash | Uint8Array | string): InvokeHostFunctionResultSuccess;
    static invokeHostFunctionMalformed(): InvokeHostFunctionResultMalformed;
    static invokeHostFunctionTrapped(): InvokeHostFunctionResultTrapped;
    static invokeHostFunctionResourceLimitExceeded(): InvokeHostFunctionResultResourceLimitExceeded;
    static invokeHostFunctionEntryArchived(): InvokeHostFunctionResultEntryArchived;
    static invokeHostFunctionInsufficientRefundableFee(): InvokeHostFunctionResultInsufficientRefundableFee;
    static fromXdrObject(wire: InvokeHostFunctionResultWire): InvokeHostFunctionResult;
    /**
     * Type guard narrowing an unknown value to a concrete InvokeHostFunctionResult variant.
     * Use this instead of `instanceof InvokeHostFunctionResult`: the exported `InvokeHostFunctionResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `InvokeHostFunctionResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is InvokeHostFunctionResult;
    abstract toXdrObject(): InvokeHostFunctionResultWire;
}
export declare class InvokeHostFunctionResultSuccess extends InvokeHostFunctionResultBase {
    readonly type: "invokeHostFunctionSuccess";
    readonly success: Hash;
    constructor(success: Hash | Uint8Array | string);
    get value(): Hash;
    toXdrObject(): Extract<InvokeHostFunctionResultWire, {
        code: 0;
    }>;
}
export declare class InvokeHostFunctionResultMalformed extends InvokeHostFunctionResultBase {
    readonly type: "invokeHostFunctionMalformed";
    get value(): null;
    toXdrObject(): Extract<InvokeHostFunctionResultWire, {
        code: -1;
    }>;
}
export declare class InvokeHostFunctionResultTrapped extends InvokeHostFunctionResultBase {
    readonly type: "invokeHostFunctionTrapped";
    get value(): null;
    toXdrObject(): Extract<InvokeHostFunctionResultWire, {
        code: -2;
    }>;
}
export declare class InvokeHostFunctionResultResourceLimitExceeded extends InvokeHostFunctionResultBase {
    readonly type: "invokeHostFunctionResourceLimitExceeded";
    get value(): null;
    toXdrObject(): Extract<InvokeHostFunctionResultWire, {
        code: -3;
    }>;
}
export declare class InvokeHostFunctionResultEntryArchived extends InvokeHostFunctionResultBase {
    readonly type: "invokeHostFunctionEntryArchived";
    get value(): null;
    toXdrObject(): Extract<InvokeHostFunctionResultWire, {
        code: -4;
    }>;
}
export declare class InvokeHostFunctionResultInsufficientRefundableFee extends InvokeHostFunctionResultBase {
    readonly type: "invokeHostFunctionInsufficientRefundableFee";
    get value(): null;
    toXdrObject(): Extract<InvokeHostFunctionResultWire, {
        code: -5;
    }>;
}
export type InvokeHostFunctionResult = InvokeHostFunctionResultSuccess | InvokeHostFunctionResultMalformed | InvokeHostFunctionResultTrapped | InvokeHostFunctionResultResourceLimitExceeded | InvokeHostFunctionResultEntryArchived | InvokeHostFunctionResultInsufficientRefundableFee;
export declare const InvokeHostFunctionResult: typeof InvokeHostFunctionResultBase;
export {};
