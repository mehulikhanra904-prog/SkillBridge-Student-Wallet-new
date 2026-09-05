import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanAddressCredentials, type SorobanAddressCredentialsWire } from "./soroban-address-credentials.js";
import { SorobanAddressCredentialsWithDelegates, type SorobanAddressCredentialsWithDelegatesWire } from "./soroban-address-credentials-with-delegates.js";
export type SorobanCredentialsWire = {
    type: 0;
} | {
    type: 1;
    address: SorobanAddressCredentialsWire;
} | {
    type: 2;
    addressV2: SorobanAddressCredentialsWire;
} | {
    type: 3;
    addressWithDelegates: SorobanAddressCredentialsWithDelegatesWire;
};
export type SorobanCredentialsVariantName = "sorobanCredentialsSourceAccount" | "sorobanCredentialsAddress" | "sorobanCredentialsAddressV2" | "sorobanCredentialsAddressWithDelegates";
/**
 * ```xdr
 * union SorobanCredentials switch (SorobanCredentialsType type)
 * {
 * case SOROBAN_CREDENTIALS_SOURCE_ACCOUNT:
 *     void;
 * case SOROBAN_CREDENTIALS_ADDRESS:
 *     SorobanAddressCredentials address;
 * case SOROBAN_CREDENTIALS_ADDRESS_V2:
 *     SorobanAddressCredentials addressV2;
 * case SOROBAN_CREDENTIALS_ADDRESS_WITH_DELEGATES:
 *     SorobanAddressCredentialsWithDelegates addressWithDelegates;
 * };
 * ```
 */
declare abstract class SorobanCredentialsBase extends XdrValue {
    abstract readonly type: SorobanCredentialsVariantName;
    constructor();
    static readonly schema: XdrType<SorobanCredentialsWire>;
    static sorobanCredentialsSourceAccount(): SorobanCredentialsSourceAccount;
    static sorobanCredentialsAddress(address: SorobanAddressCredentials): SorobanCredentialsAddress;
    static sorobanCredentialsAddressV2(addressV2: SorobanAddressCredentials): SorobanCredentialsAddressV2;
    static sorobanCredentialsAddressWithDelegates(addressWithDelegates: SorobanAddressCredentialsWithDelegates): SorobanCredentialsAddressWithDelegates;
    static fromXdrObject(wire: SorobanCredentialsWire): SorobanCredentials;
    /**
     * Type guard narrowing an unknown value to a concrete SorobanCredentials variant.
     * Use this instead of `instanceof SorobanCredentials`: the exported `SorobanCredentials` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SorobanCredentials.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SorobanCredentials;
    abstract toXdrObject(): SorobanCredentialsWire;
}
export declare class SorobanCredentialsSourceAccount extends SorobanCredentialsBase {
    readonly type: "sorobanCredentialsSourceAccount";
    get value(): null;
    toXdrObject(): Extract<SorobanCredentialsWire, {
        type: 0;
    }>;
}
export declare class SorobanCredentialsAddress extends SorobanCredentialsBase {
    readonly type: "sorobanCredentialsAddress";
    readonly address: SorobanAddressCredentials;
    constructor(address: SorobanAddressCredentials);
    get value(): SorobanAddressCredentials;
    toXdrObject(): Extract<SorobanCredentialsWire, {
        type: 1;
    }>;
}
export declare class SorobanCredentialsAddressV2 extends SorobanCredentialsBase {
    readonly type: "sorobanCredentialsAddressV2";
    readonly addressV2: SorobanAddressCredentials;
    constructor(addressV2: SorobanAddressCredentials);
    get value(): SorobanAddressCredentials;
    toXdrObject(): Extract<SorobanCredentialsWire, {
        type: 2;
    }>;
}
export declare class SorobanCredentialsAddressWithDelegates extends SorobanCredentialsBase {
    readonly type: "sorobanCredentialsAddressWithDelegates";
    readonly addressWithDelegates: SorobanAddressCredentialsWithDelegates;
    constructor(addressWithDelegates: SorobanAddressCredentialsWithDelegates);
    get value(): SorobanAddressCredentialsWithDelegates;
    toXdrObject(): Extract<SorobanCredentialsWire, {
        type: 3;
    }>;
}
export type SorobanCredentials = SorobanCredentialsSourceAccount | SorobanCredentialsAddress | SorobanCredentialsAddressV2 | SorobanCredentialsAddressWithDelegates;
export declare const SorobanCredentials: typeof SorobanCredentialsBase;
export {};
