import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1-1 border-1px-white ${className || ""}`}>
      <div className="text-21 typographybodycaption-14-semi-bold">{children}</div>
    </div>
  );
}

export default Frame1;
