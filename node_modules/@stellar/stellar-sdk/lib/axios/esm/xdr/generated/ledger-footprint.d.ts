import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerKey, type LedgerKeyWire } from "./ledger-key.js";
export interface LedgerFootprintWire {
    readOnly: LedgerKeyWire[];
    readWrite: LedgerKeyWire[];
}
/**
 * ```xdr
 * struct LedgerFootprint
 * {
 *     LedgerKey readOnly<>;
 *     LedgerKey readWrite<>;
 * };
 * ```
 */
export declare class LedgerFootprint extends XdrValue {
    readonly readOnly: LedgerKey[];
    readonly readWrite: LedgerKey[];
    static readonly schema: XdrType<LedgerFootprintWire>;
    constructor(input: {
        readOnly: LedgerKey[];
        readWrite: LedgerKey[];
    });
    toXdrObject(): LedgerFootprintWire;
    static fromXdrObject(wire: LedgerFootprintWire): LedgerFootprint;
}
