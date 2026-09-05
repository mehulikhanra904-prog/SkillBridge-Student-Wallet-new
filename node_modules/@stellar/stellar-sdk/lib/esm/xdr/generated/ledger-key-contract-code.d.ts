import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export interface LedgerKeyContractCodeWire {
    hash: HashWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         Hash hash;
 *     }
 * ```
 */
export declare class LedgerKeyContractCode extends XdrValue {
    readonly hash: Hash;
    static readonly schema: XdrType<LedgerKeyContractCodeWire>;
    constructor(input: {
        hash: Hash | Uint8Array | string;
    });
    toXdrObject(): LedgerKeyContractCodeWire;
    static fromXdrObject(wire: LedgerKeyContractCodeWire): LedgerKeyContractCode;
}
