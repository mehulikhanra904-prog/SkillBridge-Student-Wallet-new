import { EnumValue } from "../values/enum-value.js";
export type IpAddrTypeWire = number;
export type IpAddrTypeName = "iPv4" | "iPv6";
/**
 * ```xdr
 * enum IPAddrType
 * {
 *     IPv4 = 0,
 *     IPv6 = 1
 * };
 * ```
 */
export declare class IpAddrType extends EnumValue<IpAddrTypeName> {
    static readonly iPv4: IpAddrType;
    static readonly iPv6: IpAddrType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"IpAddrType", {
        readonly iPv4: 0;
        readonly iPv6: 1;
    }>;
    static fromValue(value: number): IpAddrType;
    static fromName(name: IpAddrTypeName): IpAddrType;
    static fromXdrObject(wire: number): IpAddrType;
}
