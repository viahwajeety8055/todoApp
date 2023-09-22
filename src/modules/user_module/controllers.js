const userValidators = require("./validators");
const userServices = require("./services");

const userModuleControllers = {};

// controller_name: test
// controller_description:
//      controller used to test sample module controller file
userModuleControllers.register = async (req, res, next) => {
  try {
    const validatedRequest = userValidators.register(req);

    const data = await userServices.register({
      name: validatedRequest.name,
      gender: validatedRequest.gender,
      email: validatedRequest.email,
      password: validatedRequest.password,
    });
  } catch (error) {}

  // validate request/raise an exception
  // handle logic within service function
  // parse response
  // return response/raise an exception
};

sampleModuleControllers.getDetails = async (req, res, next) => {
  const validatedRequest = studentValidators.getDetailsValidators(req);

  const data = await studentService.getDetailsService({
    studentId: parseInt(validatedRequest.id),
  });

  if (data.length == 0)
    next({
      result: "Data not found",
      ...studentConstant.getDetailsConstants.messages.SAMS0001,
    });

  next({
    result: data,
    ...studentConstant.getDetailsConstants.messages.SAMS0001,
  });
};

module.exports = userModuleControllers;
