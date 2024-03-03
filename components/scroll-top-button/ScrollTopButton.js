"use client";
import { useEffect, useState } from "react";
import { PiArrowUp } from "react-icons/pi";

const ScrollTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState("-bottom-20");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn("bottom-10");
      } else {
        setShowTopBtn("-bottom-20");
      }
    });
  }, []);
  const TopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <PiArrowUp
      onClick={() => TopHandler()}
      className={`${showTopBtn} duration-500 fixed left-5 bg-neutral-100 rounded-full p-1 text-neutral-500 text-3xl shadow-[0_0_5px_#00000050] hover:shadow-[0_0_5px_#00000090] z-40 cursor-pointer`}
    />
  );
};

export default ScrollTopButton;
