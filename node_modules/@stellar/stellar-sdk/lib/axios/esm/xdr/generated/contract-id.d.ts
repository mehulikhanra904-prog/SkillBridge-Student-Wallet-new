import { BytesValue } from "../values/bytes-value.js";
export type ContractIdWire = Uint8Array;
/**
 * ```xdr
 * typedef Hash ContractID;
 * ```
 */
export declare class ContractId extends BytesValue<"ContractId"> {
    static readonly byteLength = 32;
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): ContractId;
}
