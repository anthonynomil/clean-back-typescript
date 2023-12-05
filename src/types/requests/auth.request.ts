import { z } from "zod";
import authValidator from "validator/auth.validator";

export type AuthLogin = z.infer<typeof authValidator.login>;
export type AuthRegister = z.infer<typeof authValidator.register>;
export type AuthRefreshToken = z.infer<typeof authValidator.refreshTokens>;
