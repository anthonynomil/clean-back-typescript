import { z } from "zod";

const globalSchema = {
  id: z.string({
    required_error: "Id is required",
    invalid_type_error: "Id is not a string"
  }).uuid({
    message: "Id is not a valid uuid"
  }),
}

export default globalSchema;
