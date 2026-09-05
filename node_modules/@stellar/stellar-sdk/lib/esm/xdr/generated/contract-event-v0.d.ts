import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScVal, type ScValWire } from "./sc-val.js";
export interface ContractEventV0Wire {
    topics: ScValWire[];
    data: ScValWire;
}
/**
 * ```xdr
 * struct
 *         {
 *             SCVal topics<>;
 *             SCVal data;
 *         }
 * ```
 */
export declare class ContractEventV0 extends XdrValue {
    readonly topics: ScVal[];
    readonly data: ScVal;
    static readonly schema: XdrType<ContractEventV0Wire>;
    constructor(input: {
        topics: ScVal[];
        data: ScVal;
    });
    toXdrObject(): ContractEventV0Wire;
    static fromXdrObject(wire: ContractEventV0Wire): ContractEventV0;
}
