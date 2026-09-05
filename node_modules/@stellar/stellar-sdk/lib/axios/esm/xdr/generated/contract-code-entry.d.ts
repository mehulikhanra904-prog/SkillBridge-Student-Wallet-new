import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractCodeEntryExt, type ContractCodeEntryExtWire } from "./contract-code-entry-ext.js";
import { Hash, type HashWire } from "./hash.js";
export interface ContractCodeEntryWire {
    ext: ContractCodeEntryExtWire;
    hash: HashWire;
    code: Uint8Array;
}
/**
 * ```xdr
 * struct ContractCodeEntry {
 *     union switch (int v)
 *     {
 *         case 0:
 *             void;
 *         case 1:
 *             struct
 *             {
 *                 ExtensionPoint ext;
 *                 ContractCodeCostInputs costInputs;
 *             } v1;
 *     } ext;
 *
 *     Hash hash;
 *     opaque code<>;
 * };
 * ```
 */
export declare class ContractCodeEntry extends XdrValue {
    readonly ext: ContractCodeEntryExt;
    readonly hash: Hash;
    readonly code: Uint8Array;
    static readonly schema: XdrType<ContractCodeEntryWire>;
    constructor(input: {
        ext: ContractCodeEntryExt;
        hash: Hash | Uint8Array | string;
        code: Uint8Array;
    });
    toXdrObject(): ContractCodeEntryWire;
    static fromXdrObject(wire: ContractCodeEntryWire): ContractCodeEntry;
}
