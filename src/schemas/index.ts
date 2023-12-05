import userSchema from "schemas/user.schema";
import globalSchema from "schemas/global.schema";
import tokenSchema from "schemas/token.schema";

export default {
  global: globalSchema,
  user: userSchema,
  token: tokenSchema,
}
