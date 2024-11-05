import React from "react";
import Logo from "./Logo";
import "../style/Headerstyle.css";
import isr from "../images/israel.png";
import usa from "../images/usa.png";
import { Link } from "react-router-dom";

function EhHeader() {
  return (
    <div className="headerInside">
      <ul className="listHeder">
        <li>Menu</li>
        <li>how it work?</li>
        <li> contact</li>
        <li>
          <Link to="/">
            <img className="imgHeader" src={isr} alt="israel" />
          </Link>
          <Link to="/en">
            <img className="imgHeader" src={usa} alt="israel" />
          </Link>
        </li>
      </ul>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default EhHeader;
