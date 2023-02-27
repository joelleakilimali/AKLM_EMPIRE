import React from "react";
import { GiGoat } from "react-icons/gi";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-black text-yellow-500">
      <div className="flex justify-between p-5">
        <div className="flex items-center mx-3 ">
          <RiInstagramFill />
          <h1 className="text-yellow-600 px-3">Empire AKLM</h1>
        </div>
        <div className="flex items-center  mx-3">
          <RiWhatsappFill />
          <h1 className="text-yellow-600 px-3">(+243) 81-215-7-215</h1>
        </div>
        <div className="flex items-center  mx-3">
          <SiGmail />
          <h1 className="text-yellow-600 px-3">aklmempire@gmail.com</h1>
        </div>
        <div className="flex items-center">
          <RiInstagramFill />
          <h1 className="text-yellow-600 px-3">Empire AKLM</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
