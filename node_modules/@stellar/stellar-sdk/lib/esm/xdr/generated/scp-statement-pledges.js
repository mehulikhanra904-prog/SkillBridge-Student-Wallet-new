import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpStatementType } from './scp-statement-type.js';
import { ScpStatementPrepare } from './scp-statement-prepare.js';
import { ScpStatementConfirm } from './scp-statement-confirm.js';
import { ScpStatementExternalize } from './scp-statement-externalize.js';
import { ScpNomination } from './scp-nomination.js';

class ScpStatementPledgesBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ScpStatementPledgesBase) {
      throw new TypeError(
        "new xdr.ScpStatementPledges(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScpStatementPledges.scpStPrepare(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ScpStatementPledges",
    {
      switchOn: ScpStatementType.schema,
      cases: [
        _case("scpStPrepare", 0, field("prepare", ScpStatementPrepare.schema)),
        _case("scpStConfirm", 1, field("confirm", ScpStatementConfirm.schema)),
        _case(
          "scpStExternalize",
          2,
          field("externalize", ScpStatementExternalize.schema)
        ),
        _case("scpStNominate", 3, field("nominate", ScpNomination.schema))
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
          ScpStatementPrepare.fromXdrObject(wire.prepare)
        );
      case 1:
        return new ScpStatementPledgesConfirm(
          ScpStatementConfirm.fromXdrObject(wire.confirm)
        );
      case 2:
        return new ScpStatementPledgesExternalize(
          ScpStatementExternalize.fromXdrObject(wire.externalize)
        );
      case 3:
        return new ScpStatementPledgesNominate(
          ScpNomination.fromXdrObject(wire.nominate)
        );
    }
    throw new XdrError(
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

export { ScpStatementPledges, ScpStatementPledgesConfirm, ScpStatementPledgesExternalize, ScpStatementPledgesNominate, ScpStatementPledgesPrepare };
//# sourceMappingURL=scp-statement-pledges.js.map
