import Link from "next/link";

const Sidebarlink = ({ menudata }: any) => {
  return (
    <li key={menudata.id}>
      <Link
        href={menudata.menulink}
        className="group inline-flex w-full flex-col items-center p-[5px] text-[1.1em] text-black decoration-transparent transition-all duration-300 hover:w-[88%] hover:rounded-[10px] hover:bg-[#efefef] hover:p-[7px] hover:text-white"
      >
        {menudata.menuicon}
        <span
          className={` text-center text-[12px] text-statusbg ${
            menudata.menutitle === "Employee Hub" ? "p-[3px]" : "p-[7px]"
          }`}
        >
          {menudata.menutitle}
        </span>
      </Link>
    </li>
  );
};

export default Sidebarlink;
