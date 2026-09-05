'use strict';

class ExpiredStateError extends Error {
}
class RestoreFailureError extends Error {
}
class NeedsMoreSignaturesError extends Error {
}
class NoSignatureNeededError extends Error {
}
class NoUnsignedNonInvokerAuthEntriesError extends Error {
}
class NoSignerError extends Error {
}
class NotYetSimulatedError extends Error {
}
class FakeAccountError extends Error {
}
class SimulationFailedError extends Error {
}
class InternalWalletError extends Error {
}
class ExternalServiceError extends Error {
}
class InvalidClientRequestError extends Error {
}
class UserRejectedError extends Error {
}
class SendFailedError extends Error {
}
class SendResultOnlyError extends Error {
}
class TransactionStillPendingError extends Error {
}

exports.ExpiredStateError = ExpiredStateError;
exports.ExternalServiceError = ExternalServiceError;
exports.FakeAccountError = FakeAccountError;
exports.InternalWalletError = InternalWalletError;
exports.InvalidClientRequestError = InvalidClientRequestError;
exports.NeedsMoreSignaturesError = NeedsMoreSignaturesError;
exports.NoSignatureNeededError = NoSignatureNeededError;
exports.NoSignerError = NoSignerError;
exports.NoUnsignedNonInvokerAuthEntriesError = NoUnsignedNonInvokerAuthEntriesError;
exports.NotYetSimulatedError = NotYetSimulatedError;
exports.RestoreFailureError = RestoreFailureError;
exports.SendFailedError = SendFailedError;
exports.SendResultOnlyError = SendResultOnlyError;
exports.SimulationFailedError = SimulationFailedError;
exports.TransactionStillPendingError = TransactionStillPendingError;
exports.UserRejectedError = UserRejectedError;
//# sourceMappingURL=errors.js.map
