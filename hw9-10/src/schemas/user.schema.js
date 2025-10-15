import * as z from "zod";
import { email } from "../constans/validation.js";

export const userFullSchema = z.object({
  fullname: z
    .string()
    .min(1, "Fullname required")
    .max(100, "Too large Fullname"),
  email: z.string().regex(email.value, email.message),
});

export const registerSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .max(50, "Username too long"),
  email: z.string().regex(email.value, email.message),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password too long"),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const passwordSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password too long"),
});

export const emailSchema = z.object({
  email: z.string().regex(email.value, email.message),
});

export const roleSchema = z.object({
  userId: z.number().int().positive("User ID must be a positive integer"),
  newRole: z.enum(["user", "admin"], {
    errorMap: () => ({ message: "Role must be either 'user' or 'admin'" }),
  }),
});

export const deleteAccountSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
});