import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface EvictionIteratorWire {
    bucketListLevel: number;
    isCurrBucket: boolean;
    bucketFileOffset: bigint;
}
/**
 * ```xdr
 * struct EvictionIterator {
 *     uint32 bucketListLevel;
 *     bool isCurrBucket;
 *     uint64 bucketFileOffset;
 * };
 * ```
 */
export declare class EvictionIterator extends XdrValue {
    readonly bucketListLevel: number;
    readonly isCurrBucket: boolean;
    readonly bucketFileOffset: bigint;
    static readonly schema: XdrType<EvictionIteratorWire>;
    constructor(input: {
        bucketListLevel: number;
        isCurrBucket: boolean;
        bucketFileOffset: bigint;
    });
    toXdrObject(): EvictionIteratorWire;
    static fromXdrObject(wire: EvictionIteratorWire): EvictionIterator;
}
