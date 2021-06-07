import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x1546557TimelineData);
  }, []);

  return (
    <div className="x1546557 component component-wrapper not-ready">
      <div className="master-button-YaOvcM">
        <div className="button-i154655751-uuF4e7 valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x1546557TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x1546557",
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

export default Button22;
