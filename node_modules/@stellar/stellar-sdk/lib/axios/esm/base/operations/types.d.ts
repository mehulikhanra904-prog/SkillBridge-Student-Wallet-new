import { Asset } from "../asset.js";
import { Address } from "../address.js";
import { Claimant } from "../claimant.js";
import { LiquidityPoolAsset } from "../liquidity_pool_asset.js";
import { LiquidityPoolId } from "../liquidity_pool_id.js";
import { ContractExecutableExternalRef, HostFunction, MuxedAccount, OperationBody, ScVal, SorobanAuthorizationEntry } from "../../xdr/index.js";
import type { BigNumber } from "../util/bignumber.js";
export interface OperationAttributes {
    body: OperationBody;
    sourceAccount: MuxedAccount | null;
}
export type ChangeTrustOpts = {
    asset: Asset | LiquidityPoolAsset;
    line?: never;
    limit?: string;
    source?: string;
} | {
    line: Asset | LiquidityPoolAsset;
    asset?: never;
    limit?: string;
    source?: string;
};
export interface RestoreFootprintOpts {
    source?: string;
}
export interface ManageDataOpts {
    name: string;
    value: string | Uint8Array | null;
    source?: string;
}
export interface InflationOpts {
    source?: string;
}
export interface ExtendFootprintTtlOpts {
    extendTo: number;
    source?: string;
}
export interface EndSponsoringFutureReservesOpts {
    source?: string;
}
export interface LiquidityPoolWithdrawOpts {
    liquidityPoolId: string;
    amount: string;
    minAmountA: string;
    minAmountB: string;
    source?: string;
}
export interface AllowTrustOpts {
    trustor: string;
    assetCode: string;
    authorize?: TrustLineFlag | boolean;
    source?: string;
}
export interface BeginSponsoringFutureReservesOpts {
    sponsoredId: string;
    source?: string;
}
export interface TrustLineFlagMap {
    authorized?: boolean;
    authorizedToMaintainLiabilities?: boolean;
    clawbackEnabled?: boolean;
}
export interface SetTrustLineFlagsOpts {
    trustor: string;
    asset: Asset;
    flags: TrustLineFlagMap;
    source?: string;
}
export interface BaseSignerOpt {
    weight?: number | string;
}
export interface Ed25519PublicKeySignerOpt {
    ed25519PublicKey: string;
    sha256Hash?: never;
    preAuthTx?: never;
    ed25519SignedPayload?: never;
}
export interface Sha256HashSignerOpt {
    ed25519PublicKey?: never;
    sha256Hash: Uint8Array | string;
    preAuthTx?: never;
    ed25519SignedPayload?: never;
}
export interface PreAuthTxSignerOpt {
    ed25519PublicKey?: never;
    sha256Hash?: never;
    preAuthTx: Uint8Array | string;
    ed25519SignedPayload?: never;
}
export interface Ed25519SignedPayloadSignerOpt {
    ed25519PublicKey?: never;
    sha256Hash?: never;
    preAuthTx?: never;
    ed25519SignedPayload: string;
}
export type SignerOpts = BaseSignerOpt & (Ed25519PublicKeySignerOpt | Ed25519SignedPayloadSignerOpt | PreAuthTxSignerOpt | Sha256HashSignerOpt);
export interface SetOptionsOpts<T extends SignerOpts = never> {
    inflationDest?: string;
    clearFlags?: AuthFlags;
    setFlags?: AuthFlags;
    masterWeight?: number | string;
    lowThreshold?: number | string;
    medThreshold?: number | string;
    highThreshold?: number | string;
    signer?: T & {
        weight: number | string;
    };
    homeDomain?: string;
    source?: string;
}
export interface CreatePassiveSellOfferOpts {
    selling: Asset;
    buying: Asset;
    amount: string;
    price: BigNumber | number | string | {
        n: number;
        d: number;
    };
    source?: string;
}
export interface ManageSellOfferOpts extends CreatePassiveSellOfferOpts {
    offerId?: number | string;
}
export interface ManageBuyOfferOpts {
    selling: Asset;
    buying: Asset;
    buyAmount: string;
    price: BigNumber | number | string | {
        n: number;
        d: number;
    };
    offerId?: number | string;
    source?: string;
}
export interface PathPaymentStrictSendOpts {
    sendAsset: Asset;
    sendAmount: string;
    destination: string;
    destAsset: Asset;
    destMin: string;
    path?: Asset[];
    source?: string;
}
export interface CreateClaimableBalanceOpts {
    asset: Asset;
    amount: string;
    claimants: Claimant[];
    source?: string;
}
export interface ClaimClaimableBalanceOpts {
    balanceId: string;
    source?: string;
}
export interface ClawbackClaimableBalanceOpts {
    balanceId: string;
    source?: string;
}
export interface BumpSequenceOpts {
    bumpTo: string;
    source?: string;
}
export interface SignerKeyOptions {
    ed25519PublicKey?: string;
    sha256Hash?: Uint8Array | string;
    preAuthTx?: Uint8Array | string;
    ed25519SignedPayload?: string;
}
export interface RevokeAccountSponsorshipOpts {
    account: string;
    source?: string;
}
export interface RevokeTrustlineSponsorshipOpts {
    account: string;
    asset: Asset | LiquidityPoolId;
    source?: string;
}
export interface RevokeOfferSponsorshipOpts {
    seller: string;
    offerId: string;
    source?: string;
}
export interface RevokeDataSponsorshipOpts {
    account: string;
    name: string;
    source?: string;
}
export interface RevokeClaimableBalanceSponsorshipOpts {
    balanceId: string;
    source?: string;
}
export interface RevokeLiquidityPoolSponsorshipOpts {
    liquidityPoolId: string;
    source?: string;
}
export type RevokeSignerOpts = Ed25519PublicKeySignerOpt | Ed25519SignedPayloadSignerOpt | PreAuthTxSignerOpt | Sha256HashSignerOpt;
export interface RevokeSignerSponsorshipOpts {
    account: string;
    signer: RevokeSignerOpts;
    source?: string;
}
export interface LiquidityPoolDepositOpts {
    liquidityPoolId: string;
    maxAmountA: string;
    maxAmountB: string;
    minPrice: BigNumber | number | string | {
        n: number;
        d: number;
    };
    maxPrice: BigNumber | number | string | {
        n: number;
        d: number;
    };
    source?: string;
}
export interface InvokeHostFunctionOpts {
    func: HostFunction;
    auth?: SorobanAuthorizationEntry[];
    source?: string;
}
export interface InvokeContractFunctionOpts {
    contract: string;
    function: string;
    args: ScVal[];
    auth?: SorobanAuthorizationEntry[];
    source?: string;
}
/**
 * A CAP-85 external executable reference: the contract that owns the
 * executable plus the owner-scoped tag naming it. The tag is an unbounded
 * `SCString` and may be binary, so it is accepted as raw bytes as well as
 * text. An {@link ContractExecutableExternalRef} (e.g. pulled from an
 * existing contract instance) is accepted directly.
 */
