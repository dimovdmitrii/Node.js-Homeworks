import HttpError from "../utils/HttpError.js";
import { findUserById } from "../services/users.service.js";
import { verifyToken } from "../utils/jwt.util.js";

export const authenticateJWT = async (req, res, next) => {
  const authorization = req.get("Authorization");

  if (!authorization) throw HttpError(401, "Authorization header missing");

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" || !token) {
    throw HttpError(401, "Authorization header must be Bearer type");
  }

  try {
    const { id } = verifyToken(token);

    const user = await findUserById(id);

    if (!user) throw HttpError(401, "User not found");

    req.user = user;
    next();
  } catch (error) {
    throw HttpError(401, error.message);
  }
};

export const checkPasswordChange = (req, res, next) => {
  if (req.user && req.user.mustChangePassword === true) {
    throw HttpError(
      403,
      "Password reset required. Please use /change-password route.",
    );
  }
  next();
};

export const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    throw HttpError(403, "Access denied. Insufficient privileges.");
  }
  next();
};
