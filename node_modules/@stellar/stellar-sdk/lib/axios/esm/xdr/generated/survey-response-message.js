import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { SurveyMessageCommandType } from './survey-message-command-type.js';
import { EncryptedBody } from './encrypted-body.js';

class SurveyResponseMessage extends XdrValue {
  surveyorPeerId;
  surveyedPeerId;
  ledgerNum;
  commandType;
  encryptedBody;
  static schema = struct(
    "SurveyResponseMessage",
    {
      surveyorPeerId: PublicKey.schema,
      surveyedPeerId: PublicKey.schema,
      ledgerNum: uint32(),
      commandType: SurveyMessageCommandType.schema,
      encryptedBody: EncryptedBody.schema
    }
  );
  constructor(input) {
    super();
    this.surveyorPeerId = input.surveyorPeerId;
    this.surveyedPeerId = input.surveyedPeerId;
    this.ledgerNum = input.ledgerNum;
    this.commandType = input.commandType;
    this.encryptedBody = input.encryptedBody instanceof EncryptedBody ? input.encryptedBody : new EncryptedBody(input.encryptedBody);
  }
  toXdrObject() {
    return {
      surveyorPeerId: this.surveyorPeerId.toXdrObject(),
      surveyedPeerId: this.surveyedPeerId.toXdrObject(),
      ledgerNum: this.ledgerNum,
      commandType: this.commandType.toXdrObject(),
      encryptedBody: this.encryptedBody.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SurveyResponseMessage({
      surveyorPeerId: PublicKey.fromXdrObject(wire.surveyorPeerId),
      surveyedPeerId: PublicKey.fromXdrObject(wire.surveyedPeerId),
      ledgerNum: wire.ledgerNum,
      commandType: SurveyMessageCommandType.fromXdrObject(wire.commandType),
      encryptedBody: EncryptedBody.fromXdrObject(wire.encryptedBody)
    });
  }
}

export { SurveyResponseMessage };
//# sourceMappingURL=survey-response-message.js.map
