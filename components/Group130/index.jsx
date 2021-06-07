import React from "react";
import "./Group130.css";

function Group130(props) {
  const { rectangle62, text42, surname } = props;

  return (
    <div className="group-130">
      <img className="rectangle-62" src={rectangle62} />
      <div className="group-99">
        <div className="text-11 valign-text-middle typographyheadlineh4-extrabold-24">{text42}</div>
        <p className="surname typographybodycaption-14-semi-bold">{surname}</p>
      </div>
    </div>
  );
}

export default Group130;
