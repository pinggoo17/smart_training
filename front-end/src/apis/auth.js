import base from "./base";

export const signUpAPI = ({ username }) =>
  base.post("/api/auth/register", { username });

export const signInAPI = ({ username }) =>
  base.post("/api/auth/login", { username });
