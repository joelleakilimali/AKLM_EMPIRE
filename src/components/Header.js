import React from "react";
import { GiGoat } from "react-icons/gi";
import { BiAlignJustify } from "react-icons/bi";

function Header() {
  return (
    <div className="bg-black text-yellow-500 font-semibold p-8">
      <div className="flex  items-center justify-between">
        <div className=" flex items-center">
          <GiGoat size={70} />
          <h1 className="font-bold text-3xl mx-5">L'EMPIRE AKILIMALI</h1>
        </div>
        <div className="flex cursor-pointer">
          <BiAlignJustify size={30} />
        </div>
      </div>
    </div>
  );
}

export default Header;
