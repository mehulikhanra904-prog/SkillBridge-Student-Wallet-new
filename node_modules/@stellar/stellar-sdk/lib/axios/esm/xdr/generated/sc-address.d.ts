import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { ContractId, type ContractIdWire } from "./contract-id.js";
import { MuxedEd25519Account, type MuxedEd25519AccountWire } from "./muxed-ed25519-account.js";
import { ClaimableBalanceId, type ClaimableBalanceIdWire } from "./claimable-balance-id.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
export type ScAddressWire = {
    type: 0;
    accountId: PublicKeyWire;
} | {
    type: 1;
    contractId: ContractIdWire;
} | {
    type: 2;
    muxedAccount: MuxedEd25519AccountWire;
} | {
    type: 3;
    claimableBalanceId: ClaimableBalanceIdWire;
} | {
    type: 4;
    liquidityPoolId: PoolIdWire;
};
export type ScAddressVariantName = "scAddressTypeAccount" | "scAddressTypeContract" | "scAddressTypeMuxedAccount" | "scAddressTypeClaimableBalance" | "scAddressTypeLiquidityPool";
/**
 * ```xdr
 * union SCAddress switch (SCAddressType type)
 * {
 * case SC_ADDRESS_TYPE_ACCOUNT:
 *     AccountID accountId;
 * case SC_ADDRESS_TYPE_CONTRACT:
 *     ContractID contractId;
 * case SC_ADDRESS_TYPE_MUXED_ACCOUNT:
 *     MuxedEd25519Account muxedAccount;
 * case SC_ADDRESS_TYPE_CLAIMABLE_BALANCE:
 *     ClaimableBalanceID claimableBalanceId;
 * case SC_ADDRESS_TYPE_LIQUIDITY_POOL:
 *     PoolID liquidityPoolId;
 * #ifdef CAP_0084_MUXED_CONTRACT
 * case SC_ADDRESS_TYPE_MUXED_CONTRACT:
 *     MuxedContract muxedContract;
 * #endif
 * };
 * ```
 */
declare abstract class ScAddressBase extends XdrValue {
    abstract readonly type: ScAddressVariantName;
    constructor();
    static readonly schema: XdrType<ScAddressWire>;
    static scAddressTypeAccount(accountId: PublicKey): ScAddressAccount;
    static scAddressTypeContract(contractId: ContractId): ScAddressContract;
    static scAddressTypeMuxedAccount(muxedAccount: MuxedEd25519Account): ScAddressMuxedAccount;
    static scAddressTypeClaimableBalance(claimableBalanceId: ClaimableBalanceId): ScAddressClaimableBalance;
    static scAddressTypeLiquidityPool(liquidityPoolId: PoolId): ScAddressLiquidityPool;
    static fromXdrObject(wire: ScAddressWire): ScAddress;
    /**
     * Type guard narrowing an unknown value to a concrete ScAddress variant.
     * Use this instead of `instanceof ScAddress`: the exported `ScAddress` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScAddress.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScAddress;
    abstract toXdrObject(): ScAddressWire;
}
export declare class ScAddressAccount extends ScAddressBase {
    readonly type: "scAddressTypeAccount";
    readonly accountId: PublicKey;
    constructor(accountId: PublicKey);
    get value(): PublicKey;
    toXdrObject(): Extract<ScAddressWire, {
        type: 0;
    }>;
}
export declare class ScAddressContract extends ScAddressBase {
    readonly type: "scAddressTypeContract";
    readonly contractId: ContractId;
    constructor(contractId: ContractId);
    get value(): ContractId;
    toXdrObject(): Extract<ScAddressWire, {
        type: 1;
    }>;
}
export declare class ScAddressMuxedAccount extends ScAddressBase {
    readonly type: "scAddressTypeMuxedAccount";
    readonly muxedAccount: MuxedEd25519Account;
    constructor(muxedAccount: MuxedEd25519Account);
    get value(): MuxedEd25519Account;
    toXdrObject(): Extract<ScAddressWire, {
        type: 2;
    }>;
}
export declare class ScAddressClaimableBalance extends ScAddressBase {
    readonly type: "scAddressTypeClaimableBalance";
    readonly claimableBalanceId: ClaimableBalanceId;
    constructor(claimableBalanceId: ClaimableBalanceId);
    get value(): ClaimableBalanceId;
    toXdrObject(): Extract<ScAddressWire, {
        type: 3;
    }>;
}
export declare class ScAddressLiquidityPool extends ScAddressBase {
    readonly type: "scAddressTypeLiquidityPool";
    readonly liquidityPoolId: PoolId;
    constructor(liquidityPoolId: PoolId);
    get value(): PoolId;
    toXdrObject(): Extract<ScAddressWire, {
        type: 4;
    }>;
}
export type ScAddress = ScAddressAccount | ScAddressContract | ScAddressMuxedAccount | ScAddressClaimableBalance | ScAddressLiquidityPool;
export declare const ScAddress: typeof ScAddressBase;
export {};
