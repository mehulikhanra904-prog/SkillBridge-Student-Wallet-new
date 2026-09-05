import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ShortHashSeedWire {
    seed: Uint8Array;
}
/**
 * ```xdr
 * struct ShortHashSeed
 * {
 *     opaque seed[16];
 * };
 * ```
 */
export declare class ShortHashSeed extends XdrValue {
    readonly seed: Uint8Array;
    static readonly schema: XdrType<ShortHashSeedWire>;
    constructor(input: {
        seed: Uint8Array;
    });
    toXdrObject(): ShortHashSeedWire;
    static fromXdrObject(wire: ShortHashSeedWire): ShortHashSeed;
}
