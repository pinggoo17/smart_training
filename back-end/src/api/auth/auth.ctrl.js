import Joi from "joi";
import User from "../../models/user";

export const register = async (ctx) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
  });

  const reuslt = schema.validate(ctx.request.body);
  if (reuslt.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username } = ctx.request.body;
  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; //conflict
      return;
    }

    const user = new User({
      username,
      userLevel: 1,
      userEXP: 0,
      userMoney: 0,
      userWeapon: "w0",
      userBackImg: "b1",
    });

    await user.save();

    const data = user.toJSON();
    ctx.body = data;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  const { username } = ctx.request.body;

  if (!username) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.toJSON();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const saveState = async (ctx) => {
  const { username, userLevel, userEXP, userMoney, userWeapon, userBackImg } =
    ctx.request.body;

  // console.log(ctx.request.body);

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      ctx.status = 401;
      return;
    }

    user.userLevel = userLevel;
    user.userEXP = userEXP;
    user.userMoney = userMoney;
    user.userWeapon = userWeapon;
    user.userBackImg = userBackImg;

    await user.save();

    ctx.body = user.toJSON();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const getState = async (ctx) => {
  const { username } = ctx.request.body;

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.toJSON();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async (ctx) => {};
