import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5 border-b-2 border-bordercolor">
        <div className="flex gap-7 items-center px-3">
          <span className="w-[50px] h-[50px] text-center   bg-white rounded-full">
            <a href="" className="inline-block ">
              <FontAwesomeIcon className=" text-[#C3CAD9] p-4 " icon={faBars} />
            </a>
          </span>
          <h3 className="text-lg font-medium">Constructor</h3>
        </div>

        <div className="">
          <ul className="flex gap-7 text-xs text-navcolor px-2">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">User Policy</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faEllipsis} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-white inline-block p-3 rounded-full">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xs"
              className="pl-3 text-basecolor"
            />
            <input
              placeholder="Search Transactions and Documents"
              type="search"
              name=""
              id=""
              className="placeholder:text-xs border-none px-3 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <div>
            <FontAwesomeIcon icon={faCircleUser} className="text-basecolor" />
          </div>
          <p className="text-sm p-2">Clayton Santos</p>

          <div className="relative  w-[50px] h-[50px] bg-white rounded-full">
            <a href="">
              <FontAwesomeIcon
                icon={faBell}
                className="text-basecolor p-4 text-lg "
              />
              <span class="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold rounded-full h-3 w-3 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"></span>
            </a>
          </div>

          <div className=" w-[50px] h-[50px] bg-white rounded-full">
            <a href="">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-basecolor p-4 text-lg "
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
