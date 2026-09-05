import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimAtom, type ClaimAtomWire } from "./claim-atom.js";
import { SimplePaymentResult, type SimplePaymentResultWire } from "./simple-payment-result.js";
export interface PathPaymentStrictReceiveResultSuccessWire {
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
export declare class PathPaymentStrictReceiveResultSuccess extends XdrValue {
    readonly offers: ClaimAtom[];
    readonly last: SimplePaymentResult;
    static readonly schema: XdrType<PathPaymentStrictReceiveResultSuccessWire>;
    constructor(input: {
        offers: ClaimAtom[];
        last: SimplePaymentResult;
    });
    toXdrObject(): PathPaymentStrictReceiveResultSuccessWire;
    static fromXdrObject(wire: PathPaymentStrictReceiveResultSuccessWire): PathPaymentStrictReceiveResultSuccess;
}
