import Link from "next/link";
import React from "react";

const NavLink = ({ link, title }) => {
  return (
    <li>
      <Link
        href={link}
        className="text-sm text-neutral-600 hover:underline hover:underline-offset-4"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
