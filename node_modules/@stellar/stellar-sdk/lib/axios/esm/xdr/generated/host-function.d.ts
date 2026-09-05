import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { InvokeContractArgs, type InvokeContractArgsWire } from "./invoke-contract-args.js";
import { CreateContractArgs, type CreateContractArgsWire } from "./create-contract-args.js";
import { CreateContractArgsV2, type CreateContractArgsV2Wire } from "./create-contract-args-v2.js";
export type HostFunctionWire = {
    type: 0;
    invokeContract: InvokeContractArgsWire;
} | {
    type: 1;
    createContract: CreateContractArgsWire;
} | {
    type: 2;
    wasm: Uint8Array;
} | {
    type: 3;
    createContractV2: CreateContractArgsV2Wire;
};
export type HostFunctionVariantName = "hostFunctionTypeInvokeContract" | "hostFunctionTypeCreateContract" | "hostFunctionTypeUploadContractWasm" | "hostFunctionTypeCreateContractV2";
/**
 * ```xdr
 * union HostFunction switch (HostFunctionType type)
 * {
 * case HOST_FUNCTION_TYPE_INVOKE_CONTRACT:
 *     InvokeContractArgs invokeContract;
 * case HOST_FUNCTION_TYPE_CREATE_CONTRACT:
 *     CreateContractArgs createContract;
 * case HOST_FUNCTION_TYPE_UPLOAD_CONTRACT_WASM:
 *     opaque wasm<>;
 * case HOST_FUNCTION_TYPE_CREATE_CONTRACT_V2:
 *     CreateContractArgsV2 createContractV2;
 * };
 * ```
 */
declare abstract class HostFunctionBase extends XdrValue {
    abstract readonly type: HostFunctionVariantName;
    constructor();
    static readonly schema: XdrType<HostFunctionWire>;
    static hostFunctionTypeInvokeContract(invokeContract: InvokeContractArgs): HostFunctionInvokeContract;
    static hostFunctionTypeCreateContract(createContract: CreateContractArgs): HostFunctionCreateContract;
    static hostFunctionTypeUploadContractWasm(wasm: Uint8Array): HostFunctionUploadContractWasm;
    static hostFunctionTypeCreateContractV2(createContractV2: CreateContractArgsV2): HostFunctionCreateContractV2;
    static fromXdrObject(wire: HostFunctionWire): HostFunction;
    /**
     * Type guard narrowing an unknown value to a concrete HostFunction variant.
     * Use this instead of `instanceof HostFunction`: the exported `HostFunction` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `HostFunction.is(x)` narrows to the union.
     */
    static is(value: unknown): value is HostFunction;
    abstract toXdrObject(): HostFunctionWire;
}
export declare class HostFunctionInvokeContract extends HostFunctionBase {
    readonly type: "hostFunctionTypeInvokeContract";
    readonly invokeContract: InvokeContractArgs;
    constructor(invokeContract: InvokeContractArgs);
    get value(): InvokeContractArgs;
    toXdrObject(): Extract<HostFunctionWire, {
        type: 0;
    }>;
}
export declare class HostFunctionCreateContract extends HostFunctionBase {
    readonly type: "hostFunctionTypeCreateContract";
    readonly createContract: CreateContractArgs;
    constructor(createContract: CreateContractArgs);
    get value(): CreateContractArgs;
    toXdrObject(): Extract<HostFunctionWire, {
        type: 1;
    }>;
}
export declare class HostFunctionUploadContractWasm extends HostFunctionBase {
    readonly type: "hostFunctionTypeUploadContractWasm";
    readonly wasm: Uint8Array;
    constructor(wasm: Uint8Array);
    get value(): Uint8Array;
    toXdrObject(): Extract<HostFunctionWire, {
        type: 2;
    }>;
}
export declare class HostFunctionCreateContractV2 extends HostFunctionBase {
    readonly type: "hostFunctionTypeCreateContractV2";
    readonly createContractV2: CreateContractArgsV2;
    constructor(createContractV2: CreateContractArgsV2);
    get value(): CreateContractArgsV2;
    toXdrObject(): Extract<HostFunctionWire, {
        type: 3;
    }>;
}
export type HostFunction = HostFunctionInvokeContract | HostFunctionCreateContract | HostFunctionUploadContractWasm | HostFunctionCreateContractV2;
export declare const HostFunction: typeof HostFunctionBase;
export {};
