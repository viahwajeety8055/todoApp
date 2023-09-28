const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const userModuleConstants = require("../constants");

module.exports = (req) => {
  const { email, password } = req.body;

  if (sharedValidators.isEmpty(email) || sharedValidators.isEmpty(password)) {
    sharedServices.error.throw(
      userModuleConstants.login.errorMessages.ULNE0004
    );
  }

  if (!sharedValidators.isValidEmail(email)) {
    sharedServices.error.throw(
      userModuleConstants.login.errorMessages.ULNE0003
    );
  }

  return {
    email,
    password,
  };
};
