import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      {/* <Sidebar/> */}

      <div className="w-full dark:bg-gray-800 dark:text-white">
        {/* <Header/> */}
        <div className="outlet">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
