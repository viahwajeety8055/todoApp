const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const blogModuleConstants = require("../constants");

module.exports = (req) => {
  const token = req.headers["authorization"];

  if (sharedValidators.isEmpty(token)) {
    sharedServices.error.throw(
      blogModuleConstants.delete.errorMessages.BDLE0003
    );
  }

  return {
    token,
  };
};
