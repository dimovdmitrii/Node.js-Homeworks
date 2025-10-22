import * as z from "zod";

export const publischerFullSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be greather then 2 char")
    .max(100, "Name is too long"),

  location: z.string().min(2, "Is too short").max(100, "Is too long"),
});
