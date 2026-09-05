import { EnumValue } from "../values/enum-value.js";
export type ScValTypeWire = number;
export type ScValTypeName = "scvBool" | "scvVoid" | "scvError" | "scvU32" | "scvI32" | "scvU64" | "scvI64" | "scvTimepoint" | "scvDuration" | "scvU128" | "scvI128" | "scvU256" | "scvI256" | "scvBytes" | "scvString" | "scvSymbol" | "scvVec" | "scvMap" | "scvAddress" | "scvContractInstance" | "scvLedgerKeyContractInstance" | "scvLedgerKeyNonce" | "scvExecutableTag";
/**
 * ```xdr
 * enum SCValType
 * {
 *     SCV_BOOL = 0,
 *     SCV_VOID = 1,
 *     SCV_ERROR = 2,
 *
 *     // 32 bits is the smallest type in WASM or XDR; no need for u8/u16.
 *     SCV_U32 = 3,
 *     SCV_I32 = 4,
 *
 *     // 64 bits is naturally supported by both WASM and XDR also.
 *     SCV_U64 = 5,
 *     SCV_I64 = 6,
 *
 *     // Time-related u64 subtypes with their own functions and formatting.
 *     SCV_TIMEPOINT = 7,
 *     SCV_DURATION = 8,
 *
 *     // 128 bits is naturally supported by Rust and we use it for Soroban
 *     // fixed-point arithmetic prices / balances / similar "quantities". These
 *     // are represented in XDR as a pair of 2 u64s.
 *     SCV_U128 = 9,
 *     SCV_I128 = 10,
 *
 *     // 256 bits is the size of sha256 output, ed25519 keys, and the EVM machine
 *     // word, so for interop use we include this even though it requires a small
 *     // amount of Rust guest and/or host library code.
 *     SCV_U256 = 11,
 *     SCV_I256 = 12,
 *
 *     // Bytes come in 3 flavors, 2 of which have meaningfully different
 *     // formatting and validity-checking / domain-restriction.
 *     SCV_BYTES = 13,
 *     SCV_STRING = 14,
 *     SCV_SYMBOL = 15,
 *
 *     // Vecs and maps are just polymorphic containers of other ScVals.
 *     SCV_VEC = 16,
 *     SCV_MAP = 17,
 *
 *     // Address is the universal identifier for contracts and classic
 *     // accounts.
 *     SCV_ADDRESS = 18,
 *
 *     // The following are the internal SCVal variants that are not
 *     // exposed to the contracts.
 *     SCV_CONTRACT_INSTANCE = 19,
 *
 *     // SCV_LEDGER_KEY_CONTRACT_INSTANCE and SCV_LEDGER_KEY_NONCE are unique
 *     // symbolic SCVals used as the key for ledger entries for a contract's
 *     // instance and an address' nonce, respectively.
 *     SCV_LEDGER_KEY_CONTRACT_INSTANCE = 20,
 *     SCV_LEDGER_KEY_NONCE = 21,
 *
 *     SCV_EXECUTABLE_TAG = 22
 * };
 * ```
 */
export declare class ScValType extends EnumValue<ScValTypeName> {
    static readonly scvBool: ScValType;
    static readonly scvVoid: ScValType;
    static readonly scvError: ScValType;
    static readonly scvU32: ScValType;
    static readonly scvI32: ScValType;
    static readonly scvU64: ScValType;
    static readonly scvI64: ScValType;
    static readonly scvTimepoint: ScValType;
    static readonly scvDuration: ScValType;
    static readonly scvU128: ScValType;
    static readonly scvI128: ScValType;
    static readonly scvU256: ScValType;
    static readonly scvI256: ScValType;
    static readonly scvBytes: ScValType;
    static readonly scvString: ScValType;
    static readonly scvSymbol: ScValType;
    static readonly scvVec: ScValType;
    static readonly scvMap: ScValType;
    static readonly scvAddress: ScValType;
    static readonly scvContractInstance: ScValType;
    static readonly scvLedgerKeyContractInstance: ScValType;
    static readonly scvLedgerKeyNonce: ScValType;
    static readonly scvExecutableTag: ScValType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scvBool: 0;
        readonly scvVoid: 1;
        readonly scvError: 2;
        readonly scvU32: 3;
        readonly scvI32: 4;
        readonly scvU64: 5;
        readonly scvI64: 6;
        readonly scvTimepoint: 7;
        readonly scvDuration: 8;
        readonly scvU128: 9;
        readonly scvI128: 10;
        readonly scvU256: 11;
        readonly scvI256: 12;
        readonly scvBytes: 13;
        readonly scvString: 14;
        readonly scvSymbol: 15;
        readonly scvVec: 16;
        readonly scvMap: 17;
        readonly scvAddress: 18;
        readonly scvContractInstance: 19;
        readonly scvLedgerKeyContractInstance: 20;
        readonly scvLedgerKeyNonce: 21;
        readonly scvExecutableTag: 22;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScValType";
        readonly nameByValue: ReadonlyMap<number, "scvBool" | "scvVoid" | "scvError" | "scvU32" | "scvI32" | "scvU64" | "scvI64" | "scvTimepoint" | "scvDuration" | "scvU128" | "scvI128" | "scvU256" | "scvI256" | "scvBytes" | "scvString" | "scvSymbol" | "scvVec" | "scvMap" | "scvAddress" | "scvContractInstance" | "scvLedgerKeyContractInstance" | "scvLedgerKeyNonce" | "scvExecutableTag">;
    } & {
        readonly scvBool: 0;
        readonly scvVoid: 1;
        readonly scvError: 2;
        readonly scvU32: 3;
        readonly scvI32: 4;
        readonly scvU64: 5;
        readonly scvI64: 6;
        readonly scvTimepoint: 7;
        readonly scvDuration: 8;
        readonly scvU128: 9;
        readonly scvI128: 10;
        readonly scvU256: 11;
        readonly scvI256: 12;
        readonly scvBytes: 13;
        readonly scvString: 14;
        readonly scvSymbol: 15;
        readonly scvVec: 16;
        readonly scvMap: 17;
        readonly scvAddress: 18;
        readonly scvContractInstance: 19;
        readonly scvLedgerKeyContractInstance: 20;
        readonly scvLedgerKeyNonce: 21;
        readonly scvExecutableTag: 22;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScValType;
    static fromName(name: ScValTypeName): ScValType;
    static fromXdrObject(wire: number): ScValType;
}
