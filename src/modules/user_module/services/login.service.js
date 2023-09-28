const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const userModuleConstants = require("../constants");

module.exports = async ({ email, password }) => {
  const data = await models.user.read({
    email: email,
  });

  // If user not exist with given email throw exception
  if (data.length == 0) {
    sharedServices.error.throw(
      userModuleConstants.login.errorMessages.ULNE0001
    );
  }

  //Compare password
  const db_password = await sharedServices.authServices.comparePassword(
    password,
    data[0].password
  );

  // If password not matched throw exception
  if (!db_password) {
    sharedServices.error.throw(
      userModuleConstants.login.errorMessages.ULNE0005
    );
  }

  //Generating JWT token
  const secretKey = "secret";

  const payload = {
    userid: data[0].userid,
  };

  const options = {
    expiresIn: "24h",
  };

  const token = sharedServices.authServices.getJWT(payload, secretKey, options);

  // Returning final response
  return { token };
};
