import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type CreateAccountResultWire = {
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
export type CreateAccountResultVariantName = "createAccountSuccess" | "createAccountMalformed" | "createAccountUnderfunded" | "createAccountLowReserve" | "createAccountAlreadyExist";
/**
 * ```xdr
 * union CreateAccountResult switch (CreateAccountResultCode code)
 * {
 * case CREATE_ACCOUNT_SUCCESS:
 *     void;
 * case CREATE_ACCOUNT_MALFORMED:
 * case CREATE_ACCOUNT_UNDERFUNDED:
 * case CREATE_ACCOUNT_LOW_RESERVE:
 * case CREATE_ACCOUNT_ALREADY_EXIST:
 *     void;
 * };
 * ```
 */
declare abstract class CreateAccountResultBase extends XdrValue {
    abstract readonly type: CreateAccountResultVariantName;
    constructor();
    static readonly schema: XdrType<CreateAccountResultWire>;
    static createAccountSuccess(): CreateAccountResultSuccess;
    static createAccountMalformed(): CreateAccountResultMalformed;
    static createAccountUnderfunded(): CreateAccountResultUnderfunded;
    static createAccountLowReserve(): CreateAccountResultLowReserve;
    static createAccountAlreadyExist(): CreateAccountResultAlreadyExist;
    static fromXdrObject(wire: CreateAccountResultWire): CreateAccountResult;
    /**
     * Type guard narrowing an unknown value to a concrete CreateAccountResult variant.
     * Use this instead of `instanceof CreateAccountResult`: the exported `CreateAccountResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `CreateAccountResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is CreateAccountResult;
    abstract toXdrObject(): CreateAccountResultWire;
}
export declare class CreateAccountResultSuccess extends CreateAccountResultBase {
    readonly type: "createAccountSuccess";
    get value(): null;
    toXdrObject(): Extract<CreateAccountResultWire, {
        code: 0;
    }>;
}
export declare class CreateAccountResultMalformed extends CreateAccountResultBase {
    readonly type: "createAccountMalformed";
    get value(): null;
    toXdrObject(): Extract<CreateAccountResultWire, {
        code: -1;
    }>;
}
export declare class CreateAccountResultUnderfunded extends CreateAccountResultBase {
    readonly type: "createAccountUnderfunded";
    get value(): null;
    toXdrObject(): Extract<CreateAccountResultWire, {
        code: -2;
    }>;
}
export declare class CreateAccountResultLowReserve extends CreateAccountResultBase {
    readonly type: "createAccountLowReserve";
    get value(): null;
    toXdrObject(): Extract<CreateAccountResultWire, {
        code: -3;
    }>;
}
export declare class CreateAccountResultAlreadyExist extends CreateAccountResultBase {
    readonly type: "createAccountAlreadyExist";
    get value(): null;
    toXdrObject(): Extract<CreateAccountResultWire, {
        code: -4;
    }>;
}
export type CreateAccountResult = CreateAccountResultSuccess | CreateAccountResultMalformed | CreateAccountResultUnderfunded | CreateAccountResultLowReserve | CreateAccountResultAlreadyExist;
export declare const CreateAccountResult: typeof CreateAccountResultBase;
export {};
