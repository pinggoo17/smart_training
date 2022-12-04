import base from "./base";

export const categoryListAPI = ({ username }) =>
  base.post("/api/category/", { username });

export const categoryAddAPI = ({ username, title }) =>
  base.post("/api/category/add", { username, title });

export const categoryRemoveAPI = ({ id }) =>
  base.post("/api/category/remove", { id });

export const getUserSTRAPI = ({ username }) =>
  base.post("api/category/getSTR", { username });

export const categoryUpdateAPI = ({ id, userParameter }) =>
  base.put("/api/category/update", { id, userParameter });

export const categoryItemListAPI = ({ username, categoryId, targetDate }) =>
  base.post("/api/categoryItem", { username, categoryId, targetDate });

export const categoryItemAddAPI = ({ username, categoryId, power, time }) =>
  base.post("/api/categoryItem/add", { username, categoryId, power, time });

export const categoryItemParamAPI = ({ categoryId }) => {
  return base.post("/api/categoryItem/userParam", { categoryId });
};
