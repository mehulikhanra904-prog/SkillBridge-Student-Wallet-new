'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpStatementType = require('./scp-statement-type.js');
var scpStatementPrepare = require('./scp-statement-prepare.js');
var scpStatementConfirm = require('./scp-statement-confirm.js');
var scpStatementExternalize = require('./scp-statement-externalize.js');
var scpNomination = require('./scp-nomination.js');

class ScpStatementPledgesBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScpStatementPledgesBase) {
      throw new TypeError(
        "new xdr.ScpStatementPledges(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScpStatementPledges.scpStPrepare(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ScpStatementPledges",
    {
      switchOn: scpStatementType.ScpStatementType.schema,
      cases: [
        jsXdr.case("scpStPrepare", 0, jsXdr.field("prepare", scpStatementPrepare.ScpStatementPrepare.schema)),
        jsXdr.case("scpStConfirm", 1, jsXdr.field("confirm", scpStatementConfirm.ScpStatementConfirm.schema)),
        jsXdr.case(
          "scpStExternalize",
          2,
          jsXdr.field("externalize", scpStatementExternalize.ScpStatementExternalize.schema)
        ),
        jsXdr.case("scpStNominate", 3, jsXdr.field("nominate", scpNomination.ScpNomination.schema))
      ]
    }
  );
  static scpStPrepare(prepare) {
    return new ScpStatementPledgesPrepare(prepare);
  }
  static scpStConfirm(confirm) {
    return new ScpStatementPledgesConfirm(confirm);
  }
  static scpStExternalize(externalize) {
    return new ScpStatementPledgesExternalize(externalize);
  }
  static scpStNominate(nominate) {
    return new ScpStatementPledgesNominate(nominate);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ScpStatementPledgesPrepare(
          scpStatementPrepare.ScpStatementPrepare.fromXdrObject(wire.prepare)
        );
      case 1:
        return new ScpStatementPledgesConfirm(
          scpStatementConfirm.ScpStatementConfirm.fromXdrObject(wire.confirm)
        );
      case 2:
        return new ScpStatementPledgesExternalize(
          scpStatementExternalize.ScpStatementExternalize.fromXdrObject(wire.externalize)
        );
      case 3:
        return new ScpStatementPledgesNominate(
          scpNomination.ScpNomination.fromXdrObject(wire.nominate)
        );
    }
    throw new jsXdr.XdrError(
      `ScpStatementPledges: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScpStatementPledges variant.
   * Use this instead of `instanceof ScpStatementPledges`: the exported `ScpStatementPledges` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScpStatementPledges.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScpStatementPledgesBase;
  }
}
class ScpStatementPledgesPrepare extends ScpStatementPledgesBase {
  type = "scpStPrepare";
  prepare;
  constructor(prepare) {
    super();
    this.prepare = prepare;
  }
  get value() {
    return this.prepare;
  }
  toXdrObject() {
    return { type: 0, prepare: this.prepare.toXdrObject() };
  }
}
class ScpStatementPledgesConfirm extends ScpStatementPledgesBase {
  type = "scpStConfirm";
  confirm;
  constructor(confirm) {
    super();
    this.confirm = confirm;
  }
  get value() {
    return this.confirm;
  }
  toXdrObject() {
    return { type: 1, confirm: this.confirm.toXdrObject() };
  }
}
class ScpStatementPledgesExternalize extends ScpStatementPledgesBase {
  type = "scpStExternalize";
  externalize;
  constructor(externalize) {
    super();
    this.externalize = externalize;
  }
  get value() {
    return this.externalize;
  }
  toXdrObject() {
    return { type: 2, externalize: this.externalize.toXdrObject() };
  }
}
class ScpStatementPledgesNominate extends ScpStatementPledgesBase {
  type = "scpStNominate";
  nominate;
  constructor(nominate) {
    super();
    this.nominate = nominate;
  }
  get value() {
    return this.nominate;
  }
  toXdrObject() {
    return { type: 3, nominate: this.nominate.toXdrObject() };
  }
}
const ScpStatementPledges = ScpStatementPledgesBase;

exports.ScpStatementPledges = ScpStatementPledges;
exports.ScpStatementPledgesConfirm = ScpStatementPledgesConfirm;
exports.ScpStatementPledgesExternalize = ScpStatementPledgesExternalize;
exports.ScpStatementPledgesNominate = ScpStatementPledgesNominate;
exports.ScpStatementPledgesPrepare = ScpStatementPledgesPrepare;
//# sourceMappingURL=scp-statement-pledges.js.map
