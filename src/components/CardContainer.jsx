import React from "react";
import logo from "../assets/mastercard.logo-removebg-preview.png";
import logo02 from "../assets/visalogo-removebg-preview.png";

const CardContainer = () => {
  return (
    <div className="flex flex-wrap xl:justify-between">
      <div className="flex w-screen flex-col justify-between gap-2 py-5 px-10 text-white h-[15rem]  bg-gradient-to-b from-[#FDB061] to-[#F4DA50] rounded-md shadow-2xl shadow-orange-200 xl:w-[70%]">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">$ 6 322</p>
          <p className="text-sm font-medium">My Bank</p>
        </div>
        <div>
          <p className="text-sm font-medium">**** **** **** 4456</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Lloyd Lyons</p>
          <img className="w-[40px] h-[30px]" src={logo} alt="" />
        </div>
      </div>

      <div className="mt-[-1rem] xl:mt-0">
        <ul className="flex  items-center xl:space-y-4 xl:flex-col">
          <li className="px-4 hover:border-l-2 hover:border-red-400 border-l-2 transition-all duration-1000 border-transparent">
            <div className="w-[70px] h-[40px] bg-gradient-to-b from-[#6246FF] to-[#FFB9B9] rounded-sm relative">
              <p className="text-[10px] font-bold text-white p-1">4456</p>

              <img
                className="w-[25px] h-[15px] absolute right-2 bottom-2"
                src={logo}
                alt=""
              />
            </div>
          </li>
          <li className="px-4 hover:border-l-2 hover:border-red-400  border-l-2 transition-all duration-1000 border-transparent">
            <div className="w-[70px] h-[40px] bg-gradient-to-b from-[#FDB061] to-[#F4DA50] rounded-sm relative">
              <p className="text-[10px] font-bold text-white p-1">6753</p>

              <img
                className="w-[25px] h-[15px] absolute right-2 bottom-2"
                src={logo}
                alt=""
              />
            </div>
          </li>
          <li className="px-4 hover:border-l-2 hover:border-red-400 border-l-2 transition-all duration-1000 border-transparent">
            <div className="w-[70px] h-[40px] bg-gradient-to-b from-[#3B3B3B] to-[#767676] rounded-sm relative">
              <p className="text-[10px] font-bold text-white p-1">9875</p>

              <img
                className=" w-[20px] h-[10px] absolute right-2 bottom-2"
                src={logo02}
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardContainer;
