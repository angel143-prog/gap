import React from "react";
import logo from "@/assets/png/globalhrlogo.png";
import Image from "next/image";

const sidebar = () => {
  return (
    <nav className="absolute left-0 top-0 z-[3] h-[99%] w-[100px] overflow-y-auto bg-white p-[5px] shadow-sidebarshadow transition duration-500">
      <div>
        <Image src={logo} alt="" />
      </div>
    </nav>
  );
};

export default sidebar;
