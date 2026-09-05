import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractIdPreimage, type ContractIdPreimageWire } from "./contract-id-preimage.js";
import { ContractExecutable, type ContractExecutableWire } from "./contract-executable.js";
import { ScVal, type ScValWire } from "./sc-val.js";
export interface CreateContractArgsV2Wire {
    contractIdPreimage: ContractIdPreimageWire;
    executable: ContractExecutableWire;
    constructorArgs: ScValWire[];
}
/**
 * ```xdr
 * struct CreateContractArgsV2
 * {
 *     ContractIDPreimage contractIDPreimage;
 *     ContractExecutable executable;
 *     // Arguments of the contract's constructor.
 *     SCVal constructorArgs<>;
 * };
 * ```
 */
export declare class CreateContractArgsV2 extends XdrValue {
    readonly contractIdPreimage: ContractIdPreimage;
    readonly executable: ContractExecutable;
    readonly constructorArgs: ScVal[];
    static readonly schema: XdrType<CreateContractArgsV2Wire>;
    constructor(input: {
        contractIdPreimage: ContractIdPreimage;
        executable: ContractExecutable;
        constructorArgs: ScVal[];
    });
    toXdrObject(): CreateContractArgsV2Wire;
    static fromXdrObject(wire: CreateContractArgsV2Wire): CreateContractArgsV2;
}
