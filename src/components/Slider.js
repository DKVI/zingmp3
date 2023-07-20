/** @format */

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurSongId } from "../store/actions";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(banner);
  }, [banner]);

  // useEffect(() => {
  //   const sliderItems = document.querySelectorAll(".slider-items");
  //   let sliderAnimation;
  //   let first = 0;
  //   let mid = 1;
  //   let last = 2;
  //   if (sliderItems.length !== 0) {
  //     sliderItems.forEach((item) => {
  //       item.style.display = "none";
  //     });

  //     sliderAnimation = setInterval(() => {
  //       sliderItems.forEach((item) => {
  //         item.style.display = "none";
  //       });
  //       first++;
  //       mid++;
  //       last++;
  //       if (last === sliderItems.length - 1) {
  //         first = 0;
  //         mid = 1;
  //         last = 2;
  //       }
  //       sliderItems[first].style.display = "flex";
  //       sliderItems[mid].style.display = "flex";
  //       sliderItems[last].style.display = "flex";
  //       document
  //         .querySelector(".animate-slide-right")
  //         ?.classList.remove("animate-slide-right");
  //       document
  //         .querySelector(".animate-slide-left2")
  //         ?.classList.remove("animate-slide-left2");
  //       document
  //         .querySelector(".animate-slide-left")
  //         ?.classList.remove("animate-slide-left");
  //       sliderItems[last].classList.add("animate-slide-right");
  //       sliderItems[first].classList.add("animate-slide-left");
  //       sliderItems[mid].classList.add("animate-slide-left2");
  //       console.log({ first, mid, last });
  //     }, 3000);
  //   }
  //   return () => {
  //     console.log(true);
  //     clearInterval(sliderAnimation);
  //   };
  // }, [banner]);
  const handleClickBanner = (e) => {
    if (e?.type === 4) {
      dispatch(setCurSongId(e?.encodeId));
    }
  };
  return (
    <div className="flex gap-4 w-full overflow-hidden px-[59px] pt-8 ml-[-16px]">
      {banner?.map((item) => (
        <img
          key={item?.encodeId}
          src={item?.banner}
          onClick={() => handleClickBanner(item)}
          className="flex-1 object-contain w-1/3 rounded-lg slider-items transition-all duration-[0.3s]"
        />
      ))}
    </div>
  );
};

export default Slider;
