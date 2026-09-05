import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface AuthWire {
    flags: number;
}
/**
 * ```xdr
 * struct Auth
 * {
 *     int flags;
 * };
 * ```
 */
export declare class Auth extends XdrValue {
    readonly flags: number;
    static readonly schema: XdrType<AuthWire>;
    constructor(input: {
        flags: number;
    });
    toXdrObject(): AuthWire;
    static fromXdrObject(wire: AuthWire): Auth;
}
