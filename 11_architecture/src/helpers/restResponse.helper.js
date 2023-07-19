function responseOk(msg, data) {
  return {
    message: msg,
    data
  };
}

function responseError(msg, err) {
  return {
    message: msg,
    error: err
  };
}

module.exports = {
  responseError,
  responseOk
};
