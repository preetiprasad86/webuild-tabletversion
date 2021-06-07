import React from "react";
import "./Premium.css";

function Premium(props) {
  const { overlapGroup, overlapGroup1, vector2, group, vector3 } = props;

  return (
    <div className="premium-1">
      <div className="overlap-group2-6" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="flex-row-6">
          <div className="overlap-group4">
            <div className="overlap-group3-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <img
                className="vector-20"
                src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-82@2x.png"
              />
            </div>
            <img className="vector-21" src={vector2} />
          </div>
          <div className="group-6" style={{ backgroundImage: `url(${group})` }}></div>
        </div>
        <img className="vector-19" src={vector3} />
      </div>
    </div>
  );
}

export default Premium;
