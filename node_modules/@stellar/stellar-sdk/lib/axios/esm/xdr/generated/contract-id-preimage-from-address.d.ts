import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
export interface ContractIdPreimageFromAddressWire {
    address: ScAddressWire;
    salt: Uint256BytesWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         SCAddress address;
 *         uint256 salt;
 *     }
 * ```
 */
export declare class ContractIdPreimageFromAddress extends XdrValue {
    readonly address: ScAddress;
    readonly salt: Uint256Bytes;
    static readonly schema: XdrType<ContractIdPreimageFromAddressWire>;
    constructor(input: {
        address: ScAddress;
        salt: Uint256Bytes | Uint8Array | string;
    });
    toXdrObject(): ContractIdPreimageFromAddressWire;
    static fromXdrObject(wire: ContractIdPreimageFromAddressWire): ContractIdPreimageFromAddress;
}
