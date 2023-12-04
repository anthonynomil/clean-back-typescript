import e from "express";
import ApiError from "utils/ApiError";
import httpStatus from "http-status";
import pick from "utils/pick.utils";
import { ZodType } from "zod";

interface ValidationSchema {
  params?: ZodType<any, any>;
  query?: ZodType<any, any>;
  body?: ZodType<any, any>;
}

const validate =
  (schema: ValidationSchema) =>
  (req: e.Request, res: e.Response, next: e.NextFunction): void => {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const keysToValidate = Object.keys(validSchema) as (keyof ValidationSchema)[];
    const object = pick(req, keysToValidate as (keyof e.Request)[]);
    const errors: string[] = [];
    for (const key of keysToValidate) {
      const parsed = validSchema[key]?.safeParse(object[key]);
      if (!parsed || !parsed.success) {
        const error = parsed?.error?.errors.map((e) => e.message).join(", ");
        errors.push(error || "Invalid data");
      } else object[key] = parsed.data;
    }
    if (errors.length) return next(new ApiError(httpStatus.BAD_REQUEST, errors.join(", ")));
    Object.assign(req, object);
    next();
  };

export default validate;
