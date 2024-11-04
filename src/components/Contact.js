import React from "react";
import "../style/SectionFourStyle.css";
import imgItem from ".././images/logos.png";

function Contact() {
  return (
    <div className="mainFour">
      <div className="middleFore">
        <h1 className="titlescetionone"> יצירת קשר</h1>
        <p className="textInfoSectionone">WhatsApp - 0523157737</p>
      </div>
      <div className="rightFore">
        <h1 className="titlescetionone">שעות פתיחה</h1>
        <p className="textInfoSectionone">ראשון- רביעי</p>
        <p className="textInfoSectionone">16:00 - 20:00 </p>
      </div>
      <div className="leftFore">
        <img src={imgItem} alt="dsd" />
      </div>
    </div>
  );
}

export default Contact;
