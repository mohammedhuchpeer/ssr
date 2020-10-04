import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/Userlist";

const Routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/user",
    component: UserList,
  },
];

export default Routes;
