import express from "express";
import cors from "cors";
import { DB_URL, HOST_NAME, PORT } from "./config";
import { errorHandler } from "./middlewares/errorHandler";
import router from "./routes";
import { connectDb } from "./utils/connectDb";
import { deserializeUser } from "./middlewares/deserializeUser";

/** ---> Initialzing express app */
const app = express();

/** --->  middlewares. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(deserializeUser);

/** ---> home route for testing. */
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the home route." });
});

/** ---> api routes. */
app.use("/api/v1", router);

/** ---> Not found (404) routes. */
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

/** ---> Handling global errors. */
app.use(errorHandler);

/** ---> Listenig for requests. */
app.listen(Number(PORT), HOST_NAME ?? "127.0.0.1", () => {
  console.log(
    `server is running at : http://${HOST_NAME ?? "127.0.0.1"}:${PORT}`
  );
  connectDb(DB_URL);
});
