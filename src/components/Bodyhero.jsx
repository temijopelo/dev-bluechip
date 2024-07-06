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
      <div className="flex items-center gap-3">
        <img
          className="w-[50px] h-[50px] rounded-full p-3 bg-[#2aff86]"
          src={props.img}
          alt=""
        />
        <div className="flex gap-3">
          <h3 className="space-x-3 min-w-30 text-sm font-medium text-basecolor">
            {props.title}
          </h3>
          <p className="text-sm text-textcolor font-semibold">
            {props.description}
          </p>
        </div>
        <p className="text-green-500 bg-[#e6e8ec] rounded-full p-2 text-[10px] font-semibold">
          {props.badge}
        </p>
      </div>
      <div className="flex gap-5">
        <p className="text-[10px] p-2 bg-[#e6e8ec] font-semibold rounded-full">
          {props.smallBadge}
        </p>
        <div className="inline-block shadow-md mb-2 text-basecolor text-center  rounded-full w-[30px] h-[30px]  bg-white">
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
      <div className="w-[55%] bg-white rounded-2xl ">
        <div className=" flex justify-between items-stretch px-4 py-2 ">
          <span className="w-[50px] h-[50px] text-center shadow-md   bg-white rounded-full">
            <a href="" className="inline-block ">
              <FontAwesomeIcon
                className=" text-[#C3CAD9] p-4 "
                icon={faArrowDownUpAcrossLine}
              />
            </a>
          </span>
          <ul className="flex  gap-4 text-xs font-bold  ">
            <li className="py-6  hover:text-blue-700 hover:border-b-2 hover:border-blue-700 active:text-blue-700">
              <a href="">Recent Operations</a>
            </li>
            <li className="py-6  hover:text-blue-700 hover:border-b-2 hover:border-blue-700 active:text-blue-700">
              <a href="">Income</a>
            </li>
            <li className="py-6  hover:text-blue-700 hover:border-b-2 hover:border-blue-700 active:text-blue-700">
              <a href="">Costs</a>
            </li>
          </ul>
          <span className="w-[50px] h-[50px] text-center shadow-md   bg-white rounded-full">
            <a href="" className="inline-block ">
              <FontAwesomeIcon
                className=" text-[#C3CAD9] p-4 "
                icon={faEllipsis}
              />
            </a>
          </span>
        </div>

        <div className="h-[30rem] overflow-auto ">
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
