import { mysqlConfig } from "../../config";
import { Query } from "..";
import { CreateableUser, User } from "../../../../types";

const register = (newUser: CreateableUser) => Query("INSERT INTO Users SET ?", [newUser]);
const findByEmail = (email: string) => Query<User[]>("SELECT * FROM Users WHERE email=?", [email]);

export default {
  register,
  findByEmail,
};
