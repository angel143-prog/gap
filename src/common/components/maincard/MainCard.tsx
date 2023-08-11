import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainCard = ({ children }: Props) => {
  return (
    <div className="relative mb-[20px] flex w-full min-w-0 flex-col break-words rounded-[4px] border-none bg-white shadow-cardshadow">
      {children}
    </div>
  );
};

export default MainCard;
