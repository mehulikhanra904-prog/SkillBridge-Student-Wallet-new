import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ScEnvMetaEntryInterfaceVersionWire {
    protocol: number;
    preRelease: number;
}
/**
 * ```xdr
 * struct {
 *         uint32 protocol;
 *         uint32 preRelease;
 *     }
 * ```
 */
export declare class ScEnvMetaEntryInterfaceVersion extends XdrValue {
    readonly protocol: number;
    readonly preRelease: number;
    static readonly schema: XdrType<ScEnvMetaEntryInterfaceVersionWire>;
    constructor(input: {
        protocol: number;
        preRelease: number;
    });
    toXdrObject(): ScEnvMetaEntryInterfaceVersionWire;
    static fromXdrObject(wire: ScEnvMetaEntryInterfaceVersionWire): ScEnvMetaEntryInterfaceVersion;
}
