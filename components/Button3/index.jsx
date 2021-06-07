import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button3.css";

function Button3(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x14030124TimelineData);
  }, []);

  return (
    <div className="x14030124 component component-wrapper not-ready">
      <div className="master-button-6FEKkr">
        <div className="button-i1403012451-UJmb23 valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x14030124TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x14030124",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];

export default Button3;
