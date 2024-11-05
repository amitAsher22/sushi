import React, { useState } from "react";
import Logo from ".././components/Logo";
import "../style/Menu.css";
import two from "../images/two.png";
import imgItem from "../images/sushi.png";

function EnglishTwo() {
  const [data, setData] = useState([
    {
      img: imgItem,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent",
      price: "30",
      title: "sushi1",
    },
    {
      img: imgItem,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent",
      price: "30",
      title: "sushi1",
    },
  ]);
  return (
    <div>
      <div className="logoMenuSectionTWO">
        <Logo />
      </div>
      <div className="sectionUnderImage">
        <div>
          <div className="directionSectiontwo">
            {data.map((item, keys) => {
              return (
                <div className="card" key={keys}>
                  <img
                    src={item.img}
                    alt={item.description}
                    className="imgsectiontwo"
                  />
                  <div>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rightSectionTwo">
          <img src={two} alt="two" />
        </div>
      </div>
    </div>
  );
}

export default EnglishTwo;
