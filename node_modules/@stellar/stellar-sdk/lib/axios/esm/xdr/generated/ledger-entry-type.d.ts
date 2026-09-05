import { EnumValue } from "../values/enum-value.js";
export type LedgerEntryTypeWire = number;
export type LedgerEntryTypeName = "account" | "trustline" | "offer" | "data" | "claimableBalance" | "liquidityPool" | "contractData" | "contractCode" | "configSetting" | "ttl";
/**
 * ```xdr
 * enum LedgerEntryType
 * {
 *     ACCOUNT = 0,
 *     TRUSTLINE = 1,
 *     OFFER = 2,
 *     DATA = 3,
 *     CLAIMABLE_BALANCE = 4,
 *     LIQUIDITY_POOL = 5,
 *     CONTRACT_DATA = 6,
 *     CONTRACT_CODE = 7,
 *     CONFIG_SETTING = 8,
 *     TTL = 9
 * };
 * ```
 */
export declare class LedgerEntryType extends EnumValue<LedgerEntryTypeName> {
    static readonly account: LedgerEntryType;
    static readonly trustline: LedgerEntryType;
    static readonly offer: LedgerEntryType;
    static readonly data: LedgerEntryType;
    static readonly claimableBalance: LedgerEntryType;
    static readonly liquidityPool: LedgerEntryType;
    static readonly contractData: LedgerEntryType;
    static readonly contractCode: LedgerEntryType;
    static readonly configSetting: LedgerEntryType;
    static readonly ttl: LedgerEntryType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"LedgerEntryType", {
        readonly account: 0;
        readonly trustline: 1;
        readonly offer: 2;
        readonly data: 3;
        readonly claimableBalance: 4;
        readonly liquidityPool: 5;
        readonly contractData: 6;
        readonly contractCode: 7;
        readonly configSetting: 8;
        readonly ttl: 9;
    }>;
    static fromValue(value: number): LedgerEntryType;
    static fromName(name: LedgerEntryTypeName): LedgerEntryType;
    static fromXdrObject(wire: number): LedgerEntryType;
}
