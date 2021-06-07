import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button4.css";

function Button4(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x14029938TimelineData);
  }, []);

  return (
    <div className="x14029938 component component-wrapper not-ready">
      <div className="master-button-EDvLDC">
        <div className="button-i1402993851-TkCHxC valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x14029938TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x14029938",
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

export default Button4;
