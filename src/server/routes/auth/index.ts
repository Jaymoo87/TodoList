import * as express from "express";
import * as passport from "passport";

import { CreateableUser } from "../../../../types";
import users from "../../db/queries/users";
import bcryptUtils from "../../utils/bcrypt";
import tokenUtils from "../../utils/token";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password }: CreateableUser = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "missing some info bud..." });
    return;
  }

  try {
    const hashed = await bcryptUtils.hash(password);
    const { insertId } = await users.register({ name, email, password: hashed });
    const token = tokenUtils.sign({ email, id: insertId });

    res.status(201).json({ message: "Congrats!", id: insertId, token });
  } catch (error) {
    console.log(error);
  }
});

authRouter.post("/login", passport.authenticate("local", { session: false }), async (req, res) => {
  try {
    if (!req.user) return res.sendStatus(401);
    const token = tokenUtils.sign({ id: req.user.id, email: req.user.email });

    return res.json({ message: "did it, you're in", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server aint doin right" });
  }
});

export default authRouter;
