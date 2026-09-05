import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
export interface ContractExecutableExternalRefWire {
    executableOwner: ScAddressWire;
    tag: XdrString;
}
/**
 * ```xdr
 * struct ContractExecutableExternalRef {
 *     SCAddress executable_owner;
 *     SCString tag;
 * };
 * ```
 */
export declare class ContractExecutableExternalRef extends XdrValue {
    readonly executableOwner: ScAddress;
    readonly tag: XdrString;
    static readonly schema: XdrType<ContractExecutableExternalRefWire>;
    constructor(input: {
        executableOwner: ScAddress;
        tag: XdrString | string | Uint8Array;
    });
    toXdrObject(): ContractExecutableExternalRefWire;
    static fromXdrObject(wire: ContractExecutableExternalRefWire): ContractExecutableExternalRef;
}
