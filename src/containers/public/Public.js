/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { Player, SlidebarLeft, SlidebarRight } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex flex-col bg-main-300 min-h-screen">
      <div className="flex flex-auto">
        <div className="w-[240px] flex-none border-green-500 border">
          <SlidebarLeft />
        </div>
        <div className="flex border-red-500 border flex-auto">
          <Outlet />
        </div>
        <div className="w-[329px] flex-none border-blue-500 border 1600:flex hidden animate-slide-left">
          <SlidebarRight />
        </div>
      </div>
      <div className="flex-none h-[90px]">
        <Player />
      </div>
    </div>
  );
};

export default Public;
