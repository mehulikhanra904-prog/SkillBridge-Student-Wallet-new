import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type SetTrustLineFlagsResultWire = {
    code: 0;
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
export type SetTrustLineFlagsResultVariantName = "setTrustLineFlagsSuccess" | "setTrustLineFlagsMalformed" | "setTrustLineFlagsNoTrustLine" | "setTrustLineFlagsCantRevoke" | "setTrustLineFlagsInvalidState" | "setTrustLineFlagsLowReserve";
/**
 * ```xdr
 * union SetTrustLineFlagsResult switch (SetTrustLineFlagsResultCode code)
 * {
 * case SET_TRUST_LINE_FLAGS_SUCCESS:
 *     void;
 * case SET_TRUST_LINE_FLAGS_MALFORMED:
 * case SET_TRUST_LINE_FLAGS_NO_TRUST_LINE:
 * case SET_TRUST_LINE_FLAGS_CANT_REVOKE:
 * case SET_TRUST_LINE_FLAGS_INVALID_STATE:
 * case SET_TRUST_LINE_FLAGS_LOW_RESERVE:
 *     void;
 * };
 * ```
 */
declare abstract class SetTrustLineFlagsResultBase extends XdrValue {
    abstract readonly type: SetTrustLineFlagsResultVariantName;
    constructor();
    static readonly schema: XdrType<SetTrustLineFlagsResultWire>;
    static setTrustLineFlagsSuccess(): SetTrustLineFlagsResultSuccess;
    static setTrustLineFlagsMalformed(): SetTrustLineFlagsResultMalformed;
    static setTrustLineFlagsNoTrustLine(): SetTrustLineFlagsResultNoTrustLine;
    static setTrustLineFlagsCantRevoke(): SetTrustLineFlagsResultCantRevoke;
    static setTrustLineFlagsInvalidState(): SetTrustLineFlagsResultInvalidState;
    static setTrustLineFlagsLowReserve(): SetTrustLineFlagsResultLowReserve;
    static fromXdrObject(wire: SetTrustLineFlagsResultWire): SetTrustLineFlagsResult;
    /**
     * Type guard narrowing an unknown value to a concrete SetTrustLineFlagsResult variant.
     * Use this instead of `instanceof SetTrustLineFlagsResult`: the exported `SetTrustLineFlagsResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SetTrustLineFlagsResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SetTrustLineFlagsResult;
    abstract toXdrObject(): SetTrustLineFlagsResultWire;
}
export declare class SetTrustLineFlagsResultSuccess extends SetTrustLineFlagsResultBase {
    readonly type: "setTrustLineFlagsSuccess";
    get value(): null;
    toXdrObject(): Extract<SetTrustLineFlagsResultWire, {
        code: 0;
    }>;
}
export declare class SetTrustLineFlagsResultMalformed extends SetTrustLineFlagsResultBase {
    readonly type: "setTrustLineFlagsMalformed";
    get value(): null;
    toXdrObject(): Extract<SetTrustLineFlagsResultWire, {
        code: -1;
    }>;
}
export declare class SetTrustLineFlagsResultNoTrustLine extends SetTrustLineFlagsResultBase {
    readonly type: "setTrustLineFlagsNoTrustLine";
    get value(): null;
    toXdrObject(): Extract<SetTrustLineFlagsResultWire, {
        code: -2;
    }>;
}
export declare class SetTrustLineFlagsResultCantRevoke extends SetTrustLineFlagsResultBase {
    readonly type: "setTrustLineFlagsCantRevoke";
    get value(): null;
    toXdrObject(): Extract<SetTrustLineFlagsResultWire, {
        code: -3;
    }>;
}
export declare class SetTrustLineFlagsResultInvalidState extends SetTrustLineFlagsResultBase {
    readonly type: "setTrustLineFlagsInvalidState";
    get value(): null;
    toXdrObject(): Extract<SetTrustLineFlagsResultWire, {
        code: -4;
    }>;
}
export declare class SetTrustLineFlagsResultLowReserve extends SetTrustLineFlagsResultBase {
    readonly type: "setTrustLineFlagsLowReserve";
    get value(): null;
    toXdrObject(): Extract<SetTrustLineFlagsResultWire, {
        code: -5;
    }>;
}
export type SetTrustLineFlagsResult = SetTrustLineFlagsResultSuccess | SetTrustLineFlagsResultMalformed | SetTrustLineFlagsResultNoTrustLine | SetTrustLineFlagsResultCantRevoke | SetTrustLineFlagsResultInvalidState | SetTrustLineFlagsResultLowReserve;
export declare const SetTrustLineFlagsResult: typeof SetTrustLineFlagsResultBase;
export {};
