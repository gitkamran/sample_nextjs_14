import React from "react";
import { PiCircleNotch } from "react-icons/pi";

const loading = () => {
  return (
    <main className="flex items-center justify-center p-24">
      <PiCircleNotch className="text-neutral-500 text-2xl animate-spin" />
    </main>
  );
};

export default loading;
