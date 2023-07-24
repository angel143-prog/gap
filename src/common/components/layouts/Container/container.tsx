import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const container = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:px-0 xl:max-w-[1240px]">
        {children}
      </div>
    </div>
  );
};
export default container;
