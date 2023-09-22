const loginService = require("./login.service");
const registerService = require("./register.service");

const userModuleServices = {
  login: loginService,
  register: registerService,
};

module.exports = userModuleServices;
