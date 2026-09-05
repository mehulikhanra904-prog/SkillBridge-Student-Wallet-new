import { EnumValue } from "../values/enum-value.js";
export type LedgerEntryChangeTypeWire = number;
export type LedgerEntryChangeTypeName = "ledgerEntryCreated" | "ledgerEntryUpdated" | "ledgerEntryRemoved" | "ledgerEntryState" | "ledgerEntryRestored";
/**
 * ```xdr
 * enum LedgerEntryChangeType
 * {
 *     LEDGER_ENTRY_CREATED = 0, // entry was added to the ledger
 *     LEDGER_ENTRY_UPDATED = 1, // entry was modified in the ledger
 *     LEDGER_ENTRY_REMOVED = 2, // entry was removed from the ledger
 *     LEDGER_ENTRY_STATE    = 3, // value of the entry
 *     LEDGER_ENTRY_RESTORED = 4  // archived entry was restored in the ledger
 * };
 * ```
 */
export declare class LedgerEntryChangeType extends EnumValue<LedgerEntryChangeTypeName> {
    static readonly ledgerEntryCreated: LedgerEntryChangeType;
    static readonly ledgerEntryUpdated: LedgerEntryChangeType;
    static readonly ledgerEntryRemoved: LedgerEntryChangeType;
    static readonly ledgerEntryState: LedgerEntryChangeType;
    static readonly ledgerEntryRestored: LedgerEntryChangeType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly ledgerEntryCreated: 0;
        readonly ledgerEntryUpdated: 1;
        readonly ledgerEntryRemoved: 2;
        readonly ledgerEntryState: 3;
        readonly ledgerEntryRestored: 4;
    }>> & {
        readonly kind: "enum";
        readonly name: "LedgerEntryChangeType";
        readonly nameByValue: ReadonlyMap<number, "ledgerEntryCreated" | "ledgerEntryUpdated" | "ledgerEntryRemoved" | "ledgerEntryState" | "ledgerEntryRestored">;
    } & {
        readonly ledgerEntryCreated: 0;
        readonly ledgerEntryUpdated: 1;
        readonly ledgerEntryRemoved: 2;
        readonly ledgerEntryState: 3;
        readonly ledgerEntryRestored: 4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): LedgerEntryChangeType;
    static fromName(name: LedgerEntryChangeTypeName): LedgerEntryChangeType;
    static fromXdrObject(wire: number): LedgerEntryChangeType;
}
