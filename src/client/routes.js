import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/Userlist";

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={UserList} />
    </div>
  );
};

export default Routes;
