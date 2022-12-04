import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Detail from "../pages/Detail";
import Shop from "../pages/Shop";

import ProtectedRoute from "./ProtectedRoute";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute redirectPath="/login" />}>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default MainRoutes;
