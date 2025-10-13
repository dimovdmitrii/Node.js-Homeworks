import * as z from "zod";
import { email } from "../constans/validation.js";

export const userFullSchema = z.object({
  fullname: z
    .string()
    .min(1, "Fullname required")
    .max(100, "Too large Fullname"),
  email: z.string().regex(email.value, email.message),
});
