import React from "react";
import ImgSushi from "../images/sushi.png";

function EhnglishOne() {
  return (
    <div className="mainSectionOne">
      <div className="sectiononeRight">
        <img src={ImgSushi} alt="sctionsushi" className="Sectionone" />
      </div>
      <div className="sectiononeLeft">
        <h1 className="titlescetionone">
          Eat <span className="colorWord">sushi</span> the right way.
        </h1>
        <p className="textInfoSectionone">
          <span className="colorWord">sushi</span> originally started as a
          method of preserving fish by fermenting it with rice. Many people
          believe sushi is Japanese, but it actually first appeared in China in
          the 2nd century CE. It only reached Japan in the 8th century CE.
          Originally, the fermented rice was discarded, and only the fish was
          eaten. This method provided a great source of protein, and the fish
          was rich in omega-3 oils
        </p>
        <button className="btnResrvation">Click to place a new order</button>
      </div>
    </div>
  );
}

export default EhnglishOne;
