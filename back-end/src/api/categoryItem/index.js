import Router from "koa-router";
import * as categoryItemCtrl from "./categoryItem.ctrl";

const categoryItem = new Router();

categoryItem.post("/", categoryItemCtrl.list);
categoryItem.post("/add", categoryItemCtrl.add);
categoryItem.post("/userParam", categoryItemCtrl.userParam);

export default categoryItem;
