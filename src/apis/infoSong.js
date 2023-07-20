/** @format */

import instance from "../axios";

export const getInfoSong = (songId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await instance({
        url: "/infosong",
        method: "get",
        params: { id: songId },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
