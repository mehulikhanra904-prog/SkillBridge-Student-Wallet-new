import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
export interface AccountEntryExtensionV3Wire {
    ext: ExtensionPointWire;
    seqLedger: number;
    seqTime: bigint;
}
/**
 * ```xdr
 * struct AccountEntryExtensionV3
 * {
 *     // We can use this to add more fields, or because it is first, to
 *     // change AccountEntryExtensionV3 into a union.
 *     ExtensionPoint ext;
 *
 *     // Ledger number at which `seqNum` took on its present value.
 *     uint32 seqLedger;
 *
 *     // Time at which `seqNum` took on its present value.
 *     TimePoint seqTime;
 * };
 * ```
 */
export declare class AccountEntryExtensionV3 extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly seqLedger: number;
    readonly seqTime: bigint;
    static readonly schema: XdrType<AccountEntryExtensionV3Wire>;
    constructor(input: {
        ext: ExtensionPoint;
        seqLedger: number;
        seqTime: bigint;
    });
    toXdrObject(): AccountEntryExtensionV3Wire;
    static fromXdrObject(wire: AccountEntryExtensionV3Wire): AccountEntryExtensionV3;
}
