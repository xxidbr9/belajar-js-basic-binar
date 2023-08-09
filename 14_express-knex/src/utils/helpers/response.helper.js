const errorResp = msg => {
  return {
    error: msg
  };
};

const okResp = (msg, data) => {
  return {
    data,
    message: msg
  };
};

module.exports = {
  errorResp,
  okResp
};
