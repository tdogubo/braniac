import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="fix abs-center" style={{ top: "462px" }}>
            <img id="inputImage" alt="" src={imageUrl} width="500px" height="auto" />
            <div className="bounding-box" style={{top:box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
        </div>);
}

export default FaceRecognition;