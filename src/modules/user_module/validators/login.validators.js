const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const userModuleConstants = require("../constants");

module.exports = ({ sampleId }) => {
  if (sharedValidators.isRequired(sampleId)) {
    sharedServices.error.throw(
      userModuleConstants.sample.errorMessages.SAME0001
    );
  }

  return {
    sampleId,
  };
};
