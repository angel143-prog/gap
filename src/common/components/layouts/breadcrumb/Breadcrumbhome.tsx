import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Breadcrumbhome = () => {
  return (
    <li className="relative float-left my-[4px] ml-0 mr-[4px] inline-block p-0 after:absolute after:left-full after:top-0 after:z-[1] after:m-0 after:h-0 after:w-0 after:translate-x-1 after:border-[17px] after:border-l-[20px] after:border-r-0 after:border-solid after:border-transparent after:border-l-[#ecedee]">
      <Link
        href="/"
        className="relative inline-flex rounded-bl-[00.25rem] rounded-tl-[0.25rem] border-[#c0c0c0] bg-[#c0c0c0] py-[9px] pl-[16px] pr-[10px] font-extrabold leading-[1em] text-black decoration-transparent shadow-breadcrumbshadow after:absolute after:left-full after:top-0 after:z-[2] after:h-0 after:w-0 after:border-[17px] after:border-l-[20px] after:border-r-0 after:border-solid after:border-transparent after:border-l-[#c0c0c0]"
      >
        <IoHome className="mr-[5px]" />
        Home
      </Link>
    </li>
  );
};

export default Breadcrumbhome;
