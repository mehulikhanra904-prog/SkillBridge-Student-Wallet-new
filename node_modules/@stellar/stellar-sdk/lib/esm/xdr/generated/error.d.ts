import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ErrorCode, type ErrorCodeWire } from "./error-code.js";
export interface ErrorWire {
    code: ErrorCodeWire;
    msg: XdrString;
}
/**
 * ```xdr
 * struct Error
 * {
 *     ErrorCode code;
 *     string msg<100>;
 * };
 * ```
 */
export declare class Error extends XdrValue {
    readonly code: ErrorCode;
    readonly msg: XdrString;
    static readonly schema: XdrType<ErrorWire>;
    constructor(input: {
        code: ErrorCode;
        msg: XdrString | string | Uint8Array;
    });
    toXdrObject(): ErrorWire;
    static fromXdrObject(wire: ErrorWire): Error;
}
