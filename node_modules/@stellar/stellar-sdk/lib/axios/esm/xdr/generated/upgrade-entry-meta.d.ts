import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerUpgrade, type LedgerUpgradeWire } from "./ledger-upgrade.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
export interface UpgradeEntryMetaWire {
    upgrade: LedgerUpgradeWire;
    changes: LedgerEntryChangeWire[];
}
/**
 * ```xdr
 * struct UpgradeEntryMeta
 * {
 *     LedgerUpgrade upgrade;
 *     LedgerEntryChanges changes;
 * };
 * ```
 */
export declare class UpgradeEntryMeta extends XdrValue {
    readonly upgrade: LedgerUpgrade;
    readonly changes: LedgerEntryChange[];
    static readonly schema: XdrType<UpgradeEntryMetaWire>;
    constructor(input: {
        upgrade: LedgerUpgrade;
        changes: LedgerEntryChange[];
    });
    toXdrObject(): UpgradeEntryMetaWire;
    static fromXdrObject(wire: UpgradeEntryMetaWire): UpgradeEntryMeta;
}
