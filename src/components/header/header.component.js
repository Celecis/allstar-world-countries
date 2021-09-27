import React from "react";
import "./header.styles.css";

import IconBack from "./icon-back.component";
import IconLogo from "./icon-logo.component";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <Link to={"/"} onClick={() => history.push("/")} className="nav_link">
        <h1 className="heading_h1">
          <IconLogo icon="info" size={22} color="white" />
          AllStar World Countries
        </h1>
        <div className="go_back">
          <IconBack icon="info" size={22} color="#551A8B" />
          <span>Go Back</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
