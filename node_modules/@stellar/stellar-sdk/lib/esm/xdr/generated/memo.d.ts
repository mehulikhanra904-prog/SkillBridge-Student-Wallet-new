import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { Hash, type HashWire } from "./hash.js";
export type MemoWire = {
    type: 0;
} | {
    type: 1;
    text: XdrString;
} | {
    type: 2;
    id: bigint;
} | {
    type: 3;
    hash: HashWire;
} | {
    type: 4;
    retHash: HashWire;
};
export type MemoVariantName = "memoNone" | "memoText" | "memoId" | "memoHash" | "memoReturn";
/**
 * ```xdr
 * union Memo switch (MemoType type)
 * {
 * case MEMO_NONE:
 *     void;
 * case MEMO_TEXT:
 *     string text<28>;
 * case MEMO_ID:
 *     uint64 id;
 * case MEMO_HASH:
 *     Hash hash; // the hash of what to pull from the content server
 * case MEMO_RETURN:
 *     Hash retHash; // the hash of the tx you are rejecting
 * };
 * ```
 */
declare abstract class MemoBase extends XdrValue {
    abstract readonly type: MemoVariantName;
    constructor();
    static readonly schema: XdrType<MemoWire>;
    static memoNone(): MemoNone;
    static memoText(text: XdrString | string | Uint8Array): MemoText;
    static memoId(id: bigint): MemoId;
    static memoHash(hash: Hash | Uint8Array | string): MemoHash;
    static memoReturn(retHash: Hash | Uint8Array | string): MemoReturn;
    static fromXdrObject(wire: MemoWire): Memo;
    /**
     * Type guard narrowing an unknown value to a concrete Memo variant.
     * Use this instead of `instanceof Memo`: the exported `Memo` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `Memo.is(x)` narrows to the union.
     */
    static is(value: unknown): value is Memo;
    abstract toXdrObject(): MemoWire;
}
export declare class MemoNone extends MemoBase {
    readonly type: "memoNone";
    get value(): null;
    toXdrObject(): Extract<MemoWire, {
        type: 0;
    }>;
}
export declare class MemoText extends MemoBase {
    readonly type: "memoText";
    readonly text: XdrString;
    constructor(text: XdrString | string | Uint8Array);
    get value(): string;
    toXdrObject(): Extract<MemoWire, {
        type: 1;
    }>;
}
export declare class MemoId extends MemoBase {
    readonly type: "memoId";
    readonly id: bigint;
    constructor(id: bigint);
    get value(): bigint;
    toXdrObject(): Extract<MemoWire, {
        type: 2;
    }>;
}
export declare class MemoHash extends MemoBase {
    readonly type: "memoHash";
    readonly hash: Hash;
    constructor(hash: Hash | Uint8Array | string);
    get value(): Hash;
    toXdrObject(): Extract<MemoWire, {
        type: 3;
    }>;
}
export declare class MemoReturn extends MemoBase {
    readonly type: "memoReturn";
    readonly retHash: Hash;
    constructor(retHash: Hash | Uint8Array | string);
    get value(): Hash;
    toXdrObject(): Extract<MemoWire, {
        type: 4;
    }>;
}
export type Memo = MemoNone | MemoText | MemoId | MemoHash | MemoReturn;
export declare const Memo: typeof MemoBase;
export {};
