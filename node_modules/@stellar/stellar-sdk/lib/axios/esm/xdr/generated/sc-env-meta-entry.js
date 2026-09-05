import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScEnvMetaKind } from './sc-env-meta-kind.js';
import { ScEnvMetaEntryInterfaceVersion } from './sc-env-meta-entry-interface-version.js';

class ScEnvMetaEntryBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ScEnvMetaEntryBase) {
      throw new TypeError(
        "new xdr.ScEnvMetaEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScEnvMetaEntry.scEnvMetaKindInterfaceVersion(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ScEnvMetaEntry",
    {
      switchOn: ScEnvMetaKind.schema,
      cases: [
        _case(
          "scEnvMetaKindInterfaceVersion",
          0,
          field("interfaceVersion", ScEnvMetaEntryInterfaceVersion.schema)
        )
      ],
      switchKey: "kind"
    }
  );
  static scEnvMetaKindInterfaceVersion(interfaceVersion) {
    return new ScEnvMetaEntryInterfaceVersionArm(interfaceVersion);
  }
  static fromXdrObject(wire) {
    switch (wire.kind) {
      case 0:
        return new ScEnvMetaEntryInterfaceVersionArm(
          ScEnvMetaEntryInterfaceVersion.fromXdrObject(wire.interfaceVersion)
        );
    }
    throw new XdrError(
      `ScEnvMetaEntry: unknown kind ${wire.kind}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScEnvMetaEntry variant.
   * Use this instead of `instanceof ScEnvMetaEntry`: the exported `ScEnvMetaEntry` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScEnvMetaEntry.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScEnvMetaEntryBase;
  }
}
class ScEnvMetaEntryInterfaceVersionArm extends ScEnvMetaEntryBase {
  type = "scEnvMetaKindInterfaceVersion";
  interfaceVersion;
  constructor(interfaceVersion) {
    super();
    this.interfaceVersion = interfaceVersion;
  }
  get value() {
    return this.interfaceVersion;
  }
  toXdrObject() {
    return { kind: 0, interfaceVersion: this.interfaceVersion.toXdrObject() };
  }
}
const ScEnvMetaEntry = ScEnvMetaEntryBase;

export { ScEnvMetaEntry, ScEnvMetaEntryInterfaceVersionArm };
//# sourceMappingURL=sc-env-meta-entry.js.map
