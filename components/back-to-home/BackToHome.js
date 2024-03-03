import Link from "next/link";
import React from "react";

const BackToHome = () => {
  return (
    <Link
      href="."
      className="text-xs text-blue-500 underline underline-offset-4"
    >
      Back to home
    </Link>
  );
};

export default BackToHome;
