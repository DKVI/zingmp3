/** @format */

import React, { useEffect } from "react";
import { Header } from "../../components";
import * as apis from "../../apis";
const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await apis.getHome();
      console.log(response);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full overflow-y-auto">
      <div className="h-[70px] border border-red-300 px-[59px] flex items-center">
        <Header />
      </div>
    </div>
  );
};

export default Home;
