import * as express from "express";
import Router from "./routes";
import * as path from "path";
import { configurePassport } from "./middlewares/passport";

const app = express();

configurePassport(app);
app.use(express.json());
app.use(express.static("public"));
app.use(Router);

app.use(["/api/*", "/auth/*"], (req, res) => res.status(400).json({ message: "quit playing in the url bar" }));

// app.get("*", (res, req) => res.sendFile(path.join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
