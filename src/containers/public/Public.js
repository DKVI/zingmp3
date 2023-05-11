/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { SlidebarLeft, SlidebarRight } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex bg-[#ced9d9]">
      <div className="w-[240px] flex-none border-green-500 border">
        <SlidebarLeft />
      </div>
      <div className="flex border-red-500 border flex-auto">
        <Outlet />
      </div>
      <div className="w-[329px] flex-none border-blue-500 border">
        <SlidebarRight />
      </div>
    </div>
  );
};

export default Public;
