import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type SetOptionsResultWire = {
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
} | {
    code: -6;
} | {
    code: -7;
} | {
    code: -8;
} | {
    code: -9;
} | {
    code: -10;
};
export type SetOptionsResultVariantName = "setOptionsSuccess" | "setOptionsLowReserve" | "setOptionsTooManySigners" | "setOptionsBadFlags" | "setOptionsInvalidInflation" | "setOptionsCantChange" | "setOptionsUnknownFlag" | "setOptionsThresholdOutOfRange" | "setOptionsBadSigner" | "setOptionsInvalidHomeDomain" | "setOptionsAuthRevocableRequired";
/**
 * ```xdr
 * union SetOptionsResult switch (SetOptionsResultCode code)
 * {
 * case SET_OPTIONS_SUCCESS:
 *     void;
 * case SET_OPTIONS_LOW_RESERVE:
 * case SET_OPTIONS_TOO_MANY_SIGNERS:
 * case SET_OPTIONS_BAD_FLAGS:
 * case SET_OPTIONS_INVALID_INFLATION:
 * case SET_OPTIONS_CANT_CHANGE:
 * case SET_OPTIONS_UNKNOWN_FLAG:
 * case SET_OPTIONS_THRESHOLD_OUT_OF_RANGE:
 * case SET_OPTIONS_BAD_SIGNER:
 * case SET_OPTIONS_INVALID_HOME_DOMAIN:
 * case SET_OPTIONS_AUTH_REVOCABLE_REQUIRED:
 *     void;
 * };
 * ```
 */
declare abstract class SetOptionsResultBase extends XdrValue {
    abstract readonly type: SetOptionsResultVariantName;
    constructor();
    static readonly schema: XdrType<SetOptionsResultWire>;
    static setOptionsSuccess(): SetOptionsResultSuccess;
    static setOptionsLowReserve(): SetOptionsResultLowReserve;
    static setOptionsTooManySigners(): SetOptionsResultTooManySigners;
    static setOptionsBadFlags(): SetOptionsResultBadFlags;
    static setOptionsInvalidInflation(): SetOptionsResultInvalidInflation;
    static setOptionsCantChange(): SetOptionsResultCantChange;
    static setOptionsUnknownFlag(): SetOptionsResultUnknownFlag;
    static setOptionsThresholdOutOfRange(): SetOptionsResultThresholdOutOfRange;
    static setOptionsBadSigner(): SetOptionsResultBadSigner;
    static setOptionsInvalidHomeDomain(): SetOptionsResultInvalidHomeDomain;
    static setOptionsAuthRevocableRequired(): SetOptionsResultAuthRevocableRequired;
    static fromXdrObject(wire: SetOptionsResultWire): SetOptionsResult;
    /**
     * Type guard narrowing an unknown value to a concrete SetOptionsResult variant.
     * Use this instead of `instanceof SetOptionsResult`: the exported `SetOptionsResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SetOptionsResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SetOptionsResult;
    abstract toXdrObject(): SetOptionsResultWire;
}
export declare class SetOptionsResultSuccess extends SetOptionsResultBase {
    readonly type: "setOptionsSuccess";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: 0;
    }>;
}
export declare class SetOptionsResultLowReserve extends SetOptionsResultBase {
    readonly type: "setOptionsLowReserve";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -1;
    }>;
}
export declare class SetOptionsResultTooManySigners extends SetOptionsResultBase {
    readonly type: "setOptionsTooManySigners";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -2;
    }>;
}
export declare class SetOptionsResultBadFlags extends SetOptionsResultBase {
    readonly type: "setOptionsBadFlags";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -3;
    }>;
}
export declare class SetOptionsResultInvalidInflation extends SetOptionsResultBase {
    readonly type: "setOptionsInvalidInflation";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -4;
    }>;
}
export declare class SetOptionsResultCantChange extends SetOptionsResultBase {
    readonly type: "setOptionsCantChange";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -5;
    }>;
}
export declare class SetOptionsResultUnknownFlag extends SetOptionsResultBase {
    readonly type: "setOptionsUnknownFlag";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -6;
    }>;
}
export declare class SetOptionsResultThresholdOutOfRange extends SetOptionsResultBase {
    readonly type: "setOptionsThresholdOutOfRange";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -7;
    }>;
}
export declare class SetOptionsResultBadSigner extends SetOptionsResultBase {
    readonly type: "setOptionsBadSigner";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -8;
    }>;
}
export declare class SetOptionsResultInvalidHomeDomain extends SetOptionsResultBase {
    readonly type: "setOptionsInvalidHomeDomain";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -9;
    }>;
}
export declare class SetOptionsResultAuthRevocableRequired extends SetOptionsResultBase {
    readonly type: "setOptionsAuthRevocableRequired";
    get value(): null;
    toXdrObject(): Extract<SetOptionsResultWire, {
        code: -10;
    }>;
}
export type SetOptionsResult = SetOptionsResultSuccess | SetOptionsResultLowReserve | SetOptionsResultTooManySigners | SetOptionsResultBadFlags | SetOptionsResultInvalidInflation | SetOptionsResultCantChange | SetOptionsResultUnknownFlag | SetOptionsResultThresholdOutOfRange | SetOptionsResultBadSigner | SetOptionsResultInvalidHomeDomain | SetOptionsResultAuthRevocableRequired;
export declare const SetOptionsResult: typeof SetOptionsResultBase;
export {};
