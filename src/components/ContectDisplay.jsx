import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faRotate,
  faFaceGrin,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import img01 from "../assets/dev-bluechip-removebg-preview.png";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faPrescriptionBottleMedical } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ContectDisplay = () => {
  return (
    <div className="rounded-2xl bg-white">
      <div className="  flex justify-between items-center px-4 py-2 ">
        <span className="flex justify-center items-center w-[30px] h-[30px] text-center shadow-md   bg-white rounded-full">
          <a href="" className="inline-block ">
            <FontAwesomeIcon className=" text-[#C3CAD9] p-4 " icon={faRotate} />
          </a>
        </span>
        <ul className="flex gap-4 text-xs font-bold  ">
          <li className="py-6  hover:text-purple-700 hover:border-b-2 hover:border-purple-700 active:text-purple-700">
            <a href="">Your Expenses</a>
          </li>
          <li className="py-6  hover:text-purple-700 hover:border-b-2 hover:border-purple-700 active:text-purple-700 border-b-2 border-transparent">
            <a href="">
              Receipts{" "}
              <span className="hidden md:inline-block">to the Account</span>
            </a>
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
      <div className="flex justify-center items-center flex-col p-3 md:flex-row lg:flex-col">
        <div className="">
          <img src={img01} alt="" />
        </div>
        <div className="py-5 ">
          <ul className="flex px-2 flex-wrap justify-center text-xs  gap-4 md:flex-col lg:flex-row-reverse">
            <li className="border-2 shadow-md rounded-full xl:inline-block">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center "
                href=""
              >
                <FontAwesomeIcon className="text-[purple]" icon={faFaceGrin} />
                <p>Entertainment 400$</p>
              </a>
            </li>
            <li className="border-2 shadow-md rounded-full">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center"
                href=""
              >
                <FontAwesomeIcon className="text-[blue]" icon={faBagShopping} />
                <p>Supermarkets 340$</p>
              </a>
            </li>
            <li className="border-2 shadow-md rounded-full">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center"
                href=""
              >
                <FontAwesomeIcon className="text-[green]" icon={faBurger} />
                <p>Fast Food 240$</p>
              </a>
            </li>
            <li className="border-2 shadow-md rounded-full">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center"
                href=""
              >
                <FontAwesomeIcon
                  className="text-[orange]"
                  icon={faPrescriptionBottleMedical}
                />
                <p>Pharmatecies 140$</p>
              </a>
            </li>
            <li className="border-2 shadow-md rounded-full">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center"
                href=""
              >
                <FontAwesomeIcon
                  className="text-[#1a5454]"
                  icon={faMobileScreen}
                />
                <p>Mobile Connection 30$</p>
              </a>
            </li>
            <li className="border-2 shadow-md rounded-full">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center"
                href=""
              >
                <FontAwesomeIcon className="text-[red]" icon={faGasPump} />
                <p>Fuel 540$</p>
              </a>
            </li>
            <li className="border-2 shadow-md rounded-full">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center"
                href=""
              >
                <FontAwesomeIcon className="text-[pink]" icon={faDumbbell} />
                <p>Fitness 240$</p>
              </a>
            </li>
            <li className="border-2 shadow-md rounded-full">
              <a
                className="flex items-center justify-center p-2 text-textcolor  font-medium gap-2 md:justify-start xl:justify-center"
                href=""
              >
                <FontAwesomeIcon className="text-[yellow]" icon={faMugSaucer} />
                <p>Cafe 140$</p>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContectDisplay;
