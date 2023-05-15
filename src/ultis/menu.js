/** @format */

import icons from "./icons";

const { TbChartArcs, MdOutlineLibraryMusic, HiOutlineChartPie, MdOutlineFeed } =
  icons;

export const sideBarMenu = [
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: <HiOutlineChartPie size={24} fontWeight={300} />,
  },
  {
    path: "Login",
    text: "login",
    icon: <HiOutlineChartPie size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    icon: <TbChartArcs size={24} fontWeight={300} />,
  },
  {
    path: "mymusic",
    text: "Cá nhân",
    end: true,
    icon: <MdOutlineLibraryMusic size={24} fontWeight={300} />,
  },
  {
    path: "follow",
    text: "Radio",
    icon: <MdOutlineFeed size={24} fontWeight={300} />,
  },
];
