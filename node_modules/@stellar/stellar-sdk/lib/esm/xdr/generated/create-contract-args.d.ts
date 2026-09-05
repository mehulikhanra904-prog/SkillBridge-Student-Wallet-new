import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractIdPreimage, type ContractIdPreimageWire } from "./contract-id-preimage.js";
import { ContractExecutable, type ContractExecutableWire } from "./contract-executable.js";
export interface CreateContractArgsWire {
    contractIdPreimage: ContractIdPreimageWire;
    executable: ContractExecutableWire;
}
/**
 * ```xdr
 * struct CreateContractArgs
 * {
 *     ContractIDPreimage contractIDPreimage;
 *     ContractExecutable executable;
 * };
 * ```
 */
export declare class CreateContractArgs extends XdrValue {
    readonly contractIdPreimage: ContractIdPreimage;
    readonly executable: ContractExecutable;
    static readonly schema: XdrType<CreateContractArgsWire>;
    constructor(input: {
        contractIdPreimage: ContractIdPreimage;
        executable: ContractExecutable;
    });
    toXdrObject(): CreateContractArgsWire;
    static fromXdrObject(wire: CreateContractArgsWire): CreateContractArgs;
}
