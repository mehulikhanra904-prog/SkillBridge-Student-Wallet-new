import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerHeaderExtensionV1Ext, type LedgerHeaderExtensionV1ExtWire } from "./ledger-header-extension-v1-ext.js";
export interface LedgerHeaderExtensionV1Wire {
    flags: number;
    ext: LedgerHeaderExtensionV1ExtWire;
}
/**
 * ```xdr
 * struct LedgerHeaderExtensionV1
 * {
 *     uint32 flags; // LedgerHeaderFlags
 *
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class LedgerHeaderExtensionV1 extends XdrValue {
    readonly flags: number;
    readonly ext: LedgerHeaderExtensionV1Ext;
    static readonly schema: XdrType<LedgerHeaderExtensionV1Wire>;
    constructor(input: {
        flags: number;
        ext: LedgerHeaderExtensionV1Ext;
    });
    toXdrObject(): LedgerHeaderExtensionV1Wire;
    static fromXdrObject(wire: LedgerHeaderExtensionV1Wire): LedgerHeaderExtensionV1;
}
