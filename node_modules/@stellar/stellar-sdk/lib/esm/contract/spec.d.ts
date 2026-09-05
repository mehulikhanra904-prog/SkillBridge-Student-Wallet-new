import type { JSONSchema7 } from "json-schema";
import { type ParsedEvent } from "./event_spec.js";
import { ScSpecEntry, ScSpecEventV0, ScSpecFunctionV0, ScSpecTypeDef, ScSpecUdtErrorEnumCaseV0, ScVal } from "../xdr/index.js";
export type { ParsedEvent };
export interface Union<T> {
    tag: string;
    values?: T;
}
/**
 * Provides a ContractSpec class which can contains the XDR types defined by the contract.
 * This allows the class to be used to convert between native and raw `ScVal`s.
 *
 * Constructs a new ContractSpec from an array of XDR spec entries.
 *
 * @param entries - the XDR spec entries
 * @throws if entries is invalid
 *
 * @example
 * ```ts
 * const specEntries = [...]; // XDR spec entries of a smart contract
 * const contractSpec = new ContractSpec(specEntries);
 *
 * // Convert native value to ScVal
 * const args = {
 *   arg1: 'value1',
 *   arg2: 1234
 * };
 * const scArgs = contractSpec.funcArgsToScVals('funcName', args);
 *
 * // Call contract
 * const resultScv = await callContract(contractId, 'funcName', scArgs);
 *
 * // Convert result ScVal back to native value
 * const result = contractSpec.funcResToNative('funcName', resultScv);
 *
 * console.log(result); // {success: true}
 * ```
 */
