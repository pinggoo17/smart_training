import Router from "koa-router";
import * as authCtrl from "./auth.ctrl";

const auth = new Router();

auth.post("/register", authCtrl.register);
auth.post("/login", authCtrl.login);
auth.get("/check", authCtrl.check);
auth.post("/saveState", authCtrl.saveState);
auth.post("/getState", authCtrl.getState);

export default auth;
