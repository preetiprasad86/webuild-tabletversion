import React from "react";
import "./Building.css";

function Building(props) {
  const {
    overlapGroup2,
    vector2,
    vector3,
    vector4,
    group,
    vector5,
    group2,
    vector6,
    group3,
    vector7,
    group4,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
  } = props;

  return (
    <div className="building">
      <div className="overlap-group2-2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
        <div className="flex-row-5">
          <div className="flex-col-6">
            <img
              className="vector-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-108@2x.png"
            />
            <img className="vector-2" src={vector2} />
            <img className="vector-2" src={vector3} />
            <img className="vector-2" src={vector4} />
          </div>
          <div className="flex-col-2">
            <div className="group-1" style={{ backgroundImage: `url(${group})` }}></div>
            <img className="vector-3" src={vector5} />
            <div className="group-1" style={{ backgroundImage: `url(${group2})` }}></div>
            <img className="vector-3" src={vector6} />
          </div>
        </div>
        <div className="flex-col-3">
          <div className="group-1" style={{ backgroundImage: `url(${group3})` }}></div>
          <img className="vector-3" src={vector7} />
          <div className="group-1" style={{ backgroundImage: `url(${group4})` }}></div>
          <img className="vector-3" src={vector8} />
        </div>
        <div className="flex-col-4">
          <img className="vector-4" src={vector9} />
          <img className="vector-4" src={vector10} />
          <img className="vector-4" src={vector11} />
          <img className="vector-4" src={vector12} />
        </div>
        <div className="flex-col-7">
          <div className="group-4" style={{ backgroundImage: `url(${group5})` }}></div>
          <div className="group-2" style={{ backgroundImage: `url(${group6})` }}></div>
          <div className="group-2" style={{ backgroundImage: `url(${group7})` }}></div>
          <div className="group-2" style={{ backgroundImage: `url(${group8})` }}></div>
        </div>
        <div className="flex-col-5">
          <div className="group" style={{ backgroundImage: `url(${group9})` }}></div>
          <div className="group-3" style={{ backgroundImage: `url(${group10})` }}></div>
          <div className="group-3" style={{ backgroundImage: `url(${group11})` }}></div>
          <div className="group-3" style={{ backgroundImage: `url(${group12})` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Building;
