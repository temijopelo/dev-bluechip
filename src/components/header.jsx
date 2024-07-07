import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="flex p-3 justify-between items-center  border-b-2 border-bordercolor xl:p-5 ">
        <div className="flex items-center xl:px-3 xl:gap-7">
          <span className="w-[50px] h-[50px] text-center   bg-white rounded-full">
            <a
              href="https://github.com/temijopelo/dev-bluechip/tree/main"
              className="inline-block "
            >
              <FontAwesomeIcon className=" text-[#C3CAD9] p-4 " icon={faBars} />
            </a>
          </span>
          <h3 className="p-4 font-bold text-textcolor xl:text-lg xl:font-medium">
            Constructor
          </h3>
        </div>

        <div className=" ">
          <ul className=" font-medium text-navcolor px-2 hidden xl:flex xl:gap-7 xl:text-xs">
            <li>
              <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
                Dashboard
              </a>
            </li>
            <li>
              <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
                About Us
              </a>
            </li>
            <li>
              <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
                News
              </a>
            </li>
            <li>
              <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
                User Policy
              </a>
            </li>
            <li>
              <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
                Contacts
              </a>
            </li>
            <li>
              <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
                <FontAwesomeIcon icon={faEllipsis} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="hidden xl:bg-white xl:inline-block xl:p-3 xl:rounded-full">
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
          <div className="flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full md:bg-transparent">
            <FontAwesomeIcon icon={faCircleUser} className="text-basecolor" />
          </div>
          <p className="hidden md:text-sm xl:p-2 md:inline-block ">
            Clayton Santos
          </p>

          <div className="hidden md:inline xl:relative  xl:w-[50px] xl:h-[50px] md:bg-white md:rounded-full">
            <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-basecolor p-4 text-lg "
              />
            </a>
          </div>

          <div className="hidden md:inline md:relative  md:w-[50px] md:h-[50px] md:bg-white md:rounded-full">
            <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
              <FontAwesomeIcon
                icon={faBell}
                className="text-basecolor p-4 text-lg "
              />
              <span class="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold rounded-full h-3 w-3 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"></span>
            </a>
          </div>

          <div className="hidden md:block md:relative  md:w-[50px] md:h-[50px] md:bg-white md:rounded-full">
            <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-basecolor p-4 text-lg "
              />
            </a>
          </div>
          <div className="md:flex md:justify-center md:items-center hidden md:relative  md:w-[50px] md:h-[50px] md:bg-white md:rounded-full xl:hidden">
            <a href="https://github.com/temijopelo/dev-bluechip/tree/main">
              <FontAwesomeIcon
                icon={faXmark}
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
