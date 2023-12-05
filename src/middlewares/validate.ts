import e from "express";
import { z } from "zod";
import ApiError from "utils/ApiError";
import httpStatus from "http-status";

const validate =
  (schema: z.ZodObject<never, never>) =>
  (req: e.Request, _res: e.Response, next: e.NextFunction): void => {
    const schemaKeys = Object.keys(schema);
    const reqKeys = Object.keys(req);
    const invalidKeys = reqKeys.filter((key) => !schemaKeys.includes(key));
    if (invalidKeys.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, `Invalid request keys: ${invalidKeys.join(", ")}`);
    }
    const validated = schema.safeParse(req);
    if (!validated.success) {
      throw new ApiError(httpStatus.BAD_REQUEST, validated.error.message);
    }
    next();
  };

export default validate;
