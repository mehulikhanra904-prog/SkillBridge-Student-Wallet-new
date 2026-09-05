import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpStatement, type ScpStatementWire } from "./scp-statement.js";
import { Signature, type SignatureWire } from "./signature.js";
export interface ScpEnvelopeWire {
    statement: ScpStatementWire;
    signature: SignatureWire;
}
/**
 * ```xdr
 * struct SCPEnvelope
 * {
 *     SCPStatement statement;
 *     Signature signature;
 * };
 * ```
 */
export declare class ScpEnvelope extends XdrValue {
    readonly statement: ScpStatement;
    readonly signature: Signature;
    static readonly schema: XdrType<ScpEnvelopeWire>;
    constructor(input: {
        statement: ScpStatement;
        signature: Signature | Uint8Array | string;
    });
    toXdrObject(): ScpEnvelopeWire;
    static fromXdrObject(wire: ScpEnvelopeWire): ScpEnvelope;
}
