/** @format */

import React from "react";
import icons from "../ultis/icons";
import { AiOutlineArrowRight } from "react-icons/ai";
import Search from "./Search";
const { AiOutlineArrowLeft, BsArrowLeft, BsArrowRight } = icons;
const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-5 w-1/2">
        <div className="flex gap-5">
          <span className="flex items-center">
            <BsArrowLeft size={24} className="opacity-50 " />
          </span>
          <span className="flex items-center">
            <BsArrowRight size={24} className="opacity-50 " />
          </span>
        </div>
        <div className="w-full">
          <Search />
        </div>
      </div>
      <div>Login</div>
    </div>
  );
};

export default Header;
