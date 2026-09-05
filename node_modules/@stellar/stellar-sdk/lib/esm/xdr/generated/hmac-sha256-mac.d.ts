import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface HmacSha256MacWire {
    mac: Uint8Array;
}
/**
 * ```xdr
 * struct HmacSha256Mac
 * {
 *     opaque mac[32];
 * };
 * ```
 */
export declare class HmacSha256Mac extends XdrValue {
    readonly mac: Uint8Array;
    static readonly schema: XdrType<HmacSha256MacWire>;
    constructor(input: {
        mac: Uint8Array;
    });
    toXdrObject(): HmacSha256MacWire;
    static fromXdrObject(wire: HmacSha256MacWire): HmacSha256Mac;
}
