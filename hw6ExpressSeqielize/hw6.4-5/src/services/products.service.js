import { QueryTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

export const getProducts = async () => {
  const query = `SELECT * FROM products`;
  const data = await sequelize.query(
    query,
    {
      type: QueryTypes.SELECT,
    }
  );

  return data;
};

export const addProduct = async ({ name, price }) => {
  const query = `INSERT INTO products (name, price) VALUES('${name}', ${price}) RETURNING *`;
  const data = await sequelize.query(
    query,
    {
      type: QueryTypes.INSERT
    }
  );
  return data[0];
};
