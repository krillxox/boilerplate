if (process.env.ENV === "DEV") {
  require("dotenv").config({ path: ".env.development" });
  require("dotenv").config({ path: ".env.local" });
}
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("ping");
  res.sendStatus(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
