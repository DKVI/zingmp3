/** @format */

import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);

  useEffect(() => {
    const sliderItems = document.querySelectorAll(".slider-items");
    let sliderAnimation;
    let first = 0;
    let mid = 1;
    let last = 2;
    if (sliderItems.length !== 0) {
      sliderItems.forEach((item) => {
        item.style.display = "none";
      });

      sliderAnimation = setInterval(() => {
        sliderItems.forEach((item) => {
          item.style.display = "none";
        });
        first++;
        mid++;
        last++;
        if (last === sliderItems.length - 1) {
          first = 0;
          mid = 1;
          last = 2;
        }
        sliderItems[first].style.display = "flex";
        sliderItems[mid].style.display = "flex";
        sliderItems[last].style.display = "flex";
        sliderItems[last].classList.add("animate-move-to-right");
        console.log({ first, mid, last });
      }, 3000);
    }
    return () => {
      console.log(true);
      clearInterval(sliderAnimation);
    };
  }, [banner]);
  return (
    <div className="flex gap-4 w-full overflow-hidden px-[59px] pt-8 ml-[-16px]">
      {banner?.map((item) => (
        <img
          key={item?.encodeId}
          src={item?.banner}
          className="flex-1 object-contain w-1/3 rounded-lg slider-items"
        />
      ))}
    </div>
  );
};

export default Slider;
