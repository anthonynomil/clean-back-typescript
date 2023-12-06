import { z } from "zod";
import { role } from "validators/helpers.validator";

const userSchema = {
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is not a string",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password is not a string",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(32, {
      message: "Password must be at most 32 characters long",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[@#$%^&+=]/, {
      message: "Password must contain at least one special character",
    }),
  confirmPassword: z.string({
    required_error: "Confirm password is required",
    invalid_type_error: "Confirm password is not a string",
  }),
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name is not a string",
  }),
  role: z
    .number({
      required_error: "Role is required",
      invalid_type_error: "Role is not a number",
    })
    .refine(role, {
      message: "Role is not valid",
    }),
};

export default userSchema;
