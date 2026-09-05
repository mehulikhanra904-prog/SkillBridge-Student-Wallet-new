function wrapHttpError(error, wrap) {
  const response = error?.response ?? error;
  if (response && typeof response.status === "number") {
    const wrapped = wrap({
      data: response.data,
      status: response.status,
      statusText: response.statusText
    });
    if (error instanceof Error) {
      wrapped.cause = error;
    }
    return wrapped;
  }
  return error instanceof Error ? error : new Error(String(error));
}

export { wrapHttpError };
//# sourceMappingURL=wrap_http_error.js.map
