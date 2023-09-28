const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");

module.exports = async ({ name, email, password }) => {
  // It will generate password hash
  const hashedPassword = await sharedServices.authServices.getPasswordHash(
    password
  );

  // It will create new user
  const data = await models.user.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  return data;
};
