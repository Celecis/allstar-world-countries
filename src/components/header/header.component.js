import React from "react";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <Link to={"/"} onClick={() => history.push("/")}>
        <h1>Cool App Name</h1>
      </Link>
    </div>
  );
};

export default Header;
