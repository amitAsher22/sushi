import React from "react";
import logosushi from "../images/logos.png";
import "../style/Logostyle.css";

function Logo() {
  return <img src={logosushi} alt="sushi" className="iconLogo" />;
}

export default Logo;
