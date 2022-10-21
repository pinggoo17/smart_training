import base from "./base";

export const categoryListAPI = ({ username }) =>
  base.post("/api/category/", { username });

export const categoryAddAPI = ({ username, title }) =>
  base.post("/api/category/add", { username, title });

export const categoryRemoveAPI = ({ id }) =>
  base.post("/api/category/remove", { id });

export const categoryItemListAPI = ({ username, categoryId, targetDate }) =>
  base.post("/api/categoryItem", { username, categoryId, targetDate });

export const categoryItemAddAPI = ({ username, categoryId, power }) =>
  base.post("/api/categoryItem/add", { username, categoryId, power });
