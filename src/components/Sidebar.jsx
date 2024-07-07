import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import img01 from "../assets/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg";
import logo01 from "../assets/mastercard.logo-removebg-preview.png";
import logo02 from "../assets/visalogo-removebg-preview.png";
import img02 from "../assets/images-removebg-preview.png";

const Sidebar = () => {
  return (
    <>
      <div className="p-3 ">
        <div className="flex justify-between p-3">
          <div>
            <FontAwesomeIcon icon={faUser} className="text-basecolor" />
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsis} className="text-basecolor" />
          </div>
        </div>

        <div className=" relative flex justify-center">
          <img
            src={img01}
            alt=""
            className=" w-[110px] h-[110px] rounded-full p-2 border-2 border-purple-800 object-cover"
          />
          <span class="absolute top-12 right-[130px] bg-[#FF6633] text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon className="p-4" icon={faCirclePlus} size="" />
          </span>
        </div>
        <p className="text-center font-bold my-7 text-textcolor">
          Clayton Santos
        </p>

        <div className="text-basecolor p-5 flex justify-between">
          <h3 className="font-semibold text-sm text-textcolor">
            Accounts and Cards
          </h3>
          <FontAwesomeIcon icon={faEllipsis} className="text-basecolor" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center px-5">
            <div className="w-[70px] h-[40px] bg-gradient-to-b from-[#6246FF] to-[#FFB9B9] rounded-sm relative">
              <p className="text-[10px] font-bold text-white p-1">4456</p>

              <img
                className="w-[25px] h-[15px] absolute right-2 bottom-2"
                src={logo01}
                alt=""
              />
            </div>

            <div className="text-textcolor flex flex-col w-28 ">
              <h5 className="text-sm font-bold">Master Card</h5>

              <p className="text-sm font-bold">4 560 $</p>
            </div>

            <div className="bg-white rounded-full inline-block   text-basecolor shadow-md">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                size="sm"
                className="w-[20px] p-3 items-center h-[15px]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center px-5">
            <div className="w-[70px] h-[40px] bg-gradient-to-b from-[#FDB061] to-[#F4DA50] rounded-sm relative">
              <p className="text-[10px] font-bold text-white p-1">6753</p>

              <img
                className="w-[25px] h-[15px] absolute right-2 bottom-2"
                src={logo01}
                alt=""
              />
            </div>

            <div className="text-textcolor flex flex-col w-28">
              <h5 className="text-sm font-bold">Master Card</h5>

              <p className="text-sm font-bold">1 120 $</p>
            </div>

            <div className="bg-white rounded-full inline-block   text-basecolor shadow-md">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                size="sm"
                className="w-[20px] p-3 items-center h-[15px]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center px-5">
            <div className="w-[70px] h-[40px] bg-gradient-to-b from-[#3B3B3B] to-[#767676] rounded-sm relative">
              <p className="text-[10px] font-bold text-white p-1">9875</p>

              <img
                className=" w-[20px] h-[10px] absolute right-2 bottom-2"
                src={logo02}
                alt=""
              />
            </div>

            <div className="text-textcolor flex flex-col w-28">
              <h5 className="text-sm font-bold">Visa Black Card</h5>

              <p className="text-sm font-bold">345 $</p>
            </div>

            <div className="bg-white rounded-full inline-block   text-basecolor shadow-md">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                size="sm"
                className="w-[20px] p-3 items-center h-[15px]"
              />
            </div>
          </div>
        </div>

        <div className="text-basecolor p-5 flex justify-between mt-7 mb-3">
          <h3 className="font-semibold text-textcolor text-sm">Settings</h3>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-basecolor text-sm"
          />
        </div>

        <div className="px-5">
          <ul className="flex flex-col gap-4">
            <li className="flex gap-10 items-center ">
              <FontAwesomeIcon
                icon={faUser}
                className="w-[20px] p-3 items-center h-[15px] bg-white rounded-full inline-block   text-basecolor shadow-md"
              />
              <p className="text-textcolor font-medium text-sm">
                Personal information
              </p>
            </li>
            <li className="flex gap-10 items-center">
              <FontAwesomeIcon
                icon={faFile}
                className="w-[20px] p-3 items-center h-[15px] bg-white rounded-full inline-block   text-basecolor shadow-md"
              />
              <p className="text-textcolor font-medium text-sm">
                Documents and References
              </p>
            </li>
            <li className="flex gap-10 items-center">
              <FontAwesomeIcon
                icon={faLock}
                className="w-[20px] p-3 items-center h-[15px] bg-white rounded-full inline-block   text-basecolor shadow-md"
              />
              <p className="text-textcolor font-medium text-sm">
                Security & Codes
              </p>
            </li>
            <li className="flex gap-10 items-center">
              <FontAwesomeIcon
                icon={faGear}
                className="w-[20px] p-3 items-center h-[15px] bg-white rounded-full inline-block   text-basecolor shadow-md"
              />
              <p className="text-textcolor font-medium text-sm">
                Account settings
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-[#c9ad8c] flex flex-col gap-5 justify-center items-center p-4 mt-8 mx-8 rounded-lg">
          <img src={img02} alt="" className="w-[100px] h-[100px]" />

          <a href="#" className="text-red-700">
            Do you need help?
          </a>
          <p>1-800-MY-BANK</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
