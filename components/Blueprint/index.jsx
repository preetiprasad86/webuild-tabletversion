import React from "react";
import "./Blueprint.css";

function Blueprint(props) {
  const { vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9 } = props;

  return (
    <div className="blueprint">
      <div className="overlap-group2-3">
        <img
          className="vector-12"
          src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-132@2x.png"
        />
        <img className="vector-7" src={vector2} />
        <img className="vector-5" src={vector3} />
        <img className="vector-8" src={vector4} />
        <img className="vector-9" src={vector5} />
        <img className="vector-11" src={vector6} />
        <img className="vector-10" src={vector7} />
        <img className="vector-6" src={vector8} />
        <img className="vector-13" src={vector9} />
      </div>
    </div>
  );
}

export default Blueprint;
