import { IndianRupee, LocateFixedIcon } from "lucide-react";
import React from "react";

type FilterSectionProps = {
  filterUpdate: any;
};

const FilterSection: React.FC<FilterSectionProps> = React.memo(
  ({ filterUpdate }) => {
    return (
      <div className="fixed z-10 bg-white ml-20 mt-44 pt-16 flex h-[calc(70vh-20rem)] flex-col rounded-2xl bg-clip-border px-8 text-gray-700 shadow-2xl ">
        <nav className="flex min-w-[240px] flex-col gap-2 font-sans text-base font-medium text-blue-gray-700">
          <div
            onClick={() => filterUpdate("nearby")}
            role="button"
            className="flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-50 hover:shadow-md hover:text-blue-900"
          >
            <div className="p-2 bg-blue-100 rounded-full">
              <LocateFixedIcon className="w-5 h-5 text-blue-700" />
            </div>
            <span>Nearby</span>
          </div>

          <div
            onClick={() => filterUpdate("free")}
            role="button"
            className="flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-50 hover:shadow-md hover:text-green-900"
          >
            <div className="p-2 bg-green-100 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3706/3706340.png"
                className="w-5 h-5"
                alt="free-icon"
              />
            </div>
            <span>Free</span>
          </div>
          <div
            onClick={() => filterUpdate("paid")}
            role="button"
            className="flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-yellow-50 hover:shadow-md hover:text-yellow-900"
          >
            <div className="p-2 bg-yellow-100 rounded-full">
              <IndianRupee className="w-5 h-5 text-yellow-700" />
            </div>
            <span>Paid</span>
          </div>
        </nav>
      </div>
    );
  }
);

export default FilterSection;
