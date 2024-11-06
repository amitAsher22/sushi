import React from "react";
import Logo from "./Logo";
import "../style/Headerstyle.css";
import isr from "../images/israel.png";
import usa from "../images/usa.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function EhHeader() {
  return (
    <div className="headerInside">
      <ul className="listHeder">
        <HashLink to="#menu" smooth>
          <li>Menu</li>
        </HashLink>
        <HashLink to="#work" smooth>
          <li>how it work?</li>
        </HashLink>
        <HashLink to="#contact" smooth>
          <li> contact</li>
        </HashLink>
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