export type ExternalExecutableRef = ContractExecutableExternalRef | {
    owner: Address | string;
    tag: string | Uint8Array;
};
/**
 * Parameters shared by every {@link Operation.createCustomContract} call,
 * regardless of which executable the contract deploys from.
 */
interface CreateCustomContractBaseOpts {
    /** the contract deployer address, which (with the salt) derives the new contract's ID */
    address: Address;
    /** the optional parameters to pass to the constructor */
    constructorArgs?: ScVal[];
    /** an optional, 32-byte salt to distinguish deployment instances */
    salt?: Uint8Array;
    /** an optional list outlining the tree of authorizations required for the call */
    auth?: SorobanAuthorizationEntry[];
    /** an optional source account */
    source?: string;
}
/**
 * Options for {@link Operation.createCustomContract}: the shared parameters
 * plus exactly one executable — the SHA-256 hash of uploaded contract WASM
 * (`wasmHash`), or a CAP-85 external executable reference (`externalRef`).
 */
export type CreateCustomContractOpts = (CreateCustomContractBaseOpts & {
    /** the SHA-256 hash of the contract WASM you're deploying */
    wasmHash: Uint8Array;
    externalRef?: never;
}) | (CreateCustomContractBaseOpts & {
    /** an external executable reference to deploy from instead of a WASM hash */
    externalRef: ExternalExecutableRef;
    wasmHash?: never;
});
export interface CreateStellarAssetContractOpts {
    asset: Asset | string;
    auth?: SorobanAuthorizationEntry[];
    source?: string;
}
export interface UploadContractWasmOpts {
    wasm: Uint8Array;
    auth?: SorobanAuthorizationEntry[];
    source?: string;
}
export interface CreateAccountOpts {
    destination: string;
    startingBalance: string;
    source?: string;
}
export interface AccountMergeOpts {
    destination: string;
    source?: string;
}
export interface PaymentOpts {
    destination: string;
    asset: Asset;
    amount: string;
    source?: string;
}
export interface ClawbackOpts {
    asset: Asset;
    amount: string;
    from: string;
    source?: string;
}
export interface PathPaymentStrictReceiveOpts {
    sendAsset: Asset;
    sendMax: string;
    destination: string;
    destAsset: Asset;
    destAmount: string;
    path?: Asset[];
    source?: string;
}
export type OperationOptions = AccountMergeOpts | AllowTrustOpts | BeginSponsoringFutureReservesOpts | BumpSequenceOpts | ChangeTrustOpts | ClaimClaimableBalanceOpts | ClawbackClaimableBalanceOpts | ClawbackOpts | CreateAccountOpts | CreateClaimableBalanceOpts | CreateCustomContractOpts | CreatePassiveSellOfferOpts | CreateStellarAssetContractOpts | EndSponsoringFutureReservesOpts | ExtendFootprintTtlOpts | InflationOpts | InvokeContractFunctionOpts | InvokeHostFunctionOpts | LiquidityPoolDepositOpts | LiquidityPoolWithdrawOpts | ManageBuyOfferOpts | ManageDataOpts | ManageSellOfferOpts | PathPaymentStrictReceiveOpts | PathPaymentStrictSendOpts | PaymentOpts | RestoreFootprintOpts | RevokeAccountSponsorshipOpts | RevokeClaimableBalanceSponsorshipOpts | RevokeDataSponsorshipOpts | RevokeLiquidityPoolSponsorshipOpts | RevokeOfferSponsorshipOpts | RevokeSignerSponsorshipOpts | RevokeTrustlineSponsorshipOpts | SetOptionsOpts | SetTrustLineFlagsOpts | UploadContractWasmOpts;
export declare namespace OperationType {
    type CreateAccount = "createAccount";
    type Payment = "payment";
    type PathPaymentStrictReceive = "pathPaymentStrictReceive";
    type PathPaymentStrictSend = "pathPaymentStrictSend";
    type CreatePassiveSellOffer = "createPassiveSellOffer";
    type ManageSellOffer = "manageSellOffer";
    type ManageBuyOffer = "manageBuyOffer";
    type SetOptions = "setOptions";
    type ChangeTrust = "changeTrust";
    type AllowTrust = "allowTrust";
    type AccountMerge = "accountMerge";
    type Inflation = "inflation";
    type ManageData = "manageData";
    type BumpSequence = "bumpSequence";
    type CreateClaimableBalance = "createClaimableBalance";
    type ClaimClaimableBalance = "claimClaimableBalance";
    type BeginSponsoringFutureReserves = "beginSponsoringFutureReserves";
    type EndSponsoringFutureReserves = "endSponsoringFutureReserves";
    /** @deprecated Never emitted by fromXdrObject — use the specific Revoke* types instead. */
    type RevokeSponsorship = "revokeSponsorship";
    type RevokeAccountSponsorship = "revokeAccountSponsorship";
    type RevokeTrustlineSponsorship = "revokeTrustlineSponsorship";
    type RevokeOfferSponsorship = "revokeOfferSponsorship";
    type RevokeDataSponsorship = "revokeDataSponsorship";
    type RevokeClaimableBalanceSponsorship = "revokeClaimableBalanceSponsorship";
    type RevokeLiquidityPoolSponsorship = "revokeLiquidityPoolSponsorship";
    type RevokeSignerSponsorship = "revokeSignerSponsorship";
    type Clawback = "clawback";
    type ClawbackClaimableBalance = "clawbackClaimableBalance";
    type SetTrustLineFlags = "setTrustLineFlags";
    type LiquidityPoolDeposit = "liquidityPoolDeposit";
    type LiquidityPoolWithdraw = "liquidityPoolWithdraw";
    type InvokeHostFunction = "invokeHostFunction";
    type ExtendFootprintTTL = "extendFootprintTtl";
    type RestoreFootprint = "restoreFootprint";
}
export type OperationType = OperationType.AccountMerge | OperationType.AllowTrust | OperationType.BeginSponsoringFutureReserves | OperationType.BumpSequence | OperationType.ChangeTrust | OperationType.ClaimClaimableBalance | OperationType.Clawback | OperationType.ClawbackClaimableBalance | OperationType.CreateAccount | OperationType.CreateClaimableBalance | OperationType.CreatePassiveSellOffer | OperationType.EndSponsoringFutureReserves | OperationType.ExtendFootprintTTL | OperationType.Inflation | OperationType.InvokeHostFunction | OperationType.LiquidityPoolDeposit | OperationType.LiquidityPoolWithdraw | OperationType.ManageBuyOffer | OperationType.ManageData | OperationType.ManageSellOffer | OperationType.PathPaymentStrictReceive | OperationType.PathPaymentStrictSend | OperationType.Payment | OperationType.RestoreFootprint | OperationType.RevokeAccountSponsorship | OperationType.RevokeClaimableBalanceSponsorship | OperationType.RevokeDataSponsorship | OperationType.RevokeLiquidityPoolSponsorship | OperationType.RevokeOfferSponsorship | OperationType.RevokeSignerSponsorship | OperationType.RevokeTrustlineSponsorship | OperationType.SetOptions | OperationType.SetTrustLineFlags;
export declare const AuthFlag: {
    readonly required: 1;
    readonly revocable: 2;
    readonly immutable: 4;
    readonly clawbackEnabled: 8;
};
export type AuthFlag = (typeof AuthFlag)[keyof typeof AuthFlag];
export declare namespace AuthFlag {
    type required = 1;
    type revocable = 2;
    type immutable = 4;
    type clawbackEnabled = 8;
}
/**
 * A single {@link AuthFlag} or multiple flags combined with `|` (e.g. `AuthRequiredFlag | AuthRevocableFlag`).
 */
