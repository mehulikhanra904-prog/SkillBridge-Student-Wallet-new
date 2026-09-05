import { EnumValue } from "../values/enum-value.js";
export type PaymentResultCodeWire = number;
export type PaymentResultCodeName = "paymentSuccess" | "paymentMalformed" | "paymentUnderfunded" | "paymentSrcNoTrust" | "paymentSrcNotAuthorized" | "paymentNoDestination" | "paymentNoTrust" | "paymentNotAuthorized" | "paymentLineFull" | "paymentNoIssuer";
/**
 * ```xdr
 * enum PaymentResultCode
 * {
 *     // codes considered as "success" for the operation
 *     PAYMENT_SUCCESS = 0, // payment successfully completed
 *
 *     // codes considered as "failure" for the operation
 *     PAYMENT_MALFORMED = -1,          // bad input
 *     PAYMENT_UNDERFUNDED = -2,        // not enough funds in source account
 *     PAYMENT_SRC_NO_TRUST = -3,       // no trust line on source account
 *     PAYMENT_SRC_NOT_AUTHORIZED = -4, // source not authorized to transfer
 *     PAYMENT_NO_DESTINATION = -5,     // destination account does not exist
 *     PAYMENT_NO_TRUST = -6,       // destination missing a trust line for asset
 *     PAYMENT_NOT_AUTHORIZED = -7, // destination not authorized to hold asset
 *     PAYMENT_LINE_FULL = -8,      // destination would go above their limit
 *     PAYMENT_NO_ISSUER = -9       // missing issuer on asset
 * };
 * ```
 */
export declare class PaymentResultCode extends EnumValue<PaymentResultCodeName> {
    static readonly paymentSuccess: PaymentResultCode;
    static readonly paymentMalformed: PaymentResultCode;
    static readonly paymentUnderfunded: PaymentResultCode;
    static readonly paymentSrcNoTrust: PaymentResultCode;
    static readonly paymentSrcNotAuthorized: PaymentResultCode;
    static readonly paymentNoDestination: PaymentResultCode;
    static readonly paymentNoTrust: PaymentResultCode;
    static readonly paymentNotAuthorized: PaymentResultCode;
    static readonly paymentLineFull: PaymentResultCode;
    static readonly paymentNoIssuer: PaymentResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly paymentSuccess: 0;
        readonly paymentMalformed: -1;
        readonly paymentUnderfunded: -2;
        readonly paymentSrcNoTrust: -3;
        readonly paymentSrcNotAuthorized: -4;
        readonly paymentNoDestination: -5;
        readonly paymentNoTrust: -6;
        readonly paymentNotAuthorized: -7;
        readonly paymentLineFull: -8;
        readonly paymentNoIssuer: -9;
    }>> & {
        readonly kind: "enum";
        readonly name: "PaymentResultCode";
        readonly nameByValue: ReadonlyMap<number, "paymentSuccess" | "paymentMalformed" | "paymentUnderfunded" | "paymentSrcNoTrust" | "paymentSrcNotAuthorized" | "paymentNoDestination" | "paymentNoTrust" | "paymentNotAuthorized" | "paymentLineFull" | "paymentNoIssuer">;
    } & {
        readonly paymentSuccess: 0;
        readonly paymentMalformed: -1;
        readonly paymentUnderfunded: -2;
        readonly paymentSrcNoTrust: -3;
        readonly paymentSrcNotAuthorized: -4;
        readonly paymentNoDestination: -5;
        readonly paymentNoTrust: -6;
        readonly paymentNotAuthorized: -7;
        readonly paymentLineFull: -8;
        readonly paymentNoIssuer: -9;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): PaymentResultCode;
    static fromName(name: PaymentResultCodeName): PaymentResultCode;
    static fromXdrObject(wire: number): PaymentResultCode;
}
