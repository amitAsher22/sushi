import React from "react";
import imgItem from ".././images/logos.png";

function EhnglishFore() {
  return (
    <div className="mainFour" id="contact">
      <div className="middleFore">
        <h1 className="titlescetionone"> Contact us</h1>
        <p className="textInfoSectionone">WhatsApp - 052-3157737</p>
      </div>
      <div className="rightFore">
        <h1 className="titlescetionone">Opening hours:</h1>
        <p className="textInfoSectionone">Sunday to Thursday</p>
        <p className="textInfoSectionone">16:00 - 20:00 </p>
      </div>
      <div className="leftFore">
        <img src={imgItem} alt="dsd" />
      </div>
    </div>
  );
}

export default EhnglishFore;
