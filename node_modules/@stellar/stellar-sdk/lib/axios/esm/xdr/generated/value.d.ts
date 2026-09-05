import { BytesValue } from "../values/bytes-value.js";
export type ValueWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque Value<>;
 * ```
 */
export declare class Value extends BytesValue<"Value"> {
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").VarOpaqueSchema;
    static fromXdrObject(wire: Uint8Array): Value;
}
