import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerEntry, type LedgerEntryWire } from "./ledger-entry.js";
import { LedgerKey, type LedgerKeyWire } from "./ledger-key.js";
export type LedgerEntryChangeWire = {
    type: 0;
    created: LedgerEntryWire;
} | {
    type: 1;
    updated: LedgerEntryWire;
} | {
    type: 2;
    removed: LedgerKeyWire;
} | {
    type: 3;
    state: LedgerEntryWire;
} | {
    type: 4;
    restored: LedgerEntryWire;
};
export type LedgerEntryChangeVariantName = "ledgerEntryCreated" | "ledgerEntryUpdated" | "ledgerEntryRemoved" | "ledgerEntryState" | "ledgerEntryRestored";
/**
 * ```xdr
 * union LedgerEntryChange switch (LedgerEntryChangeType type)
 * {
 * case LEDGER_ENTRY_CREATED:
 *     LedgerEntry created;
 * case LEDGER_ENTRY_UPDATED:
 *     LedgerEntry updated;
 * case LEDGER_ENTRY_REMOVED:
 *     LedgerKey removed;
 * case LEDGER_ENTRY_STATE:
 *     LedgerEntry state;
 * case LEDGER_ENTRY_RESTORED:
 *     LedgerEntry restored;
 * };
 * ```
 */
declare abstract class LedgerEntryChangeBase extends XdrValue {
    abstract readonly type: LedgerEntryChangeVariantName;
    constructor();
    static readonly schema: XdrType<LedgerEntryChangeWire>;
    static ledgerEntryCreated(created: LedgerEntry): LedgerEntryChangeCreated;
    static ledgerEntryUpdated(updated: LedgerEntry): LedgerEntryChangeUpdated;
    static ledgerEntryRemoved(removed: LedgerKey): LedgerEntryChangeRemoved;
    static ledgerEntryState(state: LedgerEntry): LedgerEntryChangeState;
    static ledgerEntryRestored(restored: LedgerEntry): LedgerEntryChangeRestored;
    static fromXdrObject(wire: LedgerEntryChangeWire): LedgerEntryChange;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerEntryChange variant.
     * Use this instead of `instanceof LedgerEntryChange`: the exported `LedgerEntryChange` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerEntryChange.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerEntryChange;
    abstract toXdrObject(): LedgerEntryChangeWire;
}
export declare class LedgerEntryChangeCreated extends LedgerEntryChangeBase {
    readonly type: "ledgerEntryCreated";
    readonly created: LedgerEntry;
    constructor(created: LedgerEntry);
    get value(): LedgerEntry;
    toXdrObject(): Extract<LedgerEntryChangeWire, {
        type: 0;
    }>;
}
export declare class LedgerEntryChangeUpdated extends LedgerEntryChangeBase {
    readonly type: "ledgerEntryUpdated";
    readonly updated: LedgerEntry;
    constructor(updated: LedgerEntry);
    get value(): LedgerEntry;
    toXdrObject(): Extract<LedgerEntryChangeWire, {
        type: 1;
    }>;
}
export declare class LedgerEntryChangeRemoved extends LedgerEntryChangeBase {
    readonly type: "ledgerEntryRemoved";
    readonly removed: LedgerKey;
    constructor(removed: LedgerKey);
    get value(): LedgerKey;
    toXdrObject(): Extract<LedgerEntryChangeWire, {
        type: 2;
    }>;
}
export declare class LedgerEntryChangeState extends LedgerEntryChangeBase {
    readonly type: "ledgerEntryState";
    readonly state: LedgerEntry;
    constructor(state: LedgerEntry);
    get value(): LedgerEntry;
    toXdrObject(): Extract<LedgerEntryChangeWire, {
        type: 3;
    }>;
}
export declare class LedgerEntryChangeRestored extends LedgerEntryChangeBase {
    readonly type: "ledgerEntryRestored";
    readonly restored: LedgerEntry;
    constructor(restored: LedgerEntry);
    get value(): LedgerEntry;
    toXdrObject(): Extract<LedgerEntryChangeWire, {
        type: 4;
    }>;
}
export type LedgerEntryChange = LedgerEntryChangeCreated | LedgerEntryChangeUpdated | LedgerEntryChangeRemoved | LedgerEntryChangeState | LedgerEntryChangeRestored;
export declare const LedgerEntryChange: typeof LedgerEntryChangeBase;
export {};
