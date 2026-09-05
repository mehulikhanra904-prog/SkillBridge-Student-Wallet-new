import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AuthenticatedMessageV0, type AuthenticatedMessageV0Wire } from "./authenticated-message-v0.js";
export type AuthenticatedMessageWire = {
    v: 0;
    v0: AuthenticatedMessageV0Wire;
};
export type AuthenticatedMessageVariantName = "v0";
/**
 * ```xdr
 * union AuthenticatedMessage switch (uint32 v)
 * {
 * case 0:
 *     struct
 *     {
 *         uint64 sequence;
 *         StellarMessage message;
 *         HmacSha256Mac mac;
 *     } v0;
 * };
 * ```
 */
declare abstract class AuthenticatedMessageBase extends XdrValue {
    abstract readonly type: AuthenticatedMessageVariantName;
    constructor();
    static readonly schema: XdrType<AuthenticatedMessageWire>;
    static v0(v0: AuthenticatedMessageV0): AuthenticatedMessageV0Arm;
    static fromXdrObject(wire: AuthenticatedMessageWire): AuthenticatedMessage;
    /**
     * Type guard narrowing an unknown value to a concrete AuthenticatedMessage variant.
     * Use this instead of `instanceof AuthenticatedMessage`: the exported `AuthenticatedMessage` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `AuthenticatedMessage.is(x)` narrows to the union.
     */
    static is(value: unknown): value is AuthenticatedMessage;
    abstract toXdrObject(): AuthenticatedMessageWire;
}
export declare class AuthenticatedMessageV0Arm extends AuthenticatedMessageBase {
    readonly type: "v0";
    readonly v0: AuthenticatedMessageV0;
    constructor(v0: AuthenticatedMessageV0);
    get value(): AuthenticatedMessageV0;
    toXdrObject(): Extract<AuthenticatedMessageWire, {
        v: 0;
    }>;
}
export type AuthenticatedMessage = AuthenticatedMessageV0Arm;
export declare const AuthenticatedMessage: typeof AuthenticatedMessageBase;
export {};
