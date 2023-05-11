/** @format */

import icons from "./icons";

const { TbChartArcs, MdOutlineLibraryMusic, HiOutlineChartPie, MdOutlineFeed } =
  icons;

export const sideBarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icon: <MdOutlineLibraryMusic size={24} fontWeight={300} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icon: <TbChartArcs size={24} fontWeight={300} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: <HiOutlineChartPie size={24} fontWeight={300} />,
  },
  {
    path: "follow",
    text: "Radio",
    icon: <MdOutlineFeed size={24} fontWeight={300} />,
  },
];
