/** @format */
import logo from "../assets/logo-light.svg";
import React from "react";
import { sideBarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";
import icons from "../ultis/icons";

const notActiveStyle =
  "text-[#32323d] py-2 px-[25px] font-bold flex items-center gap-1 text-[13px]";
const activeStyle =
  "py-2 px-[25px] font-bold flex text-[#0f7070] items-center gap-1 text-[13px] bg-[#e7ecec]";

const SlidebarLeft = () => {
  return (
    <div className="bg-main-200 min-h-full">
      <div className="w-full py-[15px] px-[25px] flex">
        <img src={logo} alt="logo" className="w-[120px] h-10" />
      </div>
      <div className="flex flex-col">
        {sideBarMenu.map((item) => {
          return (
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return isActive ? activeStyle : notActiveStyle;
              }}
              key={item.path}
            >
              <span>{item.icon}</span>
              {item.text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SlidebarLeft;
