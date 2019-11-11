import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3">
        <b>This magic brain will detect faces in your pictures.</b> <br />
        Paste the URL to your image below and give it a try!
      </p>
      <div className="center">
        <div className="pa2 br3 shadow-5 w-75 tc form center">
          <input
            type="text"
            className="f5 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f5 link ph3 pv2 black bg-light-gray"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
