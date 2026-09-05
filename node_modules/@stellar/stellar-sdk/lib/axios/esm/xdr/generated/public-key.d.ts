import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
export type PublicKeyWire = {
    type: 0;
    ed25519: Uint256BytesWire;
};
export type PublicKeyVariantName = "publicKeyTypeEd25519";
/**
 * ```xdr
 * union PublicKey switch (PublicKeyType type)
 * {
 * case PUBLIC_KEY_TYPE_ED25519:
 *     uint256 ed25519;
 * };
 * ```
 */
declare abstract class PublicKeyBase extends XdrValue {
    abstract readonly type: PublicKeyVariantName;
    constructor();
    static readonly schema: XdrType<PublicKeyWire>;
    static publicKeyTypeEd25519(ed25519: Uint256Bytes | Uint8Array | string): PublicKeyEd25519;
    static fromXdrObject(wire: PublicKeyWire): PublicKey;
    /**
     * Type guard narrowing an unknown value to a concrete PublicKey variant.
     * Use this instead of `instanceof PublicKey`: the exported `PublicKey` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `PublicKey.is(x)` narrows to the union.
     */
    static is(value: unknown): value is PublicKey;
    abstract toXdrObject(): PublicKeyWire;
}
export declare class PublicKeyEd25519 extends PublicKeyBase {
    readonly type: "publicKeyTypeEd25519";
    readonly ed25519: Uint256Bytes;
    constructor(ed25519: Uint256Bytes | Uint8Array | string);
    get value(): Uint256Bytes;
    toXdrObject(): Extract<PublicKeyWire, {
        type: 0;
    }>;
}
export type PublicKey = PublicKeyEd25519;
export declare const PublicKey: typeof PublicKeyBase;
export {};
