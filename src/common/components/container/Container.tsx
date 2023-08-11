import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      {/* min-w-0 xl:max-w-[1240px] max-w-screen */}
      <div className=" relative flex-grow px-4 md:px-[40px] lg:mx-10 lg:px-0 ">
        {children}
      </div>
    </div>
  );
};
export default Container;
