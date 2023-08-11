import React from "react";
import { topmenu } from "@/data/data";
import Headerlinks from "./Headerlinks";
import Headertext from "./Headertext";

const Header = () => {
  return (
    <nav className="z-[3] flex w-full items-center bg-black px-[1rem] py-0 lg:fixed">
      <div className="flex items-center gap-[25rem]">
        <Headertext />
        <ul className="mb-0 flex list-none flex-row gap-3 pl-0">
          {topmenu.map((menu) => (
            <Headerlinks menudata={menu} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
