import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { ContractIdPreimage, type ContractIdPreimageWire } from "./contract-id-preimage.js";
export interface HashIdPreimageContractIdWire {
    networkId: HashWire;
    contractIdPreimage: ContractIdPreimageWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         Hash networkID;
 *         ContractIDPreimage contractIDPreimage;
 *     }
 * ```
 */
export declare class HashIdPreimageContractId extends XdrValue {
    readonly networkId: Hash;
    readonly contractIdPreimage: ContractIdPreimage;
    static readonly schema: XdrType<HashIdPreimageContractIdWire>;
    constructor(input: {
        networkId: Hash | Uint8Array | string;
        contractIdPreimage: ContractIdPreimage;
    });
    toXdrObject(): HashIdPreimageContractIdWire;
    static fromXdrObject(wire: HashIdPreimageContractIdWire): HashIdPreimageContractId;
}
