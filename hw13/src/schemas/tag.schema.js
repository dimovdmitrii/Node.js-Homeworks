import * as z from "zod";

export const tagFullSchema = z.object({
  name: z.string().min(2, "Min 2 char").max(50, "Max 50 char"),
});
