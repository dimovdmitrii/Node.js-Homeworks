import * as z from "zod";

export const articleFullSchema = z.object({
  title: z.string().min(3, "Must least 3 char long").max(200, "200 - max char"),

  content: z.string().min(10, "Min 10 char").max(10000, "Is too long"),

  tags: z.array(z.string()).optional(),
});
