import React from "react";

type Filter = "newest" | "oldest" | "mostevents";

type FilterProps = {
  filter: Filter,
  changeFilter: (input: Filter) => void;
};

export const FilterComponent: React.FC<FilterProps> = React.memo(({ filter, changeFilter }) => {
  
  return (
    <div>
      <div className="flex gap-5">
        <button
          onClick={() => changeFilter("newest")}
          className={`rounded-lg py-1 px-4 border border-gray-300 text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 ${filter === "newest" ? "bg-black text-white" : ""
            }`}
          type="button"
        >
          Newest
        </button>

        <button
          onClick={() => changeFilter("oldest")}
          className={`rounded-lg py-1 px-4 border border-gray-300 text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 ${filter === "oldest" ? "bg-black text-white" : ""
            }`}
          type="button"
        >
          Oldest
        </button>

        <button
          onClick={() => changeFilter("mostevents")}
          className={`rounded-lg py-1 px-4 border border-gray-300 text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 ${filter === "mostevents" ? "bg-black text-white" : ""
            }`}
          type="button"
        >
          Most Events
        </button>
      </div>
    </div>
  );
});

export default FilterComponent;
