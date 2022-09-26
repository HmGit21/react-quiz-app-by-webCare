import React from "react";
import logo from "../../Images/logo.png";
import "../../styles/Nav.Module.css";
import Accounts from './Accounts';
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className="nav">
        <div className="logoBox">
          <div className="logo">
              <Link to="/home">
                <img src={logo} alt="logo" />
              </Link>
          </div>
          <div className="siteTitle">
              <Link to="/home">
                <h4>Learn with Iqbal</h4>
              </Link>
          </div>
      </div>
      <Accounts />
    </div>
  );
};

export default Logo;