export declare class Spec {
    /**
     * The XDR spec entries.
     */
    entries: ScSpecEntry[];
    /**
     * Generates a Spec instance from the contract's wasm binary.
     *
     * @param wasm - The contract's wasm binary as a Uint8Array.
     * @returns A Promise that resolves to a Spec instance.
     * @throws If the contract spec cannot be obtained from the provided wasm binary.
     */
    static fromWasm(wasm: Uint8Array): Spec;
    /**
     * Generates a Spec instance from contract specs in any of the following forms:
     * - An XDR encoded stream of ScSpecEntry entries, the format of the spec
     *   stored inside Wasm files.
     * - A base64 XDR encoded stream of ScSpecEntry entries.
     * - An array of ScSpecEntry.
     * - An array of base64 XDR encoded ScSpecEntry.
     *
     * @returns A Promise that resolves to a Client instance.
     * @throws If the contract spec cannot be obtained from the provided wasm binary.
     */
    constructor(entries: Uint8Array | string | ScSpecEntry[] | string[]);
    /**
     * Gets the XDR functions from the spec.
     * @returns all contract functions
     */
    funcs(): ScSpecFunctionV0[];
    /**
     * Gets the XDR function spec for the given function name.
     *
     * @param name - the name of the function
     * @returns the function spec
     *
     * @throws if no function with the given name exists
     */
    getFunc(name: string): ScSpecFunctionV0;
    /**
     * Converts native JS arguments to ScVals for calling a contract function.
     *
     * @param name - the name of the function
     * @param args - the arguments object
     * @returns the converted arguments
     *
     * @throws if argument is missing or incorrect type
     *
     * @example
     * ```ts
     * const args = {
     *   arg1: 'value1',
     *   arg2: 1234
     * };
     * const scArgs = contractSpec.funcArgsToScVals('funcName', args);
     * ```
     */
    funcArgsToScVals(name: string, args: object): ScVal[];
    /**
     * Converts the result ScVal of a function call to a native JS value.
     *
     * @param name - the name of the function
     * @param val_or_base64 - the result ScVal or base64 encoded string
     * @returns the converted native value
     *
     * @throws if return type mismatch or invalid input
     *
     * @example
     * ```ts
     * const resultScv = 'AAA=='; // Base64 encoded ScVal
     * const result = contractSpec.funcResToNative('funcName', resultScv);
     * ```
     */
    funcResToNative(name: string, val_or_base64: ScVal | string): any;
    /**
     * Finds the XDR spec entry for the given name.
     *
     * @param name - the name to find
     * @returns the entry
     *
     * @throws if no entry with the given name exists
     */
    findEntry(name: string): ScSpecEntry;
    /**
     * Converts a native JS value to an ScVal based on the given type.
     *
     * @param val - the native JS value
     * @param ty - the expected type
     * @returns the converted ScVal
     *
     * @throws if value cannot be converted to the given type
     */
    nativeToScVal(val: any, ty: ScSpecTypeDef): ScVal;
    private nativeToUdt;
    private nativeToUnion;
    private nativeToStruct;
    private nativeToEnum;
    /**
     * Converts an base64 encoded ScVal back to a native JS value based on the given type.
     *
     * @param scv - the base64 encoded ScVal
     * @param typeDef - the expected type
     * @returns the converted native JS value
     *
     * @throws if ScVal cannot be converted to the given type
     */
    scValStrToNative<T>(scv: string, typeDef: ScSpecTypeDef): T;
    /**
     * Converts an ScVal back to a native JS value based on the given type.
     *
     * @param scv - the ScVal
     * @param typeDef - the expected type
     * @returns the converted native JS value
     *
     * @throws if ScVal cannot be converted to the given type
     */
    scValToNative<T>(scv: ScVal, typeDef: ScSpecTypeDef): T;
    private scValUdtToNative;
    private unionToNative;
    private structToNative;
    private enumToNative;
    /**
     * Gets the XDR error cases from the spec.
     *
     * @returns all contract functions
     *
     */
    errorCases(): ScSpecUdtErrorEnumCaseV0[];
    /**
     * Gets the SEP-48 event spec entries from the spec.
     *
     * @returns all contract events
     */
    events(): ScSpecEventV0[];
    /**
     * Finds the XDR event spec for the given event name.
     *
     * Unlike {@link Spec.findEntry}, a missing event is not an error: this
     * returns `undefined` so callers can probe a contract for an event without
     * wrapping the call in a `try`.
     *
     * @param name - the name of the event
     * @param occurrence - (optional) 0-based index among same-named events, in
     *        declaration order, for contracts that declare the same event name
     *        more than once (defaults to the first)
     * @returns the event spec, or `undefined` if the contract declares no event
     *          with that name (at that occurrence)
     *
     * @throws if `occurrence` is not a non-negative integer
     *
     * @example
     * ```ts
     * if (contractSpec.findEvent("transfer")) {
     *   // the contract declares a "transfer" event
     * }
     * ```
     */
    findEvent(name: string, occurrence?: number): ScSpecEventV0 | undefined;
    /**
     * Attempts to parse an emitted contract event (its topics and data) using
     * the event specs (SEP-48) declared in this contract's spec.
     *
     * An event's topics are `[...prefixTopics, ...topicListParamValues]` (in
     * that order), and its data is decoded according to the event's
     * `dataFormat` (`singleValue`, `vec`, or `map`).
     *
     * @param topics - the event's topics, as `ScVal[]` or base64 XDR strings
     * @param data - the event's data, as an `ScVal` or a base64 XDR string
     * @returns the parsed event (its name plus all decoded params — topic-list
     *          and data-located alike — merged into `data`), or `undefined` if
     *          no event spec matches (e.g. when filtering a mixed stream of
     *          events from multiple contracts/specs)
     *
     * Note that matching compares only the prefix topics and the topic count;
     * if two event specs share both (in particular, events with no prefix
     * topics match on arity alone), the first declared spec whose values
     * decode successfully wins.
     *
     * @example
     * ```ts
     * const parsed = contractSpec.parseEvent(response.topic, response.value);
     * if (parsed) {
     *   console.log(parsed.name, parsed.data);
     * }
     * ```
     */
    parseEvent(topics: ScVal[] | string[], data: ScVal | string): ParsedEvent | undefined;
    /**
     * Builds a `getEvents` topic filter (a single row of `Api.EventFilter.topics`)
     * for the named event: base64-encoded `scvSymbol`s for the event's prefix
     * topics, followed by one entry per topic-list param — either the
     * base64-encoded ScVal for a value supplied in `topicValues`, or the
     * wildcard `"*"`.
     *
     * @param name - the name of the event
     * @param topicValues - (optional) native values for topic-list params, keyed by param name
     * @param occurrence - (optional) 0-based index among same-named events, in
     *        declaration order, for contracts that declare the same event name
     *        more than once (defaults to the first)
     * @returns a single topic filter row
     *
     * @throws if no event with the given name (at the given occurrence) exists,
     *         or if `occurrence` is not a non-negative integer
     *
     * @example
     * ```ts
     * const topics = contractSpec.eventTopicFilter('transfer', { to: someAddress });
     * ```
     */
    eventTopicFilter(name: string, topicValues?: Record<string, any>, occurrence?: number): string[];
    /**
     * Converts the contract spec to a JSON schema.
     *
     * If `funcName` is provided, the schema will be a reference to the function schema.
     *
     * @param funcName - (optional) the name of the function to convert
     * @returns the converted JSON schema
     *
     * @throws if the contract spec is invalid
     */
    jsonSchema(funcName?: string): JSONSchema7;
}
