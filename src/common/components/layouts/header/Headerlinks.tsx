import Link from "next/link";

const Headerlinks = ({ menudata }: any) => {
  return (
    <li
      className={`flex ${
        menudata.menutitle === "Punch Out" ? "bg-statusbg" : "bg-transparent"
      }`}
    >
      {menudata.menuicon}
      <Link
        className={`block p-[0.5rem] ${
          menudata.menutitle === "Punch Out" ? "text-white" : "text-[#dfdfdf]"
        } `}
        href={menudata.menulink}
      >
        {menudata.menutitle === "Notification"
          ? [`${menudata.menutitle} (0 Alert)`]
          : menudata.menutitle}
      </Link>
    </li>
  );
};

export default Headerlinks;
