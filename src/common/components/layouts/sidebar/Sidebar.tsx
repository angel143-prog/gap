import logo from "@/assets/png/globalhrlogo.png";
import { sidemenu } from "@/data/data";
import Images from "../../images/Images";
import Sidebarlink from "./Sidebarlink";

const Sidebar = () => {
  return (
    <nav className="absolute left-0 top-0 z-[3] block h-screen w-[100px] overflow-y-auto overflow-x-hidden bg-white p-[5px] shadow-sidebarshadow duration-500">
      <div className="mb-[1rem] block">
        <Images imagesrc={logo} imagealt="Logo" />
      </div>
      <ul className="mb-[1rem] mt-0 list-none pl-0">
        {sidemenu.map((menu) => (
          <Sidebarlink menudata={menu} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
