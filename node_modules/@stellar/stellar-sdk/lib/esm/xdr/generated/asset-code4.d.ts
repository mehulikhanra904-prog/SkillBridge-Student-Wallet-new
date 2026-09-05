import { BytesValue } from "../values/bytes-value.js";
export type AssetCode4Wire = Uint8Array;
/**
 * ```xdr
 * typedef opaque AssetCode4[4];
 * ```
 */
export declare class AssetCode4 extends BytesValue<"AssetCode4"> {
    static readonly byteLength = 4;
    static readonly padTo = 4;
    static readonly encoding: "ascii";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): AssetCode4;
}
