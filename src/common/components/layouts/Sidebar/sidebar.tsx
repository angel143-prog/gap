import React from "react";
import logo from "@/assets/png/globalhrlogo.png";
import Image from "next/image";
import { sidemenu } from "@/data/data";
import Link from "next/link";

const sidebar = () => {
  return (
    <nav className="absolute left-0 top-0 z-[3] block h-screen w-[100px] overflow-y-auto overflow-x-hidden bg-white p-[5px] shadow-sidebarshadow duration-500">
      <div>
        <Image src={logo} alt="" />
        {sidemenu.map((menu) => (
          <Link
            href="/"
            key={menu.id}
            className="group inline-flex w-full flex-col items-center p-[5px] text-[1.1rem] hover:w-[87%] hover:rounded-[10px] hover:bg-hovermenubg hover:p-[7px] hover:text-white"
          >
            {menu.menuicon}
            <p
              className={` text-center text-[12px] text-menutext ${
                menu.menutitle === "Employee Hub" ? "p-[5px]" : "p-[7px]"
              }`}
            >
              {menu.menutitle}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default sidebar;
