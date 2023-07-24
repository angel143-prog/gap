import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="w-[6%]">
        <Sidebar />
      </div>
      <div className="w-auto">
        <Header />
        <div className="h-[65px] w-full" />
        {children}
      </div>
    </div>
  );
};

export default Layout;
