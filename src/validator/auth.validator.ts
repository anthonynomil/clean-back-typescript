import { z } from "zod";
import { passwordMatch } from "validator/helpers.validator";
import schemas from "schemas";

const login = z.object({
  body: z.object({
    email: schemas.user.email,
    password: schemas.user.password,
  }),
});

const register = z.object({
  body: z
    .object({
      email: schemas.user.email,
      password: schemas.user.password,
      confirmPassword: schemas.user.confirmPassword,
      name: schemas.user.name.optional(),
    })
    .refine(passwordMatch, {
      message: "Passwords do not match",
    }),
});

const refreshTokens = z.object({
  body: z.object({
    refreshToken: schemas.token.token,
  }),
});

export default {
  login,
  register,
  refreshTokens,
};
