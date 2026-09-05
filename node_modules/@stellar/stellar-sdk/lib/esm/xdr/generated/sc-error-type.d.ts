import { EnumValue } from "../values/enum-value.js";
export type ScErrorTypeWire = number;
export type ScErrorTypeName = "sceContract" | "sceWasmVm" | "sceContext" | "sceStorage" | "sceObject" | "sceCrypto" | "sceEvents" | "sceBudget" | "sceValue" | "sceAuth";
/**
 * ```xdr
 * enum SCErrorType
 * {
 *     SCE_CONTRACT = 0,          // Contract-specific, user-defined codes.
 *     SCE_WASM_VM = 1,           // Errors while interpreting WASM bytecode.
 *     SCE_CONTEXT = 2,           // Errors in the contract's host context.
 *     SCE_STORAGE = 3,           // Errors accessing host storage.
 *     SCE_OBJECT = 4,            // Errors working with host objects.
 *     SCE_CRYPTO = 5,            // Errors in cryptographic operations.
 *     SCE_EVENTS = 6,            // Errors while emitting events.
 *     SCE_BUDGET = 7,            // Errors relating to budget limits.
 *     SCE_VALUE = 8,             // Errors working with host values or SCVals.
 *     SCE_AUTH = 9               // Errors from the authentication subsystem.
 * };
 * ```
 */
export declare class ScErrorType extends EnumValue<ScErrorTypeName> {
    static readonly sceContract: ScErrorType;
    static readonly sceWasmVm: ScErrorType;
    static readonly sceContext: ScErrorType;
    static readonly sceStorage: ScErrorType;
    static readonly sceObject: ScErrorType;
    static readonly sceCrypto: ScErrorType;
    static readonly sceEvents: ScErrorType;
    static readonly sceBudget: ScErrorType;
    static readonly sceValue: ScErrorType;
    static readonly sceAuth: ScErrorType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly sceContract: 0;
        readonly sceWasmVm: 1;
        readonly sceContext: 2;
        readonly sceStorage: 3;
        readonly sceObject: 4;
        readonly sceCrypto: 5;
        readonly sceEvents: 6;
        readonly sceBudget: 7;
        readonly sceValue: 8;
        readonly sceAuth: 9;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScErrorType";
        readonly nameByValue: ReadonlyMap<number, "sceContract" | "sceWasmVm" | "sceContext" | "sceStorage" | "sceObject" | "sceCrypto" | "sceEvents" | "sceBudget" | "sceValue" | "sceAuth">;
    } & {
        readonly sceContract: 0;
        readonly sceWasmVm: 1;
        readonly sceContext: 2;
        readonly sceStorage: 3;
        readonly sceObject: 4;
        readonly sceCrypto: 5;
        readonly sceEvents: 6;
        readonly sceBudget: 7;
        readonly sceValue: 8;
        readonly sceAuth: 9;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScErrorType;
    static fromName(name: ScErrorTypeName): ScErrorType;
    static fromXdrObject(wire: number): ScErrorType;
}
