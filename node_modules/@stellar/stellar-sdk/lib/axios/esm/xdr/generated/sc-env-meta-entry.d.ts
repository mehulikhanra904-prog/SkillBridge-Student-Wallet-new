import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScEnvMetaEntryInterfaceVersion, type ScEnvMetaEntryInterfaceVersionWire } from "./sc-env-meta-entry-interface-version.js";
export type ScEnvMetaEntryWire = {
    kind: 0;
    interfaceVersion: ScEnvMetaEntryInterfaceVersionWire;
};
export type ScEnvMetaEntryVariantName = "scEnvMetaKindInterfaceVersion";
/**
 * ```xdr
 * union SCEnvMetaEntry switch (SCEnvMetaKind kind)
 * {
 * case SC_ENV_META_KIND_INTERFACE_VERSION:
 *     struct {
 *         uint32 protocol;
 *         uint32 preRelease;
 *     } interfaceVersion;
 * };
 * ```
 */
declare abstract class ScEnvMetaEntryBase extends XdrValue {
    abstract readonly type: ScEnvMetaEntryVariantName;
    constructor();
    static readonly schema: XdrType<ScEnvMetaEntryWire>;
    static scEnvMetaKindInterfaceVersion(interfaceVersion: ScEnvMetaEntryInterfaceVersion): ScEnvMetaEntryInterfaceVersionArm;
    static fromXdrObject(wire: ScEnvMetaEntryWire): ScEnvMetaEntry;
    /**
     * Type guard narrowing an unknown value to a concrete ScEnvMetaEntry variant.
     * Use this instead of `instanceof ScEnvMetaEntry`: the exported `ScEnvMetaEntry` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScEnvMetaEntry.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScEnvMetaEntry;
    abstract toXdrObject(): ScEnvMetaEntryWire;
}
export declare class ScEnvMetaEntryInterfaceVersionArm extends ScEnvMetaEntryBase {
    readonly type: "scEnvMetaKindInterfaceVersion";
    readonly interfaceVersion: ScEnvMetaEntryInterfaceVersion;
    constructor(interfaceVersion: ScEnvMetaEntryInterfaceVersion);
    get value(): ScEnvMetaEntryInterfaceVersion;
    toXdrObject(): Extract<ScEnvMetaEntryWire, {
        kind: 0;
    }>;
}
export type ScEnvMetaEntry = ScEnvMetaEntryInterfaceVersionArm;
export declare const ScEnvMetaEntry: typeof ScEnvMetaEntryBase;
export {};
