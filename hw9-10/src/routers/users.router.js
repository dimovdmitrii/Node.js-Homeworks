import { Router } from "express";

import {
  register,
  login,
  changePassword,
  deleteAccount,
  updateEmail,
  updateRole,
  refreshToken,
} from "../controllers/users.controller.js";

import {
  authenticateJWT,
  checkPasswordChange,
  authorizeRole,
} from "../middlewares/authenticate.js";

import { validateBody } from "../utils/validateBody.js";
import {
  registerSchema,
  loginSchema,
  passwordSchema,
  emailSchema,
  roleSchema,
  deleteAccountSchema,
} from "../schemas/user.schema.js"; // Предполагаемые схемы

const router = Router();

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);

router.use(authenticateJWT);

router.post("/refresh-token", refreshToken);

router.post("/change-password", validateBody(passwordSchema), changePassword);

router.delete(
  "/delete-account",
  validateBody(deleteAccountSchema),
  deleteAccount,
);
router.put("/update-email", checkPasswordChange, validateBody(emailSchema), updateEmail);

router.put(
  "/update-role",
  authorizeRole("admin"),
  validateBody(roleSchema),
  updateRole,
);

export default router;
