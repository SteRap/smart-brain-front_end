import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center na">
      <div className=" absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            right: box.rightCol,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
