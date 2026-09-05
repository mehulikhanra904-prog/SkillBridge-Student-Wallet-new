import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { InvokeContractArgs, type InvokeContractArgsWire } from "./invoke-contract-args.js";
import { CreateContractArgs, type CreateContractArgsWire } from "./create-contract-args.js";
import { CreateContractArgsV2, type CreateContractArgsV2Wire } from "./create-contract-args-v2.js";
export type SorobanAuthorizedFunctionWire = {
    type: 0;
    contractFn: InvokeContractArgsWire;
} | {
    type: 1;
    createContractHostFn: CreateContractArgsWire;
} | {
    type: 2;
    createContractV2HostFn: CreateContractArgsV2Wire;
};
export type SorobanAuthorizedFunctionVariantName = "sorobanAuthorizedFunctionTypeContractFn" | "sorobanAuthorizedFunctionTypeCreateContractHostFn" | "sorobanAuthorizedFunctionTypeCreateContractV2HostFn";
/**
 * ```xdr
 * union SorobanAuthorizedFunction switch (SorobanAuthorizedFunctionType type)
 * {
 * case SOROBAN_AUTHORIZED_FUNCTION_TYPE_CONTRACT_FN:
 *     InvokeContractArgs contractFn;
 * // This variant of auth payload for creating new contract instances
 * // doesn't allow specifying the constructor arguments, creating contracts
 * // with constructors that take arguments is only possible by authorizing
 * // `SOROBAN_AUTHORIZED_FUNCTION_TYPE_CREATE_CONTRACT_V2_HOST_FN`
 * // (protocol 22+).
 * case SOROBAN_AUTHORIZED_FUNCTION_TYPE_CREATE_CONTRACT_HOST_FN:
 *     CreateContractArgs createContractHostFn;
 * // This variant of auth payload for creating new contract instances
 * // is only accepted in and after protocol 22. It allows authorizing the
 * // contract constructor arguments.
 * case SOROBAN_AUTHORIZED_FUNCTION_TYPE_CREATE_CONTRACT_V2_HOST_FN:
 *     CreateContractArgsV2 createContractV2HostFn;
 * };
 * ```
 */
declare abstract class SorobanAuthorizedFunctionBase extends XdrValue {
    abstract readonly type: SorobanAuthorizedFunctionVariantName;
    constructor();
    static readonly schema: XdrType<SorobanAuthorizedFunctionWire>;
    static sorobanAuthorizedFunctionTypeContractFn(contractFn: InvokeContractArgs): SorobanAuthorizedFunctionContractFn;
    static sorobanAuthorizedFunctionTypeCreateContractHostFn(createContractHostFn: CreateContractArgs): SorobanAuthorizedFunctionCreateContractHostFn;
    static sorobanAuthorizedFunctionTypeCreateContractV2HostFn(createContractV2HostFn: CreateContractArgsV2): SorobanAuthorizedFunctionCreateContractV2HostFn;
    static fromXdrObject(wire: SorobanAuthorizedFunctionWire): SorobanAuthorizedFunction;
    /**
     * Type guard narrowing an unknown value to a concrete SorobanAuthorizedFunction variant.
     * Use this instead of `instanceof SorobanAuthorizedFunction`: the exported `SorobanAuthorizedFunction` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SorobanAuthorizedFunction.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SorobanAuthorizedFunction;
    abstract toXdrObject(): SorobanAuthorizedFunctionWire;
}
export declare class SorobanAuthorizedFunctionContractFn extends SorobanAuthorizedFunctionBase {
    readonly type: "sorobanAuthorizedFunctionTypeContractFn";
    readonly contractFn: InvokeContractArgs;
    constructor(contractFn: InvokeContractArgs);
    get value(): InvokeContractArgs;
    toXdrObject(): Extract<SorobanAuthorizedFunctionWire, {
        type: 0;
    }>;
}
export declare class SorobanAuthorizedFunctionCreateContractHostFn extends SorobanAuthorizedFunctionBase {
    readonly type: "sorobanAuthorizedFunctionTypeCreateContractHostFn";
    readonly createContractHostFn: CreateContractArgs;
    constructor(createContractHostFn: CreateContractArgs);
    get value(): CreateContractArgs;
    toXdrObject(): Extract<SorobanAuthorizedFunctionWire, {
        type: 1;
    }>;
}
export declare class SorobanAuthorizedFunctionCreateContractV2HostFn extends SorobanAuthorizedFunctionBase {
    readonly type: "sorobanAuthorizedFunctionTypeCreateContractV2HostFn";
    readonly createContractV2HostFn: CreateContractArgsV2;
    constructor(createContractV2HostFn: CreateContractArgsV2);
    get value(): CreateContractArgsV2;
    toXdrObject(): Extract<SorobanAuthorizedFunctionWire, {
        type: 2;
    }>;
}
export type SorobanAuthorizedFunction = SorobanAuthorizedFunctionContractFn | SorobanAuthorizedFunctionCreateContractHostFn | SorobanAuthorizedFunctionCreateContractV2HostFn;
export declare const SorobanAuthorizedFunction: typeof SorobanAuthorizedFunctionBase;
export {};
