import userValidator from "validators/user.validator";
import authValidator from "validators/auth.validator";

const validators = {
  user: userValidator,
  auth: authValidator,
};

export default validators;
