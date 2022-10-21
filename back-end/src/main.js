require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import cors from "@koa/cors";

import api from "./api";

const { PORT, MONGO_URI } = process.env;
const router = new Router();

let corsOptions = {
  origin: "*",
  credentials: true,
};

const app = new Koa();

app.use(cors(corsOptions));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

router.use("/api", api.routes()); // api 라우트 적용

app.use(bodyParser());

router.get("/", (ctx) => {
  ctx.body = "홈";
});

app.use(router.routes()).use(router.allowedMethods);

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
