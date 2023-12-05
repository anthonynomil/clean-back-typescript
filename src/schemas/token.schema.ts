import { z } from "zod";

const tokenSchema = {
  token: z.string({
    required_error: "Token is required",
    invalid_type_error: "Token must be a string"
  }).regex(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
    , { message: "Token is invalid" })

};

export default tokenSchema;
