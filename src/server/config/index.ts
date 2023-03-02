import * as dotenv from "dotenv";
import * as mysql from "mysql";

dotenv.config();

export const mysqlConfig: mysql.PoolConfig = {
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
};

const secret = process.env.JWT_SECRET;
if (!secret) throw new Error("missing JWT Key");

export const jwtConfig = {
  secret,
  expiration: process.env.JWT_EXPIRATION,
};
