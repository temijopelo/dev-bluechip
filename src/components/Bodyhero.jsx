import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import img01 from "../assets/starbuck-removebg-preview.png";
import img02 from "../assets/walmart-removebg-preview.png";
import img03 from "../assets/netflix-removebg-preview.png";
import img04 from "../assets/apple-removebg-preview.png";
import img05 from "../assets/nike-removebg-preview.png";

const DisplayListContent = (props) => {
  return (
    <div className="flex justify-between items-center p-3 overflow-y-auto border-t-2 border-bordercolor">
      <div className="flex items-center gap-3 p-2 ">
        <div className="h-[50px] w-[50px] flex p-2 justify-center items-center bg-[#ebadeb] rounded-full">
          <img className=" w-[50px]  object-cover  " src={props.img} alt="" />
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-3">
          <h3 className="space-x-3 min-w-30 text-sm font-medium text-basecolor">
            {props.title}
          </h3>
          <p className="text-sm text-textcolor font-semibold">
            {props.description}
          </p>
        </div>
        <p className="hidden md:inline-block text-green-500 bg-[#e6e8ec] rounded-full p-2 text-[10px] font-semibold">
          {props.badge}
        </p>
      </div>
      <div className="flex gap-5">
        <p className="text-[10px] p-2 bg-[#e6e8ec] font-semibold rounded-full">
          {props.smallBadge}
        </p>
        <div className="hidden md:inline-block shadow-md mb-2 text-basecolor text-center  rounded-full w-[30px] h-[30px]  bg-white">
          <a href="">
            <FontAwesomeIcon icon={faEllipsis} />
          </a>
        </div>
      </div>
    </div>
  );
};

const listDate = [
  {
    id: 1,
    img: img01,
    title: "Starbucks Corporation",
    description: "Buying Coffee",
    badge: "+$10 Cashback",
    smallBadge: "-$70",
    icon: faEllipsis,
    bgColor: "#106E33",
  },
  {
    id: 2,
    img: img02,
    title: "Walmart, Inc. ",
    description: "Shopping Wallmart",
    badge: "",
    smallBadge: "-$90",
    icon: faEllipsis,
    bgColor: "#3361FF",
  },
  {
    id: 3,
    img: img03,
    title: "Netflix",
    description: "Netflix Subscriptions",
    badge: "+$10 Cashback",
    smallBadge: "-$90",
    icon: faEllipsis,
    bgColor: "#E4E7F0",
  },
  {
    id: 4,
    img: img04,
    title: "Apple",
    description: "Buying a MacBook",
    badge: "+$8 Cashback",
    smallBadge: "-$90",
    icon: faEllipsis,
    bgColor: "#FFCB33",
  },
  {
    id: 5,
    img: img05,
    title: "Nike, Inc. ",
    description: "Shopping at Nike Store",

    smallBadge: "-$90",
    icon: faEllipsis,
    bgColor: "#8833FF",
  },
  {
    id: 6,
    img: img01,
    title: "Walmart, Inc. ",
    description: "Shopping Wallmart",
    badge: "+$22 Cashback",
    smallBadge: "-$90",
    icon: faEllipsis,
  },
  {
    id: 7,
    img: img02,
    title: "Starbucks Corporation",
    description: "Buying Coffee",
    badge: "+$10 Cashback",
    smallBadge: "-$70",
    icon: faEllipsis,
  },
  {
    id: 8,
    img: img03,
    title: "Starbucks Corporation",
    description: "Buying Coffee",
    badge: "+$10 Cashback",
    smallBadge: "-$70",
    icon: faEllipsis,
  },
];

const Bodyhero = () => {
  return (
    <>
      <div className="w-[100%] bg-white rounded-2xl min-h-[87vh] ">
        <div className=" flex justify-between items-center px-4 py-2 ">
          <span className="flex justify-center items-center w-[30px] h-[30px] text-center shadow-md   bg-white rounded-full">
            <a href="" className="inline-block ">
              <FontAwesomeIcon
                className=" text-[#C3CAD9] p-4 "
                icon={faArrowDownUpAcrossLine}
              />
            </a>
          </span>
          <ul className="flex  gap-4 text-xs font-bold  ">
            <li className="py-6  hover:text-purple-600 hover:border-b-2 hover:border-purple-600 active:text-purple-600 border-b-2 border-transparent">
              <a href="">
                Recent{" "}
                <span className="hidden md:inline-block">Operations</span>
              </a>
            </li>
            <li className="py-6  hover:text-purple-600 hover:border-b-2 hover:border-purple-600 active:text-purple-600 border-b-2 border-transparent">
              <a href="">Income</a>
            </li>
            <li className="py-6  hover:text-purple-600 hover:border-b-2 hover:border-purple-600 active:text-purple-600 border-b-2 border-transparent">
              <a href="">Costs</a>
            </li>
          </ul>
          <span className="flex justify-center items-center w-[30px] h-[30px] text-center shadow-md   bg-white rounded-full">
            <a href="" className="inline-block ">
              <FontAwesomeIcon
                className=" text-[#C3CAD9] p-4 "
                icon={faEllipsis}
              />
            </a>
          </span>
        </div>

        <div className="h-[33rem] overflow-auto ">
          {listDate.map((heroItem) => {
            return (
              <DisplayListContent
                key={heroItem.id}
                img={heroItem.img}
                title={heroItem.title}
                description={heroItem.description}
                badge={heroItem.badge}
                smallBadge={heroItem.smallBadge}
                bgColor={heroItem.bgColor}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bodyhero;
