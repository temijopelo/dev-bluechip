import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";
import man3 from "../assets/man3.jpg";
import obj1 from "../assets/twitterdev.png";
import obj2 from "../assets/wechat.png";
import obj3 from "../assets/googledriveimg.png";

const BottomIcons = () => {
  return (
    <>
      <div className="w-[100%] flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-6 w-[100%]">
            <div className="flex flex-col w-[50%] p-10 gap-2 bg-white rounded-xl justify-center items-center">
              <FontAwesomeIcon
                className="text-blue-600"
                size="2xl"
                icon={faGlobe}
              />
              <h4 className="text-textcolor text-sm font-medium">Internet</h4>
            </div>
            <div className="flex flex-col w-[50%] p-3 gap-2 bg-white rounded-xl justify-center items-center">
              <FontAwesomeIcon
                className="text-blue-600"
                size="2xl"
                icon={faMobileScreen}
              />
              <h4 className="text-textcolor text-sm font-medium">Internet</h4>
            </div>
          </div>
          <div className="flex flex-col gap-9 w-[100%] xl:w-[80%] bg-white justify-center items-center p-7 rounded-xl">
            <h4 className="text-textcolor text-xs font-semibold">
              Transfer Money to Organizations
            </h4>
            <div className="flex gap-2">
              <img
                className="w-[50px] h-[50px] rounded-full object-cover object-center"
                src={obj1}
                alt=""
                srcset=""
              />
              <img
                className="w-[50px] h-[50px] rounded-full object-cover object-center"
                src={obj2}
                alt=""
                srcset=""
              />
              <img
                className="w-[50px] h-[50px] rounded-full object-cover object-center"
                src={obj3}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="order-2 md:order-none flex flex-col gap-9 w-[100%] xl:w-[80%] bg-white justify-center items-center p-7 rounded-xl">
            <h4 className="text-textcolor text-xs font-semibold">
              Transfer Money to People
            </h4>
            <div className="flex gap-2">
              <img
                className="w-[50px] h-[50px] rounded-full object-cover object-center"
                src={man1}
                alt=""
              />
              <img
                className="w-[50px] h-[50px] rounded-full object-cover object-center"
                src={man2}
                alt=""
              />
              <img
                className="w-[50px] h-[50px] rounded-full object-cover object-center"
                src={man3}
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-6 w-[100%] order-1 xl:order-none">
            <div className="flex flex-col w-[50%] p-10 gap-2 bg-white rounded-xl justify-center items-center">
              <FontAwesomeIcon
                className="text-blue-600"
                size="2xl"
                icon={faTv}
              />
              <h4 className="text-textcolor text-sm font-medium">Internet</h4>
            </div>
            <div className="flex flex-col w-[50%] p-10 gap-2 bg-white rounded-xl justify-center items-center">
              <FontAwesomeIcon
                className="text-blue-600"
                size="2xl"
                icon={faGamepad}
              />
              <h4 className="text-textcolor text-sm font-medium">Internet</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomIcons;
