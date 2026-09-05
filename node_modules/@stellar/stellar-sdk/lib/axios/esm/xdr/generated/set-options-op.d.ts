import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Signer, type SignerWire } from "./signer.js";
export interface SetOptionsOpWire {
    inflationDest: PublicKeyWire | null;
    clearFlags: number | null;
    setFlags: number | null;
    masterWeight: number | null;
    lowThreshold: number | null;
    medThreshold: number | null;
    highThreshold: number | null;
    homeDomain: XdrString | null;
    signer: SignerWire | null;
}
/**
 * ```xdr
 * struct SetOptionsOp
 * {
 *     AccountID* inflationDest; // sets the inflation destination
 *
 *     uint32* clearFlags; // which flags to clear
 *     uint32* setFlags;   // which flags to set
 *
 *     // account threshold manipulation
 *     uint32* masterWeight; // weight of the master account
 *     uint32* lowThreshold;
 *     uint32* medThreshold;
 *     uint32* highThreshold;
 *
 *     string32* homeDomain; // sets the home domain
 *
 *     // Add, update or remove a signer for the account
 *     // signer is deleted if the weight is 0
 *     Signer* signer;
 * };
 * ```
 */
export declare class SetOptionsOp extends XdrValue {
    readonly inflationDest: PublicKey | null;
    readonly clearFlags: number | null;
    readonly setFlags: number | null;
    readonly masterWeight: number | null;
    readonly lowThreshold: number | null;
    readonly medThreshold: number | null;
    readonly highThreshold: number | null;
    readonly homeDomain: XdrString | null;
    readonly signer: Signer | null;
    static readonly schema: XdrType<SetOptionsOpWire>;
    constructor(input: {
        inflationDest: PublicKey | null;
        clearFlags: number | null;
        setFlags: number | null;
        masterWeight: number | null;
        lowThreshold: number | null;
        medThreshold: number | null;
        highThreshold: number | null;
        homeDomain: XdrString | string | Uint8Array | null;
        signer: Signer | null;
    });
    toXdrObject(): SetOptionsOpWire;
    static fromXdrObject(wire: SetOptionsOpWire): SetOptionsOp;
}
