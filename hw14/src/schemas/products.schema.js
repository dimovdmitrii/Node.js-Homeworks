import * as z from "zod";

export const productFullSchema = z.object({
  name: z.string().min(1, "Product name min 1 char"),

  price: z.coerce
    .number({ invalid_type_error: "must be a number" })
    .min(1, "must be greater then 0"),

  category: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format"),
});
