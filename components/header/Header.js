import Link from "next/link";
import React from "react";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header className="flex items-center gap-4 bg-neutral-100 p-2">
      <Link href="." className="leading-5 text-neutral-800">
        My logo
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
