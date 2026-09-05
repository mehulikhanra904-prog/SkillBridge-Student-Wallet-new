import { ScSpecEntry, ScSpecEventV0, ScVal } from "../xdr/index.js";
import type { Spec } from "./spec.js";
/**
 * The result of successfully matching an emitted contract event against one
 * of the event specs ({@link ScSpecEventV0}) defined in a {@link Spec}.
 *
 * @see Spec.parseEvent
 */
export interface ParsedEvent {
    /** The name of the matched event (the event spec's declared name). */
    name: string;
    /**
     * All decoded event params, keyed by param name — both the
     * `topicList`-located params and the data-located ones. Once an event is
     * parsed, where a param was carried (topic vs data) no longer matters;
     * the topic list is just a way to mark which fields are indexed.
     */
    data: Record<string, any>;
}
/**
 * Gets all the SEP-48 event spec entries (`scSpecEntryEventV0`) out of a
 * contract's spec entries.
 *
 * @param entries - the contract's XDR spec entries
 * @returns all event entries
 * @hidden
 */
export declare function events(entries: ScSpecEntry[]): ScSpecEventV0[];
/**
 * Finds the event spec with the given name among a contract's event entries.
 * A contract may declare several events with the same name (e.g. composed
 * modules each emitting their own `transfer`); `occurrence` selects among
 * them, in declaration order.
 *
 * @param entries - the contract's XDR spec entries
 * @param name - the name of the event to find
 * @param occurrence - 0-based index among the events with that name
 * @returns the event spec, or `undefined` if the contract declares no event
 *          with that name (at that occurrence)
 * @throws if `occurrence` is not a non-negative integer
 * @hidden
 */
export declare function findEvent(entries: ScSpecEntry[], name: string, occurrence?: number): ScSpecEventV0 | undefined;
/**
 * Attempts to parse an emitted contract event (topics + data ScVals) against
 * the event specs (SEP-48) contained in a {@link Spec}.
 *
 * @param spec - the Spec instance to decode values with (for `scValToNative`)
 * @param entries - the contract's XDR spec entries
 * @param topics - the event's topics, as `ScVal[]` or base64 XDR strings
 * @param data - the event's data, as an `ScVal` or a base64 XDR string
 * @returns the parsed event, or `undefined` if no event spec matches
 *
 * Matching compares only the prefix topics and a minimum topic count, so if
 * two event specs share both (in particular, events with no prefix topics
 * match on arity alone), the first declared spec whose values decode
 * successfully wins.
 * @hidden
 */
export declare function parseEvent(spec: Spec, entries: ScSpecEntry[], topics: ScVal[] | string[], data: ScVal | string): ParsedEvent | undefined;
/**
 * Builds a `getEvents` topic filter (a single row of `Api.EventFilter.topics`)
 * for the named event: the event's prefix topics (base64-encoded `scvSymbol`s)
 * followed by one entry per topic-list param — either the base64-encoded
 * ScVal for a value supplied in `topicValues`, or the wildcard `"*"`.
 *
 * @param spec - the Spec instance to encode values with (for `nativeToScVal`)
 * @param entries - the contract's XDR spec entries
 * @param name - the name of the event
 * @param topicValues - (optional) native values for topic-list params, keyed by param name
 * @param occurrence - (optional) 0-based index among same-named events, for
 *        contracts that declare the same event name more than once
 * @returns a single topic filter row
 * @throws if no event with the given name (at the given occurrence) exists,
 *         or if `occurrence` is not a non-negative integer
 * @hidden
 */
export declare function eventTopicFilter(spec: Spec, entries: ScSpecEntry[], name: string, topicValues?: Record<string, any>, occurrence?: number): string[];
