import { XdrValue } from "./xdr-value.js";
export type BytesEncoding = "hex" | "base64" | "ascii";
/**
 * Shared base for fixed-length and variable-length byte aliases (Hash, Signature, AssetCode4, ...).
 * Subclasses set `static readonly byteLength` (or override `validateLength`) and
 * `static readonly encoding` to control how string constructor inputs decode.
 * Subclasses may also set `static readonly padTo` to right-pad short string
 * inputs with zero bytes (asset codes: `"USD"` → 4-byte `USD\0`).
 *
 * The `Tag` type parameter is a nominal-typing brand: subclasses pass a unique
 * string so structurally-identical aliases (e.g. `AssetCode4` vs `AssetCode12`)
 * are not silently assignable to each other.
 */
export declare abstract class BytesValue<Tag extends string = string> extends XdrValue {
    readonly __tag: Tag;
    readonly value: Uint8Array;
    constructor(value: Uint8Array | string);
    /**
     * Render the bytes in the class's declared `encoding`.
     *
     * For the XDR wire form regardless of the declared encoding, use
     * {@link XdrValue.toXdr | `toXdr("base64")`}.
     */
    toString(): string;
    toXdrObject(): Uint8Array;
    toBytes(): Uint8Array;
}
