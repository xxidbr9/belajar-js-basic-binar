function responseOk(msg, data) {
  return {
    message: msg,
    data
  };
}

function responseError(err) {
  return {
    error: err
  };
}

module.exports = {
  responseError,
  responseOk
};
