import { MdPieChart } from "react-icons/md";
import { FaUsers, FaUserCheck } from "react-icons/fa";
import { BiCalendarExclamation } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import { AiOutlineSetting } from "react-icons/ai";
import { TbStarsFilled, TbClockHour12 } from "react-icons/tb";

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
    menulink: "/",
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
