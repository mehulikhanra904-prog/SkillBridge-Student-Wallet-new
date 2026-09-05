import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractIdPreimageFromAddress, type ContractIdPreimageFromAddressWire } from "./contract-id-preimage-from-address.js";
import { Asset, type AssetWire } from "./asset.js";
export type ContractIdPreimageWire = {
    type: 0;
    fromAddress: ContractIdPreimageFromAddressWire;
} | {
    type: 1;
    fromAsset: AssetWire;
};
export type ContractIdPreimageVariantName = "contractIdPreimageFromAddress" | "contractIdPreimageFromAsset";
/**
 * ```xdr
 * union ContractIDPreimage switch (ContractIDPreimageType type)
 * {
 * case CONTRACT_ID_PREIMAGE_FROM_ADDRESS:
 *     struct
 *     {
 *         SCAddress address;
 *         uint256 salt;
 *     } fromAddress;
 * case CONTRACT_ID_PREIMAGE_FROM_ASSET:
 *     Asset fromAsset;
 * };
 * ```
 */
declare abstract class ContractIdPreimageBase extends XdrValue {
    abstract readonly type: ContractIdPreimageVariantName;
    constructor();
    static readonly schema: XdrType<ContractIdPreimageWire>;
    static contractIdPreimageFromAddress(fromAddress: ContractIdPreimageFromAddress): ContractIdPreimageAddress;
    static contractIdPreimageFromAsset(fromAsset: Asset): ContractIdPreimageAsset;
    static fromXdrObject(wire: ContractIdPreimageWire): ContractIdPreimage;
    /**
     * Type guard narrowing an unknown value to a concrete ContractIdPreimage variant.
     * Use this instead of `instanceof ContractIdPreimage`: the exported `ContractIdPreimage` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ContractIdPreimage.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ContractIdPreimage;
    abstract toXdrObject(): ContractIdPreimageWire;
}
export declare class ContractIdPreimageAddress extends ContractIdPreimageBase {
    readonly type: "contractIdPreimageFromAddress";
    readonly fromAddress: ContractIdPreimageFromAddress;
    constructor(fromAddress: ContractIdPreimageFromAddress);
    get value(): ContractIdPreimageFromAddress;
    toXdrObject(): Extract<ContractIdPreimageWire, {
        type: 0;
    }>;
}
export declare class ContractIdPreimageAsset extends ContractIdPreimageBase {
    readonly type: "contractIdPreimageFromAsset";
    readonly fromAsset: Asset;
    constructor(fromAsset: Asset);
    get value(): Asset;
    toXdrObject(): Extract<ContractIdPreimageWire, {
        type: 1;
    }>;
}
export type ContractIdPreimage = ContractIdPreimageAddress | ContractIdPreimageAsset;
export declare const ContractIdPreimage: typeof ContractIdPreimageBase;
export {};
