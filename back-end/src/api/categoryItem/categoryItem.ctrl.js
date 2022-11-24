import Joi from "joi";
import CategoryItem from "../../models/categoryItem";
import Category from "../../models/category";

export const userParam = async (ctx) => {
  const { categoryId } = ctx.request.body;

  try {
    const exists = await Category.findOne({
      where: {
        categoryId,
      },
    });

    if (!exists) {
      ctx.body = "none data";
      return;
    }

    ctx.body = exists.userParameter;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  // const schema = Joi.object().keys({
  //   username: Joi.string().required(),
  //   categoryId: Joi.string().required(),
  // });

  // const result = schema.validate(ctx.request.body);

  // if (result.error) {
  //   ctx.status = 400;
  //   ctx.body = result.error;
  // }

  // const { username, categoryId, targetDate } = ctx.request.body;
  const { username, categoryId } = ctx.request.body;

  // console.log({ username, categoryId, targetDate });

  // date classification needed.
  try {
    const exists = await CategoryItem.findByUserCategory({
      username,
      categoryId,
    });

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
    categoryId: Joi.string().required(),
    power: Joi.number().required(),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
  }

  const { username, categoryId, power } = ctx.request.body;

  const categoryItem = new CategoryItem({
    username,
    categoryId,
    power,
  });

  try {
    await categoryItem.save();
    ctx.body = categoryItem;
  } catch (e) {
    ctx.throw(500, e);
  }
};
