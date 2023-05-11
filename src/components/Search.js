/** @format */

import React from "react";
import icons from "../ultis/icons";
const { FiSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex bg-[#dde4e4] rounded-[20px] overflow-hidden">
      <div className="flex items-center bg-[#dde4e4] pl-4">
        <FiSearch className="text-gray-600" />
      </div>
      <input
        type="text"
        className="bg-[#dde4e4] outline-none  w-full py-2 pr-4 pl-2 text-gray-600 text-[13px]"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
