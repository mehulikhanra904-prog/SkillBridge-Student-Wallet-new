import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { HostFunction, type HostFunctionWire } from "./host-function.js";
import { SorobanAuthorizationEntry, type SorobanAuthorizationEntryWire } from "./soroban-authorization-entry.js";
export interface InvokeHostFunctionOpWire {
    hostFunction: HostFunctionWire;
    auth: SorobanAuthorizationEntryWire[];
}
/**
 * ```xdr
 * struct InvokeHostFunctionOp
 * {
 *     // Host function to invoke.
 *     HostFunction hostFunction;
 *     // Per-address authorizations for this host function.
 *     SorobanAuthorizationEntry auth<>;
 * };
 * ```
 */
export declare class InvokeHostFunctionOp extends XdrValue {
    readonly hostFunction: HostFunction;
    readonly auth: SorobanAuthorizationEntry[];
    static readonly schema: XdrType<InvokeHostFunctionOpWire>;
    constructor(input: {
        hostFunction: HostFunction;
        auth: SorobanAuthorizationEntry[];
    });
    toXdrObject(): InvokeHostFunctionOpWire;
    static fromXdrObject(wire: InvokeHostFunctionOpWire): InvokeHostFunctionOp;
}
