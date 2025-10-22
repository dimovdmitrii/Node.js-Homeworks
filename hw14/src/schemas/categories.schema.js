import * as z from "zod";

export const categoryFullSchema = z.object({
  name: z.string(),
});
