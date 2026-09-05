import { EnumValue } from "../values/enum-value.js";
export type ScEnvMetaKindWire = number;
export type ScEnvMetaKindName = "scEnvMetaKindInterfaceVersion";
/**
 * ```xdr
 * enum SCEnvMetaKind
 * {
 *     SC_ENV_META_KIND_INTERFACE_VERSION = 0
 * };
 * ```
 */
export declare class ScEnvMetaKind extends EnumValue<ScEnvMetaKindName> {
    static readonly scEnvMetaKindInterfaceVersion: ScEnvMetaKind;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ScEnvMetaKind", {
        readonly scEnvMetaKindInterfaceVersion: 0;
    }>;
    static fromValue(value: number): ScEnvMetaKind;
    static fromName(name: ScEnvMetaKindName): ScEnvMetaKind;
    static fromXdrObject(wire: number): ScEnvMetaKind;
}
