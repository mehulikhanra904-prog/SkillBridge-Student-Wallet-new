import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { StellarMessage, type StellarMessageWire } from "./stellar-message.js";
import { HmacSha256Mac, type HmacSha256MacWire } from "./hmac-sha256-mac.js";
export interface AuthenticatedMessageV0Wire {
    sequence: bigint;
    message: StellarMessageWire;
    mac: HmacSha256MacWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         uint64 sequence;
 *         StellarMessage message;
 *         HmacSha256Mac mac;
 *     }
 * ```
 */
export declare class AuthenticatedMessageV0 extends XdrValue {
    readonly sequence: bigint;
    readonly message: StellarMessage;
    readonly mac: HmacSha256Mac;
    static readonly schema: XdrType<AuthenticatedMessageV0Wire>;
    constructor(input: {
        sequence: bigint;
        message: StellarMessage;
        mac: HmacSha256Mac;
    });
    toXdrObject(): AuthenticatedMessageV0Wire;
    static fromXdrObject(wire: AuthenticatedMessageV0Wire): AuthenticatedMessageV0;
}
