import React from "react";
import logo from "@/assets/png/globalhrlogo.png";
import Image from "next/image";
import { sidemenu } from "@/data/data";
import Link from "next/link";

const sidebar = () => {
  return (
    <nav className="absolute left-0 top-0 z-[3] block h-screen w-[100px] overflow-y-auto overflow-x-hidden bg-white p-[5px] shadow-sidebarshadow duration-500">
      <div className="block">
        <Image
          src={logo}
          alt=""
          className="top-0 my-[10px] h-[40px] w-[70px] delay-40"
        />
      </div>
      <ul className="mb-[1rem] mt-0 list-none pl-0">
        {sidemenu.map((menu) => (
          <li>
            <Link
              href="/"
              key={menu.id}
              className="group inline-flex w-full flex-col items-center p-[5px] text-[1.1em] text-black decoration-transparent transition-all duration-300 hover:w-[88%] hover:rounded-[10px] hover:bg-[#efefef] hover:p-[7px] hover:text-white"
            >
              {menu.menuicon}
              <span
                className={` text-center text-[12px] text-menutext ${
                  menu.menutitle === "Employee Hub" ? "p-[3px]" : "p-[7px]"
                }`}
              >
                {menu.menutitle}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default sidebar;
