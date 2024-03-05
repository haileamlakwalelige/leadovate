import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Copy = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-[#DCDCDC]">
      <div className=" border-t-[1px] border-gray-600 px-2 sm:px-6 md:px-8 flex justify-center flex-wrap md:justify-between items-center gap-6 sm:gap-10 py-4">
        <div className="flex gap-2">
          <p>Copyright</p>
          <FaRegCopyright size={20} className="mt-1" />
          <p>LEADOVATE {currentYear}</p>
        </div>
        <div>
          <Link to="https://heldertechnologies.com/">
            <p>Powred By Helder Technologies Solustions PLC </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copy;
