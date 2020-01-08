import React, { useState } from "react";
import "./SelectorBox.css";

const SelectorBox = props => {
  const [showColor, setShowColor] = useState(false);

  return (
    <div className="main-page">
      <div
        className={`main-box ${showColor ? "green" : ""}`}
        onClick={() => setShowColor(!showColor)}
      >
        <div className={`main-checkbox ${showColor ? "checkbox-green" : ""}`}>
          {showColor ? <span className="checkbox-marker">X</span> : ""}
        </div>
        <div className="main-box__left">
          <h1 className="main-box__title">{props.value}</h1>
          <h4 className="main-box__bottle">{props.bottles} Bottle(s)</h4>
          <div className="main-box__info">
            <p className="main-box__price">
              {props.price} <span className="price-span">per bottle</span>
            </p>
            <p className="main-box__description-1">{props.description1}</p>
            <p className="main-box__description-2">{props.description2}</p>
            <p className="main-box__footer">{props.footer}</p>
          </div>
        </div>
        <div className="main-box__middle">
          <img
            className="main-box__middle-image"
            src={props.image}
            alt="stuff"
          ></img>
        </div>
        <div className="main-box__right">FREE SHIPPING</div>
      </div>
    </div>
  );
};

export default SelectorBox;
