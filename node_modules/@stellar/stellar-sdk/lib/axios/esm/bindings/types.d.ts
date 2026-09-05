import { Spec } from "../contract/index.js";
/**
 * Interface for struct fields
 */
export interface StructField {
    doc: string;
    name: string;
    type: string;
}
/**
 * Interface for union cases
 */
export interface UnionCase {
    doc: string;
    name: string;
    types: string[];
}
/**
 * Interface for enum cases
 */
export interface EnumCase {
    doc: string;
    name: string;
    value: number;
}
/**
 * Generates TypeScript type definitions from Stellar contract specs
 */
export declare class TypeGenerator {
    private spec;
    private eventInterfaceNames;
    constructor(spec: Spec);
    /**
     * Generate all TypeScript type definitions
     */
    generate(): string;
    /**
     * Generate TypeScript for a single spec entry
     */
    private generateEntry;
    private generateImports;
    /**
     * Generate TypeScript interface for a struct
     */
    private generateStruct;
    /**
     * Generate TypeScript union type
     */
    private generateUnion;
    /**
     * Generate TypeScript enum
     */
    private generateEnum;
    /**
     * Generate TypeScript error enum
     */
    private generateErrorEnum;
    /**
     * Generate union case
     */
    private generateUnionCase;
    /**
     * Generate enum case
     */
    private generateEnumCase;
    /**
     * Compute the exported TS interface name for an event, e.g. "transfer"
     * becomes "TransferEvent". Resolved (and disambiguated if necessary) via
     * {@link resolveEventInterfaceNames}, so every call site agrees.
     */
    private eventInterfaceName;
    /**
     * The resolved (possibly disambiguated) interface name of every event in
     * the spec, in declaration order. Exposed so callers (e.g. the bindings
     * generator's diagnostics) can report renames and duplicates.
     */
    eventInterfaceNamesInOrder(): string[];
    /**
     * True if the given event's resolved interface name differs from its
     * preferred (unsuffixed) form, i.e. it was disambiguated away from a
     * collision.
     */
    private eventInterfaceNameWasRenamed;
    /**
     * The name-normalization used for event interface names (and UDT type
     * names) is not injective — e.g. events "FooBar" and "foo_bar" both
     * produce the interface name "FooBarEvent", a contract may declare
     * several events with the very same name (composed modules each emitting
     * their own "transfer"), and an event can just as easily collide with a
     * UDT (struct/union/enum) of the same generated name. Since UDT/function
     * names are load-bearing (referenced directly in signatures) and
     * event-derived names are already synthetic, UDT names always win: they
     * are reserved first, in spec-entry order. Events are then resolved in
     * spec-entry order, appending the smallest integer 2 or greater needed to
     * make the name unique (and reserving whatever name results, so later
     * events see it too). This is deterministic for a given spec.
     */
    private resolveEventInterfaceNames;
    /**
     * Generate TypeScript interface for a Soroban contract event
     */
    private generateEvent;
    /**
     * Generate the discriminated union of all contract events, if the spec defines any.
     */
    private generateContractEventUnion;
    private generateTupleStruct;
}
