import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 bg-neutral-500 p-2">
      <Link href="https://mkamran.ir/" className="text-neutral-100 text-sm">Mohammad Kamran</Link>
      <p className="text-neutral-100 text-sm"><span className="text-xs">&copy;</span> Copyright 2024</p>
    </footer>
  );
};

export default Footer;
