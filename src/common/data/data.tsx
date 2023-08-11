import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BiCalendarExclamation } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FaBars, FaEnvelope, FaUserCheck, FaUsers } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { ImSwitch } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { MdNotificationsNone, MdPieChart } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { TbClockHour12, TbStarsFilled } from "react-icons/tb";
import { TfiSave } from "react-icons/tfi";
import { TiDocumentText } from "react-icons/ti";

export const sidemenu = [
  {
    id: 1,
    menutitle: "Dashboard",
    menuicon: <MdPieChart color="#7b4299" size={30} />,
    menulink: "/",
  },
  {
    id: 2,
    menutitle: "Employee Hub",
    menuicon: <FaUsers color="#405daa" size={30} />,
    menulink: "/employee_hub",
  },
  {
    id: 3,
    menutitle: "Attendance",
    menuicon: <FaUserCheck color="#b02243" size={30} />,
    menulink: "/",
  },
  {
    id: 4,
    menutitle: "Leave",
    menuicon: (
      <BiCalendarExclamation color="#f8971d" strokeWidth={0.5} size={30} />
    ),
    menulink: "/",
  },
  {
    id: 5,
    menutitle: "Timesheet",
    menuicon: <TiDocumentText color="#8aab6e" strokeWidth={0.5} size={30} />,
    menulink: "/",
  },
  {
    id: 6,
    menutitle: "Outdoor Entries",
    menuicon: <CiLogout color="#21a1a3" strokeWidth={2} size={30} />,
    menulink: "/",
  },
  {
    id: 7,
    menutitle: "Knowledge and Skills",
    menuicon: <AiOutlineSetting color="#aa8f79" strokeWidth={30} size={30} />,
    menulink: "/",
  },
  {
    id: 8,
    menutitle: "Achievement",
    menuicon: <TbStarsFilled color="#7b4299" size={30} />,
    menulink: "/",
  },
  {
    id: 9,
    menutitle: "Performance",
    menuicon: (
      <TbClockHour12
        color="#405daa"
        size={30}
        strokeWidth={2.5}
        className="rotate-45"
      />
    ),
    menulink: "/",
  },
  {
    id: 10,
    menutitle: "Policy Manager",
    menuicon: <FaUsers color="#405daa" size={30} />,
    menulink: "/",
  },
  {
    id: 11,
    menutitle: "Expenses Manager",
    menuicon: <FaUsers color="#405daa" size={30} />,
    menulink: "/",
  },
  {
    id: 12,
    menutitle: "Payroll",
    menuicon: <FaUsers color="#405daa" size={30} />,
    menulink: "/",
  },
  {
    id: 13,
    menutitle: "Holiday Manager",
    menuicon: <FaUsers color="#405daa" size={30} />,
    menulink: "/",
  },
];
export const topmenu = [
  {
    id: 1,
    menutitle: "Notification",
    menuicon: (
      <MdNotificationsNone
        size={23}
        color="white"
        className="relative m-auto items-center"
      />
    ),
    menulink: "/",
  },
  {
    id: 2,
    menutitle: "Punch Out",
    menuicon: "",
    menulink: "/",
  },
  {
    id: 3,
    menutitle: "Main Menu",
    menuicon: (
      <FaBars
        size={17}
        color="white"
        className="relative m-auto items-center"
      />
    ),
    menulink: "/",
  },
  {
    id: 4,
    menutitle: "Users",
    menuicon: (
      <AiOutlineUser
        size={23}
        color="white"
        className="relative m-auto items-center"
      />
    ),
    menulink: "/",
  },
  {
    id: 5,
    menutitle: "Logout",
    menuicon: (
      <ImSwitch
        size={17}
        color="white"
        className="relative m-auto items-center"
      />
    ),
    menulink: "/",
  },
];
export const actions = [
  {
    id: 1,
    actionicon: <TfiSave size={25} color="white" strokeWidth={0.5} />,
  },
  {
    id: 2,
    actionicon: <GoVideo size={27} color="white" strokeWidth={0.5} />,
  },
  {
    id: 3,
    actionicon: <FaEnvelope size={27} color="white" strokeWidth={0.5} />,
  },
  {
    id: 4,
    actionicon: <RxCrossCircled size={27} color="white" strokeWidth={1} />,
  },
  {
    id: 5,
    actionicon: <IoIosArrowForward size={27} color="white" />,
  },
];
