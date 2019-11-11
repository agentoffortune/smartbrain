import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
    return (
        <div className='center ma mt2 mb20'>
            <img id='inputImage' src={ imageURL } alt='Image Will Appear Here' className='ma10 w-60' />
            <div className='bounding-box' style={ {top: box.topRow, left: box.leftCol, height: box.boxHeight, width: box.boxWidth }}></div>
        </div>
    )
}
export default FaceRecognition;