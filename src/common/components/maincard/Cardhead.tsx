import React from "react";
import Cardtitle from "./Cardtitle";
import Cardactions from "./Cardactions";

const Cardhead = ({ cardtitle }: any) => {
  return (
    <div className="border-b-solid mb-0 min-h-[20px] rounded-tl-[4px] rounded-tr-[4px] border-b-[1px] border-b-cardborder bg-statusbg px-[0.6rem] py-[0.3rem] text-[1.15rem] leading-[calc(45px_-_1.4rem)] text-white">
      <div className="-mx-[15px] flex flex-wrap before:table after:clear-both after:table">
        <Cardtitle title={cardtitle} />
        <Cardactions />
      </div>
    </div>
  );
};

export default Cardhead;
