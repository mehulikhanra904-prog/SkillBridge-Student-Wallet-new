import { Memo as XdrMemo } from "../xdr/index.js";
/**
 * Type of {@link Memo}.
 */
export declare const MemoNone = "none";
/**
 * Type of {@link Memo}.
 */
export declare const MemoID = "id";
/**
 * Type of {@link Memo}.
 */
export declare const MemoText = "text";
/**
 * Type of {@link Memo}.
 */
export declare const MemoHash = "hash";
/**
 * Type of {@link Memo}.
 */
export declare const MemoReturn = "return";
export type MemoTypeNone = typeof MemoNone;
export type MemoTypeID = typeof MemoID;
export type MemoTypeText = typeof MemoText;
export type MemoTypeHash = typeof MemoHash;
export type MemoTypeReturn = typeof MemoReturn;
export declare namespace MemoType {
    type None = MemoTypeNone;
    type ID = MemoTypeID;
    type Text = MemoTypeText;
    type Hash = MemoTypeHash;
    type Return = MemoTypeReturn;
}
export type MemoType = MemoTypeHash | MemoTypeID | MemoTypeNone | MemoTypeReturn | MemoTypeText;
export type MemoValue = string | null | Uint8Array;
type MemoValueMap = {
    [MemoNone]: null;
    [MemoID]: string;
    [MemoText]: Uint8Array | string;
    [MemoHash]: Uint8Array;
    [MemoReturn]: Uint8Array;
};
type MemoTypeToValue<T extends MemoType> = MemoValueMap[T];
/**
 * `Memo` represents memos attached to transactions.
 *
 * @see [Transactions concept](https://developers.stellar.org/docs/glossary/transactions/)
 */
export declare class Memo<T extends MemoType = MemoType> {
    private _type;
    private _value;
    constructor(type: MemoType.None, value?: null);
    constructor(type: MemoType.Hash | MemoType.Return, value: Uint8Array);
    constructor(type: MemoType.Hash | MemoType.ID | MemoType.Return | MemoType.Text, value: string);
    constructor(type: T, value: MemoValue);
    /**
     * Contains memo type: `MemoNone`, `MemoID`, `MemoText`, `MemoHash` or `MemoReturn`
     */
    get type(): T;
    set type(_type: T);
    /**
     * Contains memo value:
     * * `null` for `MemoNone`,
     * * `string` for `MemoID`,
     * * `Uint8Array` for `MemoText` after decoding using `fromXdrObject`, original value otherwise,
     * * `Uint8Array` for `MemoHash`, `MemoReturn`.
     */
    get value(): MemoTypeToValue<T>;
    set value(_value: MemoTypeToValue<T>);
    private static _validateIdValue;
    private static _validateTextValue;
    private static _validateHashValue;
    /**
     * Returns an empty memo (`MemoNone`).
     */
    static none(): Memo<MemoTypeNone>;
    /**
     * Creates and returns a `MemoText` memo.
     *
     * @param text - memo text. A JS string is UTF-8 encoded on the wire;
     *   pass a `Uint8Array` for byte-exact content. A plain `number[]` is not
     *   accepted (16.2.0 and earlier took one); wrap it: `new Uint8Array(arr)`.
     */
    static text(text: string | Uint8Array): Memo<MemoTypeText>;
    /**
     * Creates and returns a `MemoID` memo.
     *
     * @param id - 64-bit number represented as a string
     */
    static id(id: string): Memo<MemoTypeID>;
    /**
     * Creates and returns a `MemoHash` memo.
     *
     * @param hash - 32 byte hash or hex encoded string
     */
    static hash(hash: Uint8Array | string): Memo<MemoTypeHash>;
    /**
     * Creates and returns a `MemoReturn` memo.
     *
     * @param hash - 32 byte hash or hex encoded string
     */
    static return(hash: Uint8Array | string): Memo<MemoTypeReturn>;
    /**
     * Returns XDR memo object.
     */
    toXdrObject(): XdrMemo;
    /**
     * Returns {@link Memo} from XDR memo object.
     *
     * @param object - XDR memo object
     */
    static fromXdrObject(object: XdrMemo): Memo;
    /**
     * @deprecated Use {@link toXdrObject} instead.
     * Deprecated in version v17.0.0
     */
    toXDRObject(): XdrMemo;
    /**
     * @deprecated Use {@link Memo.fromXdrObject} instead.
     * Deprecated in version v17.0.0
     */
    static fromXDRObject(object: XdrMemo): Memo;
}
export {};
