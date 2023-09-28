const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const userModuleConstants = require("../constants");

module.exports = (req) => {
  const { name, email, password } = req.body;

  if (
    sharedValidators.isEmpty(name) ||
    sharedValidators.isEmpty(email) ||
    sharedValidators.isEmpty(password)
  ) {
    sharedServices.error.throw(
      userModuleConstants.register.errorMessages.ULNE0002
    );
  }

  if (!sharedValidators.isValidEmail(email)) {
    sharedServices.error.throw(
      userModuleConstants.register.errorMessages.ULNE0001
    );
  }

  return {
    name,
    email,
    password,
  };
};
