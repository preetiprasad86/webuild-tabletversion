import React from "react";
import "./Group27.css";

function Group27(props) {
  const { text55, ellipse1, name, bangaloreIndia, className } = props;

  return (
    <div className={`group-27-1 ${className || ""}`}>
      <div className="overlap-group2-7">
        <p className="text-24 typographybodysmall-12-regular">{text55}</p>
        <div className="group-120">
          <img className="ellipse-1" src={ellipse1} />
          <div className="group-140">
            <div className="name valign-text-middle typographyheadlineh5-extrabold-20">{name}</div>
            <div className="bangalore-india valign-text-middle typographybodysmall-12-regular">{bangaloreIndia}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group27;
