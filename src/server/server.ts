import * as express from "express";
import Router from "./routes";
import { configurePassport } from "./middlewares/passport";

const app = express();

configurePassport(app);
app.use(express.json());
app.use(express.static("public"));
app.use(Router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
