import { BytesValue } from "../values/bytes-value.js";
export type AssetCode12Wire = Uint8Array;
/**
 * ```xdr
 * typedef opaque AssetCode12[12];
 * ```
 */
export declare class AssetCode12 extends BytesValue<"AssetCode12"> {
    static readonly byteLength = 12;
    static readonly padTo = 12;
    static readonly encoding: "ascii";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): AssetCode12;
}
