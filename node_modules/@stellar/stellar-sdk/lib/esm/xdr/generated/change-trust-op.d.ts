import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ChangeTrustAsset, type ChangeTrustAssetWire } from "./change-trust-asset.js";
export interface ChangeTrustOpWire {
    line: ChangeTrustAssetWire;
    limit: bigint;
}
/**
 * ```xdr
 * struct ChangeTrustOp
 * {
 *     ChangeTrustAsset line;
 *
 *     // if limit is set to 0, deletes the trust line
 *     int64 limit;
 * };
 * ```
 */
export declare class ChangeTrustOp extends XdrValue {
    readonly line: ChangeTrustAsset;
    readonly limit: bigint;
    static readonly schema: XdrType<ChangeTrustOpWire>;
    constructor(input: {
        line: ChangeTrustAsset;
        limit: bigint;
    });
    toXdrObject(): ChangeTrustOpWire;
    static fromXdrObject(wire: ChangeTrustOpWire): ChangeTrustOp;
}
