import React from "react";
import Group69 from "../Group69";
import Button from "../Button";
import "./Group113.css";

function Group113(props) {
  const { basic, group, group69Props, buttonProps } = props;

  return (
    <div className="package-card-3">
      <div className="basic-2 valign-text-middle typographyheadlineh4-extrabold-24">{basic}</div>
      <div className="luxury">
        <div className="group-7" style={{ backgroundImage: `url(${group})` }}></div>
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button className="x14030078">{buttonProps.children}</Button>
    </div>
  );
}

export default Group113;
