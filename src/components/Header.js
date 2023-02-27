import React from "react";
import { GiGoat } from "react-icons/gi";
function Header() {
  return (
    <div className="bg-black text-yellow-500 font-semibold p-8">
      <div className="flex justify-between">
        <div className=" flex items-center">
          <GiGoat size={50} />
          <h1 className="font-bold text-2xl">L'EMPIRE AKILIMALI</h1>
        </div>
        <div className="flex cursor-pointer">
          <h1 className="mx-3"> Services</h1>
          <h1 className="mx-3">Partenaire</h1>
          <h1 className="mx-3"> A propos</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
