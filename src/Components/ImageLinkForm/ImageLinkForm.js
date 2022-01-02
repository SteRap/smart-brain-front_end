import React from "react";
import "./Image.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="ImageLinkForm_text">
        This Magic Brain will detect faces in your pictures. Give it a try!
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="w-30 growlink ph3 pv2 dib white bg-light-purple button "
            onClick={onPictureSubmit}
          >
            <span className="ImageLinkForm_btn">Detect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
