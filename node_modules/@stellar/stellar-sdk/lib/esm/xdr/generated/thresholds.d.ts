import { BytesValue } from "../values/bytes-value.js";
export type ThresholdsWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque Thresholds[4];
 * ```
 */
export declare class Thresholds extends BytesValue<"Thresholds"> {
    static readonly byteLength = 4;
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): Thresholds;
}
