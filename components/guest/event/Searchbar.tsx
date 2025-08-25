import React from "react";

type SearchbarProps = {
  input: string;
  inputUpdateFunction: (input: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = React.memo(
  ({ input, inputUpdateFunction }) => {
    return (
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          onChange={(e) => inputUpdateFunction(e.target.value)}
          className="w-full bg-transparent placeholder:text-slate-400
                   text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 
                    transition duration-300 ease focus:outline-none
                    focus:border-slate-400 hover:border-slate-300 
                    shadow-sm focus:shadow"
          value={input || ""}
          placeholder={"Event name..."}
        />
      </div>
    );
  }
);

export default Searchbar;
