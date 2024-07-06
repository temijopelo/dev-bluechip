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
    <div className=" w-[40%] bg-white">
      <div className="  flex justify-between items-stretch px-4 py-2 ">
        <span className="w-[50px] h-[50px] text-center shadow-md   bg-white rounded-full">
          <a href="" className="inline-block ">
            <FontAwesomeIcon className=" text-[#C3CAD9] p-4 " icon={faRotate} />
          </a>
        </span>
        <ul className="flex  gap-4 text-xs font-bold  ">
          <li className="py-6  hover:text-blue-700 hover:border-b-2 hover:border-blue-700 active:text-blue-700">
            <a href="">Your Expenses</a>
          </li>
          <li className="py-6  hover:text-blue-700 hover:border-b-2 hover:border-blue-700 active:text-blue-700">
            <a href="">Receipts to the Account</a>
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
      <div>
        <img src={img01} alt="" />
      </div>

      <div>
        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faFaceGrin} />
              <p>Entertainment 400$</p>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faBagShopping} />
              <p>Supermarkets 340$</p>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faBurger} />
              <p>Fast Food 240$</p>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
              <p>Pharmatecies 140$</p>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faMobileScreen} />
              <p>Mobile Connection 30$</p>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faGasPump} />
              <p>Fuel 540$</p>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faDumbbell} />
              <p>Fitness 240$</p>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faMugSaucer} />
              <p>Cafe 140$</p>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContectDisplay;
