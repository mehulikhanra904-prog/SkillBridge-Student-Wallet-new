import { EnumValue } from "../values/enum-value.js";
export type LedgerUpgradeTypeWire = number;
export type LedgerUpgradeTypeName = "ledgerUpgradeVersion" | "ledgerUpgradeBaseFee" | "ledgerUpgradeMaxTxSetSize" | "ledgerUpgradeBaseReserve" | "ledgerUpgradeFlags" | "ledgerUpgradeConfig" | "ledgerUpgradeMaxSorobanTxSetSize";
/**
 * ```xdr
 * enum LedgerUpgradeType
 * {
 *     LEDGER_UPGRADE_VERSION = 1,
 *     LEDGER_UPGRADE_BASE_FEE = 2,
 *     LEDGER_UPGRADE_MAX_TX_SET_SIZE = 3,
 *     LEDGER_UPGRADE_BASE_RESERVE = 4,
 *     LEDGER_UPGRADE_FLAGS = 5,
 *     LEDGER_UPGRADE_CONFIG = 6,
 *     LEDGER_UPGRADE_MAX_SOROBAN_TX_SET_SIZE = 7
 * };
 * ```
 */
export declare class LedgerUpgradeType extends EnumValue<LedgerUpgradeTypeName> {
    static readonly ledgerUpgradeVersion: LedgerUpgradeType;
    static readonly ledgerUpgradeBaseFee: LedgerUpgradeType;
    static readonly ledgerUpgradeMaxTxSetSize: LedgerUpgradeType;
    static readonly ledgerUpgradeBaseReserve: LedgerUpgradeType;
    static readonly ledgerUpgradeFlags: LedgerUpgradeType;
    static readonly ledgerUpgradeConfig: LedgerUpgradeType;
    static readonly ledgerUpgradeMaxSorobanTxSetSize: LedgerUpgradeType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly ledgerUpgradeVersion: 1;
        readonly ledgerUpgradeBaseFee: 2;
        readonly ledgerUpgradeMaxTxSetSize: 3;
        readonly ledgerUpgradeBaseReserve: 4;
        readonly ledgerUpgradeFlags: 5;
        readonly ledgerUpgradeConfig: 6;
        readonly ledgerUpgradeMaxSorobanTxSetSize: 7;
    }>> & {
        readonly kind: "enum";
        readonly name: "LedgerUpgradeType";
        readonly nameByValue: ReadonlyMap<number, "ledgerUpgradeVersion" | "ledgerUpgradeBaseFee" | "ledgerUpgradeMaxTxSetSize" | "ledgerUpgradeBaseReserve" | "ledgerUpgradeFlags" | "ledgerUpgradeConfig" | "ledgerUpgradeMaxSorobanTxSetSize">;
    } & {
        readonly ledgerUpgradeVersion: 1;
        readonly ledgerUpgradeBaseFee: 2;
        readonly ledgerUpgradeMaxTxSetSize: 3;
        readonly ledgerUpgradeBaseReserve: 4;
        readonly ledgerUpgradeFlags: 5;
        readonly ledgerUpgradeConfig: 6;
        readonly ledgerUpgradeMaxSorobanTxSetSize: 7;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): LedgerUpgradeType;
    static fromName(name: LedgerUpgradeTypeName): LedgerUpgradeType;
    static fromXdrObject(wire: number): LedgerUpgradeType;
}
