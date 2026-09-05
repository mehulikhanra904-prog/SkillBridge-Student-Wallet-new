import { BytesValue } from "../values/bytes-value.js";
export type UpgradeTypeWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque UpgradeType<128>;
 * ```
 */
export declare class UpgradeType extends BytesValue<"UpgradeType"> {
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").VarOpaqueSchema;
    static fromXdrObject(wire: Uint8Array): UpgradeType;
}
