import React from "react";
import Bodyhero from "../components/Bodyhero";
import BottomIcons from "../components/BottomIcons";
import ContectDisplay from "../components/ContectDisplay";
import CardContainer from "../components/CardContainer";

const Mainbody = () => {
  return (
    <div className="flex flex-col p-3 lg:grid lg:grid-cols-12 lg:mt-5">
      <div className="order-1 p-2 col-start-1 col-end-6 row-start-1 row-end-2">
        <CardContainer />
      </div>
      <div className="order-3 p-2 col-start-6 col-end-13 row-start-1 row-end-4">
        <Bodyhero />
      </div>
      <div className="order-2 mt-10 col-span-5 p-2 row-start-2 row-end-6">
        <ContectDisplay />
      </div>
      <div className="order-4 col-span-7 p-2 row-start-4 row-end-6">
        <BottomIcons />
      </div>
    </div>
  );
};

export default Mainbody;
