const loginValidators = require("./login.validators");
const registerValidators = require("./register.validators");

const userModuleValidators = {
  login: loginValidators,
  register: registerValidators,
};

module.exports = userModuleValidators;
