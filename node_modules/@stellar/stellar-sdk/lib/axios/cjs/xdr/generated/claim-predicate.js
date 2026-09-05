'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimPredicateType = require('./claim-predicate-type.js');

class ClaimPredicateBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ClaimPredicateBase) {
      throw new TypeError(
        "new xdr.ClaimPredicate(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimPredicate.claimPredicateUnconditional() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ClaimPredicate",
    {
      switchOn: claimPredicateType.ClaimPredicateType.schema,
      cases: [
        jsXdr.case("claimPredicateUnconditional", 0, jsXdr.void()),
        jsXdr.case(
          "claimPredicateAnd",
          1,
          jsXdr.field(
            "andPredicates",
            jsXdr.array(
              jsXdr.lazy(() => ClaimPredicate.schema),
              2
            )
          )
        ),
        jsXdr.case(
          "claimPredicateOr",
          2,
          jsXdr.field(
            "orPredicates",
            jsXdr.array(
              jsXdr.lazy(() => ClaimPredicate.schema),
              2
            )
          )
        ),
        jsXdr.case(
          "claimPredicateNot",
          3,
          jsXdr.field("notPredicate", jsXdr.option(jsXdr.lazy(() => ClaimPredicate.schema)))
        ),
        jsXdr.case(
          "claimPredicateBeforeAbsoluteTime",
          4,
          jsXdr.field("absBefore", jsXdr.int64())
        ),
        jsXdr.case(
          "claimPredicateBeforeRelativeTime",
          5,
          jsXdr.field("relBefore", jsXdr.int64())
        )
      ]
    }
  );
  static claimPredicateUnconditional() {
    return new ClaimPredicateUnconditional();
  }
  static claimPredicateAnd(andPredicates) {
    return new ClaimPredicateAnd(andPredicates);
  }
  static claimPredicateOr(orPredicates) {
    return new ClaimPredicateOr(orPredicates);
  }
  static claimPredicateNot(notPredicate) {
    return new ClaimPredicateNot(notPredicate);
  }
  static claimPredicateBeforeAbsoluteTime(absBefore) {
    return new ClaimPredicateBeforeAbsoluteTime(absBefore);
  }
  static claimPredicateBeforeRelativeTime(relBefore) {
    return new ClaimPredicateBeforeRelativeTime(relBefore);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ClaimPredicateUnconditional();
      case 1:
        return new ClaimPredicateAnd(
          wire.andPredicates.map((w) => ClaimPredicate.fromXdrObject(w))
        );
      case 2:
        return new ClaimPredicateOr(
          wire.orPredicates.map((w) => ClaimPredicate.fromXdrObject(w))
        );
      case 3:
        return new ClaimPredicateNot(
          wire.notPredicate === null ? null : ClaimPredicate.fromXdrObject(wire.notPredicate)
        );
      case 4:
        return new ClaimPredicateBeforeAbsoluteTime(wire.absBefore);
      case 5:
        return new ClaimPredicateBeforeRelativeTime(wire.relBefore);
    }
    throw new jsXdr.XdrError(
      `ClaimPredicate: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClaimPredicate variant.
   * Use this instead of `instanceof ClaimPredicate`: the exported `ClaimPredicate` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClaimPredicate.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClaimPredicateBase;
  }
}
class ClaimPredicateUnconditional extends ClaimPredicateBase {
  type = "claimPredicateUnconditional";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class ClaimPredicateAnd extends ClaimPredicateBase {
  type = "claimPredicateAnd";
  andPredicates;
  constructor(andPredicates) {
    super();
    this.andPredicates = andPredicates;
  }
  get value() {
    return this.andPredicates;
  }
  toXdrObject() {
    return {
      type: 1,
      andPredicates: this.andPredicates.map((v) => v.toXdrObject())
    };
  }
}
class ClaimPredicateOr extends ClaimPredicateBase {
  type = "claimPredicateOr";
  orPredicates;
  constructor(orPredicates) {
    super();
    this.orPredicates = orPredicates;
  }
  get value() {
    return this.orPredicates;
  }
  toXdrObject() {
    return {
      type: 2,
      orPredicates: this.orPredicates.map((v) => v.toXdrObject())
    };
  }
}
class ClaimPredicateNot extends ClaimPredicateBase {
  type = "claimPredicateNot";
  notPredicate;
  constructor(notPredicate) {
    super();
    this.notPredicate = notPredicate;
  }
  get value() {
    return this.notPredicate;
  }
  toXdrObject() {
    return {
      type: 3,
      notPredicate: this.notPredicate === null ? null : this.notPredicate.toXdrObject()
    };
  }
}
class ClaimPredicateBeforeAbsoluteTime extends ClaimPredicateBase {
  type = "claimPredicateBeforeAbsoluteTime";
  absBefore;
  constructor(absBefore) {
    super();
    this.absBefore = absBefore;
  }
  get value() {
    return this.absBefore;
  }
  toXdrObject() {
    return { type: 4, absBefore: this.absBefore };
  }
}
class ClaimPredicateBeforeRelativeTime extends ClaimPredicateBase {
  type = "claimPredicateBeforeRelativeTime";
  relBefore;
  constructor(relBefore) {
    super();
    this.relBefore = relBefore;
  }
  get value() {
    return this.relBefore;
  }
  toXdrObject() {
    return { type: 5, relBefore: this.relBefore };
  }
}
const ClaimPredicate = ClaimPredicateBase;

exports.ClaimPredicate = ClaimPredicate;
exports.ClaimPredicateAnd = ClaimPredicateAnd;
exports.ClaimPredicateBeforeAbsoluteTime = ClaimPredicateBeforeAbsoluteTime;
exports.ClaimPredicateBeforeRelativeTime = ClaimPredicateBeforeRelativeTime;
exports.ClaimPredicateNot = ClaimPredicateNot;
exports.ClaimPredicateOr = ClaimPredicateOr;
exports.ClaimPredicateUnconditional = ClaimPredicateUnconditional;
//# sourceMappingURL=claim-predicate.js.map
