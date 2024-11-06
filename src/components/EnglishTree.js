import React from "react";
import img from "../images/local.png";
import img2 from "../images/contact.png";

function EnglishTree() {
  return (
    <div className="sectionTree" id="work">
      <div className="first">
        <div className="lefttSection">
          <img src={img} alt="dsda" />
        </div>
        <div className="rightSection">
          <h1 className="titlescetionone">
            How It <span className="colorWord">Work?</span>
          </h1>
          <p className="textInfoSectionone">
            Choose the dishes and rolls you want from the menu, then send us a
            message on WhatsApp with your order and the customer's name. Payment
            is made in cash before receiving the food.
          </p>
          <div className="textInfoSectionone">
            <span>1.</span>
            <span> Choose your dish!</span>
          </div>
          <div className="textInfoSectionone">
            <span>2.</span>
            <span>Send us a message on WhatsApp</span>
          </div>
          <div className="textInfoSectionone">
            <span>3.</span>
            <span> Come pick it up !</span>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="rightSection">
          <h1 className="titlescetionone">
            Where can I <span className="colorWord">pick up</span> my delivery
            from?
          </h1>
          <p className="textInfoSectionone">
            The location is at 2 Bar Ilan Street, Herzliya
          </p>
          <div className="textInfoSectionone">
            <span>1.</span>
            <span>Arrive during our opening hours.</span>
          </div>
          <div className="textInfoSectionone">
            <span>2.</span>
            <span>
              Send us a message on WhatsApp when you’re at the location
            </span>
          </div>
          <div className="textInfoSectionone">
            <span>3.</span>
            <span> Receive your order!</span>
          </div>
        </div>
        <div className="lefttSection">
          <img src={img2} alt="dsda" />
        </div>
      </div>
    </div>
  );
}

export default EnglishTree;
