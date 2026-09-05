import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface SendMoreExtendedWire {
    numMessages: number;
    numBytes: number;
}
/**
 * ```xdr
 * struct SendMoreExtended
 * {
 *     uint32 numMessages;
 *     uint32 numBytes;
 * };
 * ```
 */
export declare class SendMoreExtended extends XdrValue {
    readonly numMessages: number;
    readonly numBytes: number;
    static readonly schema: XdrType<SendMoreExtendedWire>;
    constructor(input: {
        numMessages: number;
        numBytes: number;
    });
    toXdrObject(): SendMoreExtendedWire;
    static fromXdrObject(wire: SendMoreExtendedWire): SendMoreExtended;
}
