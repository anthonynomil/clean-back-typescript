import userValidator from "validator/user.validator";
import authValidator from "validator/auth.validator";

const validators = {
  user: userValidator,
  auth: authValidator,
};

export default validators;
