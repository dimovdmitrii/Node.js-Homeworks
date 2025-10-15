import bcrypt from "bcrypt";
import HttpError from "../utils/HttpError.js";
import {
  findUser,
  createUser,
  updateUser,
  deleteUser,
} from "../services/users.service.js";
import { signToken, verifyToken } from "../utils/jwt.util.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await findUser({ email });
  if (existingUser) {
    throw HttpError(409, "Email already registered");
  }

  const newUser = await createUser({ username, email, password });
  res.status(201).json({ message: "Registration successful", user: newUser });
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await findUser({ username });
  if (!user) throw HttpError(401, "Invalid credentials");

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw HttpError(401, "Invalid credentials");

  const token = signToken({
    id: user.id,
    email: user.email,
    role: user.role,
    mustChangePassword: user.mustChangePassword,
  });

  if (user.mustChangePassword) {
    return res.status(200).json({
      message:
        "Login successful, but password must be changed. Use /change-password.",
      token,
    });
  }

  res.status(200).json({ message: "Login successful", token });
};

export const changePassword = async (req, res) => {
  const { password } = req.body;
  const userId = req.user.id;

  const updatedUser = await updateUser(userId, {
    password,
    mustChangePassword: false,
  });

  res.status(200).json({
    message: "Password successfully updated.",
    user: updatedUser,
  });
};

export const deleteAccount = async (req, res) => {
  const { currentPassword } = req.body;
  const user = req.user;

  const passwordMatch = await bcrypt.compare(currentPassword, user.password);
  if (!passwordMatch) throw HttpError(401, "Password confirmation failed");

  await deleteUser(user.id);
  res.status(200).json({ message: "Account successfully deleted" });
};

export const updateEmail = async (req, res) => {
  const { email } = req.body;
  const userId = req.user.id;

  const existingUser = await findUser({ email: email });
  if (existingUser && existingUser.id !== userId) {
    throw HttpError(409, "New email is already in use by another account");
  }

  const updatedUser = await updateUser(userId, { email: email });
  res
    .status(200)
    .json({ message: "Email successfully updated", user: updatedUser });
};

export const updateRole = async (req, res) => {
  const { userId, newRole } = req.body;

  const updatedUser = await updateUser(userId, { role: newRole });
  if (!updatedUser) throw HttpError(404, `User with ID ${userId} not found`);

  res
    .status(200)
    .json({ message: "Role successfully updated", user: updatedUser });
};

export const refreshToken = async (req, res) => {
  const userPayload = {
    id: req.user.id,
    email: req.user.email,
    role: req.user.role,
    mustChangePassword: req.user.mustChangePassword,
  };

  const newToken = signToken(userPayload);

  res.status(200).json({ token: newToken });
};
