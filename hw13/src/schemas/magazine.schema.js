import * as z from "zod";

export const magazineFullSchema = z.object({
  title: z.string().min(3, "Minimum is 3 char").max(150, "Is too long"),
  issueNumber: z.coerce
    .number({
      invalid_type_error: "Issue must be a number",
    })
    .int("Issue must be an integer")
    .min(1, "Must be at least 1"),

  publisher: z.string().min(1, "Puvlisher ID is required"),
});
