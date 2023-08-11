"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface BreadcrumbItem {
  title: string;
  url: string;
  id: number;
}

const Breadcrumbsublinks = () => {
  const pathname = usePathname();

  const humanize = (str: any) => {
    let i;
    const frags = str.split("_");
    for (i = 0; i < frags.length; i++) {
      frags[`${i}`] =
        frags[`${i}`].charAt(0).toUpperCase() + frags[`${i}`].slice(1);
    }
    return frags.join(" ");
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    let id = 1;
    const parts = pathname.split("/").filter(Boolean);
    let url = "";
    let title = "";
    return parts.map((part) => {
      url += `/${part}`;
      id += id;
      title = humanize(part);
      return {
        title,
        url,
        id,
      };
    });
  };

  const crumbs: BreadcrumbItem[] = generateBreadcrumbs();
  return (
    <>
      {crumbs.map((crumb) => (
        <li
          className="relative float-left my-[4px] ml-0 mr-[4px] inline-block p-0 after:absolute after:left-full after:top-0 after:z-[1] after:m-0 after:h-0 after:w-0 after:translate-x-1 after:border-[17px] after:border-l-[20px] after:border-r-0 after:border-solid after:border-transparent after:border-l-[#ecedee]"
          key={crumb.id}
        >
          <Link
            href={crumb.url}
            className="relative inline-flex rounded-bl-[00.25rem] rounded-tl-[0.25rem] border-[#c0c0c0] bg-[#c0c0c0] py-[9px] pl-[30px] pr-[10px] font-extrabold leading-[1em] text-black decoration-transparent shadow-breadcrumbshadow after:absolute after:left-full after:top-0 after:z-[2] after:h-0 after:w-0 after:border-[17px] after:border-l-[20px] after:border-r-0 after:border-solid after:border-transparent after:border-l-[#c0c0c0]"
          >
            {crumb.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Breadcrumbsublinks;
