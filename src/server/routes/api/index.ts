import * as express from "express";
import * as passport from "passport";

import itemRouter from "./items";

const apiRouter = express.Router();

apiRouter.use("/items", passport.authenticate("jwt", { session: false }), itemRouter);

export default apiRouter;
