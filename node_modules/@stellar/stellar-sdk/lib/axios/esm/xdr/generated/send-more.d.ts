import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface SendMoreWire {
    numMessages: number;
}
/**
 * ```xdr
 * struct SendMore
 * {
 *     uint32 numMessages;
 * };
 * ```
 */
export declare class SendMore extends XdrValue {
    readonly numMessages: number;
    static readonly schema: XdrType<SendMoreWire>;
    constructor(input: {
        numMessages: number;
    });
    toXdrObject(): SendMoreWire;
    static fromXdrObject(wire: SendMoreWire): SendMore;
}
