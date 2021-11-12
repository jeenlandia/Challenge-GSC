import React from "react";
import "../Styles/NavBar.css";
import avarImage from "../images/avatar.jpeg";

function NavBar() {
  return (
    <nav className="nav">
      <p>Columbus</p>
      <div className="nav-right">
      <div>
          <b>Ana María </b>
          <i>POS</i>
        </div>
        <img src={avarImage} />
        <h1>{"..."} </h1>
      
      </div>
    </nav>
  );
}

export default NavBar;
