import Router from "koa-router";
import auth from "./auth";
import category from "./category";
import categoryItem from "./categoryItem";

const api = new Router();

api.use("/auth", auth.routes());
api.use("/category", category.routes());
api.use("/categoryItem", categoryItem.routes());

api.get("/test", (ctx) => {
  ctx.body = "test 성공";
});

export default api;
