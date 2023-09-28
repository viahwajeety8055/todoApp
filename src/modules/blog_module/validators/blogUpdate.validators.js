const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const blogModuleConstants = require("../constants");

module.exports = (req) => {
  const { content } = req.body;

  const token = req.headers["authorization"];

  if (sharedValidators.isEmpty(token)) {
    sharedServices.error.throw(
      blogModuleConstants.create.errorMessages.BCRE0003
    );
  }

  if (sharedValidators.isEmpty(content)) {
    sharedServices.error.throw(
      blogModuleConstants.create.errorMessages.BCRE0002
    );
  }

  return {
    content,
    token,
  };
};
