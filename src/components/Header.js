import React from "react";
import Logo from "./Logo";
import "../style/Headerstyle.css";
import isr from "../images/israel.png";
import usa from "../images/usa.png";

function Header() {
  return (
    <div className="headerInside">
      <ul className="listHeder">
        <li>תפריט</li>
        <li>איך עובד ולאן?</li>
        <li>צור קשר</li>
        <li>
          <img className="imgHeader" src={isr} alt="israel" />
          <img className="imgHeader" src={usa} alt="israel" />
        </li>
      </ul>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default Header;
