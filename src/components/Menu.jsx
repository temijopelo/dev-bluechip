import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCommentSms } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import img01 from "../assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import img02 from "../assets/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg";
import img03 from "../assets/jeffery-erhunse-BQMZ5ligqps-unsplash.jpg";
import img04 from "../assets/joshua-rawson-harris-dN67hPE5KWY-unsplash.jpg";

const DisplayIcon = (props) => {
  return (
    <div className="inline-block shadow-md mb-2 text-basecolor text-center  rounded-full w-[50px] h-[50px]  bg-white">
      <a href="">
        <FontAwesomeIcon className="p-4" icon={props.icon} />
      </a>
    </div>
  );
};

const menuItems = [
  {
    id: 1,
    icon: faCompass,
  },
  {
    id: 2,
    icon: faStar,
  },

  {
    id: 3,
    icon: faCommentSms,
  },
  {
    id: 4,
    icon: faArrowTrendUp,
  },
  {
    id: 5,
    icon: faEarthAmericas,
  },
  {
    id: 6,
    icon: faChartSimple,
  },
];

const Menu = () => {
  return (
    <>
      <div className=" flex flex-col justify-between  w-28 p-3 items-center border-r-2 border-bordercolor">
        <div className="flex flex-col gap-3 pt-2 h-[95vh]">
          {menuItems.map((iconItem) => {
            return <DisplayIcon key={iconItem.id} icon={iconItem.icon} />;
          })}
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative w-[50px] h-[50px] rounded-full">
            <img
              src={img01}
              alt=""
              srcset=""
              className="rounded-full w-full h-full object-cover object-right-top"
            />
            <span class="absolute top-1 right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-3 w-3 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"></span>
          </div>
          <div className="w-[50px] h-[50px] rounded-full">
            <img
              src={img02}
              alt=""
              srcset=""
              className="rounded-full w-full h-full object-cover object-right-top"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-full">
            <img
              src={img03}
              alt=""
              srcset=""
              className="rounded-full w-full h-full object-cover object-right-top"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-full">
            <img
              src={img04}
              alt=""
              srcset=""
              className="rounded-full w-full h-full object-cover object-right-top"
            />
          </div>
          <div className="inline-block text-basecolor text-center rounded-full w-[50px] h-[50px] bg-white">
            <a href="">
              <FontAwesomeIcon className="p-4" icon={faCirclePlus} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
