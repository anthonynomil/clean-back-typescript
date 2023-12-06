import userValidator from "validators/user.validator";
import { z } from "zod";

export type UserCreate = z.infer<typeof userValidator.create>;
export type UserGetById = z.infer<typeof userValidator.getById>;
export type UserUpdate = z.infer<typeof userValidator.update>;
export type UserRemove = z.infer<typeof userValidator.remove>;
