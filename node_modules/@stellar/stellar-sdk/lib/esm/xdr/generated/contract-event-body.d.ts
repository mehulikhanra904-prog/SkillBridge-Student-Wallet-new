import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractEventV0, type ContractEventV0Wire } from "./contract-event-v0.js";
export type ContractEventBodyWire = {
    v: 0;
    v0: ContractEventV0Wire;
};
export type ContractEventBodyVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         struct
 *         {
 *             SCVal topics<>;
 *             SCVal data;
 *         } v0;
 *     }
 * ```
 */
declare abstract class ContractEventBodyBase extends XdrValue {
    abstract readonly type: ContractEventBodyVariantName;
    constructor();
    static readonly schema: XdrType<ContractEventBodyWire>;
    static v0(v0: ContractEventV0): ContractEventBodyV0;
    static fromXdrObject(wire: ContractEventBodyWire): ContractEventBody;
    /**
     * Type guard narrowing an unknown value to a concrete ContractEventBody variant.
     * Use this instead of `instanceof ContractEventBody`: the exported `ContractEventBody` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ContractEventBody.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ContractEventBody;
    abstract toXdrObject(): ContractEventBodyWire;
}
export declare class ContractEventBodyV0 extends ContractEventBodyBase {
    readonly type: "v0";
    readonly v0: ContractEventV0;
    constructor(v0: ContractEventV0);
    get value(): ContractEventV0;
    toXdrObject(): Extract<ContractEventBodyWire, {
        v: 0;
    }>;
}
export type ContractEventBody = ContractEventBodyV0;
export declare const ContractEventBody: typeof ContractEventBodyBase;
export {};
