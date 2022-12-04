import base from "./base";

export const signUpAPI = ({ username }) =>
  base.post("/api/auth/register", { username });

export const signInAPI = ({ username }) =>
  base.post("/api/auth/login", { username });

export const getUserStatusAPI = ({ username }) =>
  base.post("api/auth/getState", { username });

export const updateUserStatusAPI = ({
  username,
  userLevel,
  userEXP,
  userMoney,
  userWeapon,
  userBackImg,
}) =>
  base.post("api/auth/saveState", {
    username,
    userLevel,
    userEXP,
    userMoney,
    userWeapon,
    userBackImg,
  });
