import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface HmacSha256KeyWire {
    key: Uint8Array;
}
/**
 * ```xdr
 * struct HmacSha256Key
 * {
 *     opaque key[32];
 * };
 * ```
 */
export declare class HmacSha256Key extends XdrValue {
    readonly key: Uint8Array;
    static readonly schema: XdrType<HmacSha256KeyWire>;
    constructor(input: {
        key: Uint8Array;
    });
    toXdrObject(): HmacSha256KeyWire;
    static fromXdrObject(wire: HmacSha256KeyWire): HmacSha256Key;
}
