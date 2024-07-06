import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Bodyhero = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />
      </div>
      <ul>
        <li>Recent Operations</li>
        <li>Income</li>
        <li>Costs</li>
      </ul>
      <div>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
};

export default Bodyhero;
