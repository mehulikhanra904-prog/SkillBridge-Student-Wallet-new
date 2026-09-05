import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimAtom, type ClaimAtomWire } from "./claim-atom.js";
import { SimplePaymentResult, type SimplePaymentResultWire } from "./simple-payment-result.js";
export interface PathPaymentStrictSendResultSuccessWire {
    offers: ClaimAtomWire[];
    last: SimplePaymentResultWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         ClaimAtom offers<>;
 *         SimplePaymentResult last;
 *     }
 * ```
 */
export declare class PathPaymentStrictSendResultSuccess extends XdrValue {
    readonly offers: ClaimAtom[];
    readonly last: SimplePaymentResult;
    static readonly schema: XdrType<PathPaymentStrictSendResultSuccessWire>;
    constructor(input: {
        offers: ClaimAtom[];
        last: SimplePaymentResult;
    });
    toXdrObject(): PathPaymentStrictSendResultSuccessWire;
    static fromXdrObject(wire: PathPaymentStrictSendResultSuccessWire): PathPaymentStrictSendResultSuccess;
}
