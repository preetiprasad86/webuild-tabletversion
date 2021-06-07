import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x14029960TimelineData);
  }, []);

  return (
    <div className={`x14029960 component component-wrapper not-ready ${className || ""}`}>
      <div className="master-button-19hEzQ">
        <div className="button-i1402996051-HlFfJS valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x14029960TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x14029960",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button;
