import Router from "koa-router";
import * as categoryCtrl from "./category.ctrl";

const category = new Router();

category.post("/", categoryCtrl.list);
category.post("/add", categoryCtrl.add);
category.post("/remove", categoryCtrl.remove);
category.put("/update", categoryCtrl.update);

export default category;
