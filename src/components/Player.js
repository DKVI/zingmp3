/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
const Player = () => {
  const curSongId = "Z6W9CA9D";
  const [songInfo, setSongInfo] = useState(null);
  useEffect(() => {
    const fetchSong = async () => {
      const response = await apis.getInfoSong(curSongId);
      console.log(response);
      if (response?.data.err === 0) {
        setSongInfo((prev) => {
          const result = response.data.data;
          console.log(result);
          return result;
        });
      }
    };
    fetchSong();
  }, [curSongId]);
  return (
    <div className="bg-main-400 h-full px-5 flex justify-between">
      <div className="w-[30%] flex-auto border border-red-500 flex items-center gap-4">
        <img
          src={songInfo?.thumbnail}
          alt=""
          className="w-16 h-16 rounded-md object-cover"
        />
        <div className="flex flex-col">
          <span className="text-[16px]">{songInfo?.album.title}</span>
          <span className="text-[14px] opacity-[0.6]">{songInfo?.artistsNames}</span>
        </div>
      </div>
      <div className="w-[40%] border border-red-500">Main</div>
      <div className="w-[30%] flex-auto border border-red-500">Volume</div>
    </div>
  );
};

export default Player;
