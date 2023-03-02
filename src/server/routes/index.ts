import * as express from "express";
import authRouter from "./auth";
import apiRouter from "./api";

const indexRouter = express.Router();

indexRouter.use("/api", apiRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
