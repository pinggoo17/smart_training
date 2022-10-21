import Router from "koa-router";
import * as postsCtrl from "./posts.ctrl";

const posts = new Router();

posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);
posts.get("/:id", postsCtrl.checkObjectId, postsCtrl.read);
posts.delete("/:id", postsCtrl.checkObjectId, postsCtrl.remove);
// posts.put("/:jd", postsCtrl.checkObjectId, postsCtrl.replace);
posts.patch("/:id", postsCtrl.checkObjectId, postsCtrl.update);

// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };

//   console.log(ctx.body);
// };

// posts.get("/", printInfo);
// posts.post("/", printInfo);
// posts.get("/:id", printInfo);
// posts.post("/:id", printInfo);
// posts.delete("/:id", printInfo);
// posts.put("/:id", printInfo);
// posts.patch("/:id", printInfo);

export default posts;
