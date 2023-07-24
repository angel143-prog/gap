import Link from "next/link";
import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";

const header = () => {
  return (
    <nav className="fixed z-[3] flex w-full items-center bg-black px-[1rem] py-0">
      <div className="flex items-center gap-[25rem]">
        {/* animate-marquee overflow-hidden whitespace-nowrap */}
        <span className=" inline-block max-w-[232px]  py-[0.5rem] text-[#dfdfdf] ">
          Welcome to Geecon Systems Pvt Ltd
        </span>
        <span className=" text-[#dfdfdf]">
          Logged in at 17/07/2023 | 05:09:56am{" "}
        </span>
        <ul className="mb-0 flex list-none flex-row gap-3 pl-0">
          <li className="flex">
            <MdNotificationsNone
              size={23}
              color="white"
              className="relative m-auto items-center"
            />
            <Link
              className="block p-[0.5rem] text-[#dfdfdf]"
              href="https://apps.globalhrin.com/index.php/announcement/announcement"
            >
              Notification (0 Alert)
            </Link>
          </li>
          <li className="flex bg-statusbg ">
            <Link
              className="block p-[0.5rem] text-white"
              href="https://apps.globalhrin.com/index.php/announcement/announcement"
            >
              Punch Out
            </Link>
          </li>
          <li className="flex">
            <FaBars
              size={23}
              color="white"
              className="relative m-auto items-center"
            />
            <Link
              className="block p-[0.5rem] text-[#dfdfdf]"
              href="https://apps.globalhrin.com/index.php/announcement/announcement"
            >
              Main Menu
            </Link>
          </li>
          <li className="flex">
            <AiOutlineUser
              size={23}
              color="white"
              className="relative m-auto items-center"
            />
            <Link
              className="block p-[0.5rem] text-[#dfdfdf]"
              href="https://apps.globalhrin.com/index.php/announcement/announcement"
            >
              Users
            </Link>
          </li>
          <li className="flex">
            <ImSwitch
              size={23}
              color="white"
              className="relative m-auto items-center"
            />
            <Link
              className="block p-[0.5rem] text-[#dfdfdf]"
              href="https://apps.globalhrin.com/index.php/announcement/announcement"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default header;
