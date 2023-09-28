const userValidators = require("./validators");
const userServices = require("./services");
const userConstants = require("./constants");

const userModuleControllers = {};

// controller_name: register
// controller_description:
//      controller used to register user module
userModuleControllers.register = async (req, res, next) => {
  try {
    // validate request/raise an exception
    const validatedRequest = userValidators.register(req);

    // handle logic within service function
    const data = await userServices.register({
      name: validatedRequest.name,
      email: validatedRequest.email,
      password: validatedRequest.password,
    });

    // return response
    next({
      result: data,
      ...userConstants.register.messages.ULNS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

// controller_name: login
// controller_description:
//      controller used to login user module
userModuleControllers.login = async (req, res, next) => {
  try {
    // validate request/raise an exception
    const validatedRequest = userValidators.login(req);

    // handle logic within service function
    const data = await userServices.login({
      email: validatedRequest.email,
      password: validatedRequest.password,
    });

    // return final response
    next({
      result: data,
      ...userConstants.login.messages.ULNS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

module.exports = userModuleControllers;
