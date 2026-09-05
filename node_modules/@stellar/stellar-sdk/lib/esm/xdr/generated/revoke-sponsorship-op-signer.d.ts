import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { SignerKey, type SignerKeyWire } from "./signer-key.js";
export interface RevokeSponsorshipOpSignerWire {
    accountId: PublicKeyWire;
    signerKey: SignerKeyWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID accountID;
 *         SignerKey signerKey;
 *     }
 * ```
 */
export declare class RevokeSponsorshipOpSigner extends XdrValue {
    readonly accountId: PublicKey;
    readonly signerKey: SignerKey;
    static readonly schema: XdrType<RevokeSponsorshipOpSignerWire>;
    constructor(input: {
        accountId: PublicKey;
        signerKey: SignerKey;
    });
    toXdrObject(): RevokeSponsorshipOpSignerWire;
    static fromXdrObject(wire: RevokeSponsorshipOpSignerWire): RevokeSponsorshipOpSigner;
}