export type AuthFlags = AuthFlag | (number & {});
export declare namespace TrustLineFlag {
    type deauthorize = 0;
    type authorize = 1;
    type authorizeToMaintainLiabilities = 2;
}
export type TrustLineFlag = TrustLineFlag.authorize | TrustLineFlag.authorizeToMaintainLiabilities | TrustLineFlag.deauthorize;
export declare namespace Signer {
    interface Ed25519PublicKey {
        ed25519PublicKey: string;
        weight?: number;
    }
    interface Sha256Hash {
        sha256Hash: Uint8Array;
        weight?: number;
    }
    interface PreAuthTx {
        preAuthTx: Uint8Array;
        weight?: number;
    }
    interface Ed25519SignedPayload {
        ed25519SignedPayload: string;
        weight?: number;
    }
}
export type Signer = Signer.Ed25519PublicKey | Signer.Ed25519SignedPayload | Signer.PreAuthTx | Signer.Sha256Hash;
export interface BaseOperation<T extends OperationType = OperationType> {
    type: T;
    source?: string;
}
export interface CreateAccountResult extends BaseOperation<OperationType.CreateAccount> {
    destination: string;
    startingBalance: string;
}
export interface PaymentResult extends BaseOperation<OperationType.Payment> {
    destination: string;
    asset: Asset;
    amount: string;
}
export interface PathPaymentStrictReceiveResult extends BaseOperation<OperationType.PathPaymentStrictReceive> {
    sendAsset: Asset;
    sendMax: string;
    destination: string;
    destAsset: Asset;
    destAmount: string;
    path: Asset[];
}
export interface PathPaymentStrictSendResult extends BaseOperation<OperationType.PathPaymentStrictSend> {
    sendAsset: Asset;
    sendAmount: string;
    destination: string;
    destAsset: Asset;
    destMin: string;
    path: Asset[];
}
export interface CreatePassiveSellOfferResult extends BaseOperation<OperationType.CreatePassiveSellOffer> {
    selling: Asset;
    buying: Asset;
    amount: string;
    price: string;
}
export interface ManageSellOfferResult extends BaseOperation<OperationType.ManageSellOffer> {
    selling: Asset;
    buying: Asset;
    amount: string;
    price: string;
    offerId: string;
}
export interface ManageBuyOfferResult extends BaseOperation<OperationType.ManageBuyOffer> {
    selling: Asset;
    buying: Asset;
    buyAmount: string;
    price: string;
    offerId: string;
}
export interface SetOptionsResult<T extends SignerOpts = never> extends BaseOperation<OperationType.SetOptions> {
    inflationDest?: string;
    clearFlags?: AuthFlags;
    setFlags?: AuthFlags;
    masterWeight?: number;
    lowThreshold?: number;
    medThreshold?: number;
    highThreshold?: number;
    homeDomain?: string;
    signer?: T;
}
export interface ChangeTrustResult extends BaseOperation<OperationType.ChangeTrust> {
    line: Asset | LiquidityPoolAsset;
    limit: string;
}
export interface AllowTrustResult extends BaseOperation<OperationType.AllowTrust> {
    trustor: string;
    assetCode: string;
    authorize: TrustLineFlag | boolean | undefined;
}
export interface AccountMergeResult extends BaseOperation<OperationType.AccountMerge> {
    destination: string;
}
export type InflationResult = BaseOperation<OperationType.Inflation>;
export interface ManageDataResult extends BaseOperation<OperationType.ManageData> {
    name: string;
    value?: Uint8Array;
}
export interface BumpSequenceResult extends BaseOperation<OperationType.BumpSequence> {
    bumpTo: string;
}
export interface CreateClaimableBalanceResult extends BaseOperation<OperationType.CreateClaimableBalance> {
    asset: Asset;
    amount: string;
    claimants: Claimant[];
}
export interface ClaimClaimableBalanceResult extends BaseOperation<OperationType.ClaimClaimableBalance> {
    balanceId: string;
}
export interface BeginSponsoringFutureReservesResult extends BaseOperation<OperationType.BeginSponsoringFutureReserves> {
    sponsoredId: string;
}
export type EndSponsoringFutureReservesResult = BaseOperation<OperationType.EndSponsoringFutureReserves>;
export interface RevokeAccountSponsorshipResult extends BaseOperation<OperationType.RevokeAccountSponsorship> {
    account: string;
}
export interface RevokeTrustlineSponsorshipResult extends BaseOperation<OperationType.RevokeTrustlineSponsorship> {
    account: string;
    asset: Asset | LiquidityPoolId;
}
export interface RevokeOfferSponsorshipResult extends BaseOperation<OperationType.RevokeOfferSponsorship> {
    seller: string;
    offerId: string;
}
export interface RevokeDataSponsorshipResult extends BaseOperation<OperationType.RevokeDataSponsorship> {
    account: string;
    name: string;
}
export interface RevokeClaimableBalanceSponsorshipResult extends BaseOperation<OperationType.RevokeClaimableBalanceSponsorship> {
    balanceId: string;
}
export interface RevokeLiquidityPoolSponsorshipResult extends BaseOperation<OperationType.RevokeLiquidityPoolSponsorship> {
    liquidityPoolId: string;
}
export interface RevokeSignerSponsorshipResult extends BaseOperation<OperationType.RevokeSignerSponsorship> {
    account: string;
    signer: RevokeSignerOpts;
}
export interface ClawbackResult extends BaseOperation<OperationType.Clawback> {
    asset: Asset;
    amount: string;
    from: string;
}
export interface ClawbackClaimableBalanceResult extends BaseOperation<OperationType.ClawbackClaimableBalance> {
    balanceId: string;
}
export interface SetTrustLineFlagsResult extends BaseOperation<OperationType.SetTrustLineFlags> {
    trustor: string;
    asset: Asset;
    flags: {
        authorized?: boolean;
        authorizedToMaintainLiabilities?: boolean;
        clawbackEnabled?: boolean;
    };
}
export interface LiquidityPoolDepositResult extends BaseOperation<OperationType.LiquidityPoolDeposit> {
    liquidityPoolId: string;
    maxAmountA: string;
    maxAmountB: string;
    minPrice: string;
    maxPrice: string;
}
export interface LiquidityPoolWithdrawResult extends BaseOperation<OperationType.LiquidityPoolWithdraw> {
    liquidityPoolId: string;
    amount: string;
    minAmountA: string;
    minAmountB: string;
}
export interface InvokeHostFunctionResult extends BaseOperation<OperationType.InvokeHostFunction> {
    func: HostFunction;
    auth?: SorobanAuthorizationEntry[];
}
export interface ExtendFootprintTTLResult extends BaseOperation<OperationType.ExtendFootprintTTL> {
    extendTo: number;
}
export type RestoreFootprintResult = BaseOperation<OperationType.RestoreFootprint>;
/**
 * Union of all possible operation objects returned by Operation.fromXdrObject.
 */
export type OperationRecord = AccountMergeResult | AllowTrustResult | BeginSponsoringFutureReservesResult | BumpSequenceResult | ChangeTrustResult | ClaimClaimableBalanceResult | ClawbackClaimableBalanceResult | ClawbackResult | CreateAccountResult | CreateClaimableBalanceResult | CreatePassiveSellOfferResult | EndSponsoringFutureReservesResult | ExtendFootprintTTLResult | InflationResult | InvokeHostFunctionResult | LiquidityPoolDepositResult | LiquidityPoolWithdrawResult | ManageBuyOfferResult | ManageDataResult | ManageSellOfferResult | PathPaymentStrictReceiveResult | PathPaymentStrictSendResult | PaymentResult | RestoreFootprintResult | RevokeAccountSponsorshipResult | RevokeClaimableBalanceSponsorshipResult | RevokeDataSponsorshipResult | RevokeLiquidityPoolSponsorshipResult | RevokeOfferSponsorshipResult | RevokeSignerSponsorshipResult | RevokeTrustlineSponsorshipResult | SetOptionsResult<SignerOpts> | SetTrustLineFlagsResult;
export {};
