import User from "../db/models/User.js";
import User from "../db/models/User.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const findUser = async (filter) => {
  return User.findOne({ where: filter });
};

export const findUserById = async (id) => {
  return User.findByPk(id);
};

export const createUser = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return User.create({ email, password: hashedPassword });
};

export const updateUser = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  }
  const [updatedRows] = await User.update(data, { where: { id } });
  if (updatedRows === 0) return null;
  return findUserById(id);
};

export const deleteUser = async (id) => {
  return User.destroy({ where: { id } });
};
