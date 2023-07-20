/** @format */

import axios from "../axios";
export const getDetailSong = (songId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/song",
        params: { id: songId },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
