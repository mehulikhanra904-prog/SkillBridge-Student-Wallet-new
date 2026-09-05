import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanAuthorizedFunction, type SorobanAuthorizedFunctionWire } from "./soroban-authorized-function.js";
export interface SorobanAuthorizedInvocationWire {
    function: SorobanAuthorizedFunctionWire;
    subInvocations: SorobanAuthorizedInvocationWire[];
}
/**
 * ```xdr
 * struct SorobanAuthorizedInvocation
 * {
 *     SorobanAuthorizedFunction function;
 *     SorobanAuthorizedInvocation subInvocations<>;
 * };
 * ```
 */
export declare class SorobanAuthorizedInvocation extends XdrValue {
    readonly function: SorobanAuthorizedFunction;
    readonly subInvocations: SorobanAuthorizedInvocation[];
    static readonly schema: XdrType<SorobanAuthorizedInvocationWire>;
    constructor(input: {
        function: SorobanAuthorizedFunction;
        subInvocations: SorobanAuthorizedInvocation[];
    });
    toXdrObject(): SorobanAuthorizedInvocationWire;
    static fromXdrObject(wire: SorobanAuthorizedInvocationWire): SorobanAuthorizedInvocation;
}
