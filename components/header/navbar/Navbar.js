import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <NavLink link="." title="Home" />
      </ul>
    </nav>
  );
};

export default Navbar;
