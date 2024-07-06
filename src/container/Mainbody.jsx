import React from "react";
import Bodyhero from "../components/Bodyhero";
import BottomIcons from "../components/BottomIcons";
import ContectDisplay from "../components/ContectDisplay";

const Mainbody = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="start">
        <Bodyhero />
      </div>
      <BottomIcons />
      <ContectDisplay />
    </div>
  );
};

export default Mainbody;
