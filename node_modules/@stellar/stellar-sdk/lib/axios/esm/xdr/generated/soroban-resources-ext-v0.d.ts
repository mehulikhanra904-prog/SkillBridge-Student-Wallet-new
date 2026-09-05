import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface SorobanResourcesExtV0Wire {
    archivedSorobanEntries: number[];
}
/**
 * ```xdr
 * struct SorobanResourcesExtV0
 * {
 *     // Vector of indices representing what Soroban
 *     // entries in the footprint are archived, based on the
 *     // order of keys provided in the readWrite footprint.
 *     uint32 archivedSorobanEntries<>;
 * };
 * ```
 */
export declare class SorobanResourcesExtV0 extends XdrValue {
    readonly archivedSorobanEntries: number[];
    static readonly schema: XdrType<SorobanResourcesExtV0Wire>;
    constructor(input: {
        archivedSorobanEntries: number[];
    });
    toXdrObject(): SorobanResourcesExtV0Wire;
    static fromXdrObject(wire: SorobanResourcesExtV0Wire): SorobanResourcesExtV0;
}
