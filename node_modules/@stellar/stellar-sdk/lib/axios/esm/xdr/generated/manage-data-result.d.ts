import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ManageDataResultWire = {
    code: 0;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
} | {
    code: -4;
};
export type ManageDataResultVariantName = "manageDataSuccess" | "manageDataNotSupportedYet" | "manageDataNameNotFound" | "manageDataLowReserve" | "manageDataInvalidName";
/**
 * ```xdr
 * union ManageDataResult switch (ManageDataResultCode code)
 * {
 * case MANAGE_DATA_SUCCESS:
 *     void;
 * case MANAGE_DATA_NOT_SUPPORTED_YET:
 * case MANAGE_DATA_NAME_NOT_FOUND:
 * case MANAGE_DATA_LOW_RESERVE:
 * case MANAGE_DATA_INVALID_NAME:
 *     void;
 * };
 * ```
 */
declare abstract class ManageDataResultBase extends XdrValue {
    abstract readonly type: ManageDataResultVariantName;
    constructor();
    static readonly schema: XdrType<ManageDataResultWire>;
    static manageDataSuccess(): ManageDataResultSuccess;
    static manageDataNotSupportedYet(): ManageDataResultNotSupportedYet;
    static manageDataNameNotFound(): ManageDataResultNameNotFound;
    static manageDataLowReserve(): ManageDataResultLowReserve;
    static manageDataInvalidName(): ManageDataResultInvalidName;
    static fromXdrObject(wire: ManageDataResultWire): ManageDataResult;
    /**
     * Type guard narrowing an unknown value to a concrete ManageDataResult variant.
     * Use this instead of `instanceof ManageDataResult`: the exported `ManageDataResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ManageDataResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ManageDataResult;
    abstract toXdrObject(): ManageDataResultWire;
}
export declare class ManageDataResultSuccess extends ManageDataResultBase {
    readonly type: "manageDataSuccess";
    get value(): null;
    toXdrObject(): Extract<ManageDataResultWire, {
        code: 0;
    }>;
}
export declare class ManageDataResultNotSupportedYet extends ManageDataResultBase {
    readonly type: "manageDataNotSupportedYet";
    get value(): null;
    toXdrObject(): Extract<ManageDataResultWire, {
        code: -1;
    }>;
}
export declare class ManageDataResultNameNotFound extends ManageDataResultBase {
    readonly type: "manageDataNameNotFound";
    get value(): null;
    toXdrObject(): Extract<ManageDataResultWire, {
        code: -2;
    }>;
}
export declare class ManageDataResultLowReserve extends ManageDataResultBase {
    readonly type: "manageDataLowReserve";
    get value(): null;
    toXdrObject(): Extract<ManageDataResultWire, {
        code: -3;
    }>;
}
export declare class ManageDataResultInvalidName extends ManageDataResultBase {
    readonly type: "manageDataInvalidName";
    get value(): null;
    toXdrObject(): Extract<ManageDataResultWire, {
        code: -4;
    }>;
}
export type ManageDataResult = ManageDataResultSuccess | ManageDataResultNotSupportedYet | ManageDataResultNameNotFound | ManageDataResultLowReserve | ManageDataResultInvalidName;
export declare const ManageDataResult: typeof ManageDataResultBase;
export {};
