import React from "react";
import "./Plan.css";

function Plan(props) {
  const { group, overlapGroup2, vector2, vector3 } = props;

  return (
    <div className="plan">
      <div className="group-5" style={{ backgroundImage: `url(${group})` }}>
        <div className="overlap-group2-4" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <img
            className="vector-16"
            src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-145@2x.png"
          />
        </div>
        <img className="vector-15" src={vector2} />
        <img className="vector-14" src={vector3} />
      </div>
    </div>
  );
}

export default Plan;
