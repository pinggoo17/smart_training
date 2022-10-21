import Joi from "joi";
import Category from "../../models/category";

export const list = async (ctx) => {
  const schema = Joi.object().keys({
    username: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
  }

  const { username } = ctx.request.body;

  try {
    const exists = await Category.findByUsername(username);

    if (!exists) {
      ctx.body = "none data";
      return;
    }

    ctx.body = exists;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const add = async (ctx) => {
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    title: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
  }

  const { username, title } = ctx.request.body;

  const category = new Category({
    username,
    title,
  });

  try {
    await category.save();
    ctx.body = category;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.request.body;

  try {
    await Category.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};
