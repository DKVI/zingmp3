/** @format */

import axios from "../axios";

export const getHome = () =>
  new Promise(async (reslove, reject) => {
    try {
      const response = await axios({
        url: "/home",
        method: "get",
      });
      reslove(response);
    } catch {
      reject();
    }
  });
