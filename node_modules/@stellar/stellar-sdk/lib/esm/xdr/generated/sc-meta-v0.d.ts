import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
export interface ScMetaV0Wire {
    key: XdrString;
    val: XdrString;
}
/**
 * ```xdr
 * struct SCMetaV0
 * {
 *     string key<>;
 *     string val<>;
 * };
 * ```
 */
export declare class ScMetaV0 extends XdrValue {
    readonly key: XdrString;
    readonly val: XdrString;
    static readonly schema: XdrType<ScMetaV0Wire>;
    constructor(input: {
        key: XdrString | string | Uint8Array;
        val: XdrString | string | Uint8Array;
    });
    toXdrObject(): ScMetaV0Wire;
    static fromXdrObject(wire: ScMetaV0Wire): ScMetaV0;
}
