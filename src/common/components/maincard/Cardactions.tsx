import { actions } from "@/data/data";

const Cardactions = () => {
  return (
    <div className="relative min-h-[1px] w-full max-w-full flex-grow basis-0 px-[15px] py-[3px] text-right">
      {actions.map((action) => (
        <button
          type="button"
          className="m-0 mr-[10px] h-auto w-auto cursor-pointer overflow-visible border-0 bg-none px-[2px] text-[2rem] normal-case text-cardborder shadow-none"
        >
          {action.actionicon}
        </button>
      ))}
    </div>
  );
};

export default Cardactions;
