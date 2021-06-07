import React from "react";
import Premium from "../Premium";
import Group69 from "../Group69";
import Button from "../Button";
import "./Group1122.css";

function Group1122(props) {
  const { premium, premiumProps, group69Props, buttonProps } = props;

  return (
    <div className="package-card-2">
      <div className="premium valign-text-middle typographyheadlineh4-extrabold-24">{premium}</div>
      <Premium
        overlapGroup={premiumProps.overlapGroup}
        overlapGroup1={premiumProps.overlapGroup1}
        vector2={premiumProps.vector2}
        group={premiumProps.group}
        vector3={premiumProps.vector3}
      />
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button className="x14030039">{buttonProps.children}</Button>
    </div>
  );
}

export default Group1122;
