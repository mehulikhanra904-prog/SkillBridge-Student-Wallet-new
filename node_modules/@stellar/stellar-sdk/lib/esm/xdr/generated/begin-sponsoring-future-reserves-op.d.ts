import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface BeginSponsoringFutureReservesOpWire {
    sponsoredId: PublicKeyWire;
}
/**
 * ```xdr
 * struct BeginSponsoringFutureReservesOp
 * {
 *     AccountID sponsoredID;
 * };
 * ```
 */
export declare class BeginSponsoringFutureReservesOp extends XdrValue {
    readonly sponsoredId: PublicKey;
    static readonly schema: XdrType<BeginSponsoringFutureReservesOpWire>;
    constructor(input: {
        sponsoredId: PublicKey;
    });
    toXdrObject(): BeginSponsoringFutureReservesOpWire;
    static fromXdrObject(wire: BeginSponsoringFutureReservesOpWire): BeginSponsoringFutureReservesOp;
}
