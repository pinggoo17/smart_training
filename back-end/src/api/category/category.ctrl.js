import Joi from "joi";
import CategoryItem from "../../models/categoryItem";
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
    const existsCategoryItems = await CategoryItem.findbyUserName(username);

    const categoryList = exists.map((item) =>
      JSON.stringify(item._id).replaceAll('"', "")
    );

    const titleList = exists.map((item) => item.title);

    const dateList = categoryList.map((category) => {
      let lastDate = "";
      existsCategoryItems.map((item) => {
        if (category === item.categoryId) {
          lastDate = JSON.stringify(item.date)
            .split("T")[0]
            .replaceAll('"', "");
        }
      });
      return lastDate;
    });

    const totalPowerList = categoryList.map((categoryId) => {
      let totalPower = 0;
      existsCategoryItems.map((item) => {
        if (item.categoryId === categoryId) {
          totalPower += item.power;
        }
      });

      return totalPower;
    });

    const result = categoryList.map((item, index) => {
      let obj = {
        category: categoryList[index],
        title: titleList[index],
        totalPower: totalPowerList[index],
        username: username,
        recentDate: dateList[index],
      };

      return obj;
    });

    if (!exists) {
      ctx.body = "none data";
      return;
    }

    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const getUserSTR = async (ctx) => {
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
    const exist_items = await CategoryItem.findbyUserName(username);

    let dateList = exist_items.map(
      (item) => JSON.stringify(item.date).replaceAll('"', "").split("T")[0]
    );

    dateList = [...new Set(dateList)];

    if (!exist_items) {
      ctx.body = "none data";
      return;
    }

    // console.log(dateList.length);
    ctx.body = dateList.length;
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
    userParameter: 0.1,
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

export const update = async (ctx) => {
  const { id, userParameter } = ctx.request.body;

  console.log(ctx.request.body);

  try {
    const result = await Category.findByIdAndUpdate(
      id,
      {
        userParameter: userParameter,
      },
      {
        new: true,
      }
    );

    // console.log("result: ", result);

    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};
