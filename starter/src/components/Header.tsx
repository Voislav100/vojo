import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">Homepage</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Header;
