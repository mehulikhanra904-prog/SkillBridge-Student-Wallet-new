/**
 * Assert that an XDR union value has the expected `type` discriminant, and if so narrow the type of the value to that variant.
 * @param value - the XDR union value to check
 * @param type - the expected type discriminant
 * @throws a `TypeError` if `value.type !== type`
 * @returns the same value, but with its type narrowed to the expected variant
 */
export declare function expectUnionVariant<U extends {
    readonly type: string;
}, K extends U["type"]>(value: U, type: K): Extract<U, {
    readonly type: K;
}>;
/**
 * Check if an XDR union value has a given `type` discriminant, and if so narrow
 * @param value - the XDR union value to check
 * @param type - the expected type discriminant
 * @returns `true` if `value.type === type`, and narrows the type of `value` to that variant; otherwise `false`
 */
export declare function isUnionVariant<U extends {
    readonly type: string;
}, K extends U["type"]>(value: U, type: K): value is Extract<U, {
    readonly type: K;
}>;
