/** @format */

import actionTypes from "./actionTypes";

export const setCurSongId = (songId) => {
  return {
    type: actionTypes.SET_CUR_SONG_ID,
    songId,
  };
};
