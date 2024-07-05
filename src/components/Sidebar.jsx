import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import img01 from "../assets/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg";

const Sidebar = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>

      <div>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>

      <div className="relative">
        <img
          src={img01}
          alt=""
          className="w-[110px] h-[110px] rounded-full p-2 border border-2 border-purple-800 object-cover"
        />
        <span class="absolute top-10 right-1 bg-[#FF6633] text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
          <FontAwesomeIcon className="p-4" icon={faCirclePlus} />
        </span>
      </div>
    </>
  );
};

export default Sidebar;
