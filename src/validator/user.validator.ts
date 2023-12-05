import { z } from "zod";
import { passwordMatch } from "validator/helpers.validator";
import schemas from "schemas";

const create = z.object({
  body: z
    .object({
      email: schemas.user.email,
      password: schemas.user.password,
      confirmPassword: schemas.user.confirmPassword,
      name: schemas.user.name.optional(),
      role: schemas.user.role.optional(),
    })
    .refine(passwordMatch, {
      message: "Passwords do not match",
    }),
});

const getById = z.object({
  params: z.object({
    userId: schemas.global.id,
  }),
});

const update = z.object({
  params: z.object({
    userId: schemas.global.id,
  }),
  body: z
    .object({
      email: schemas.user.email.optional(),
      name: schemas.user.name.optional(),
      role: schemas.user.role.optional(),
      password: schemas.user.password.optional(),
      confirmPassword: schemas.user.confirmPassword.optional(),
    })
    .refine(passwordMatch, {
      message: "Passwords do not match,
    }),
});

const remove = z.object({
  params: z.object({
    userId: schemas.global.id
  })
});

export default {
  create,
  getById,
  update,
  remove
};
