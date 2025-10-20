import * as z from "zod";

export const productFullSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters long")
    .max(150, "Product name is too long"),

  price: z.coerce
    .number({
      invalid_type_error: "Price must be a number",
    })
    .min(0.01, "Price must be greater than 0"),

  description: z.string().max(500, "Description is too long"),
});
