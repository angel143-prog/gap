import React, { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Breadcrumb from "./breadcrumb";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="w-[6%]">
        <Sidebar />
      </div>
      <div className="w-[94%]">
        <Header />
        <div className="h-[65px] w-full" />
        <Breadcrumb />
        {children}
      </div>
    </div>
  );
};

export default Layout;
