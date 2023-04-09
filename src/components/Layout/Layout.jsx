import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

const Layout = () => {
  return (
    <div>
      <div className="md:mx-4">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
