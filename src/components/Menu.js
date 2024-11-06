import React, { useState } from "react";
import Logo from ".././components/Logo";
import "../style/Menu.css";
import two from "../images/two.png";
import imgItem from "../images/sushi.png";

function Menu() {
  const [data, setData] = useState([
    {
      img: imgItem,
      description:
        " אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע איבן איף, ברומץ כלרשט מיחוצים. קל",
      price: "30",
      title: "sushi1",
    },
    {
      img: imgItem,
      description:
        " אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קל",
      price: "50",
      title: "sushi2",
    },
  ]);
  return (
    <div>
      <div className="logoMenuSectionTWO" id="menu">
        <Logo />
      </div>
      <div className="sectionUnderImage">
        <div className="rightSectionTwo">
          <img src={two} alt="two" />
        </div>
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
      </div>
    </div>
  );
}

export default Menu;
