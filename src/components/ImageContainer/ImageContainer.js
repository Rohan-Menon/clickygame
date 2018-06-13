import React from "react";
import "./ImageContainer.css";

const ImageContainer = (props) => {
    return (
        <img src = {props.imgsrc} onClick={props.onClick} className=" img-responsive img-center square" alt={props.imgsrc} />
    );
};

export default ImageContainer;