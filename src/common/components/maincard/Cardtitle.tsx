import React from "react";

const Cardtitle = ({ title }: any) => {
  return (
    <div className="relative min-h-[1px] w-full max-w-full flex-grow basis-0 px-[15px] py-[5px]">
      {title}
    </div>
  );
};

export default Cardtitle;
